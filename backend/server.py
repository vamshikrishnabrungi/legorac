from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException, Form
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import base64
import io
from PyPDF2 import PdfReader
from docx import Document
from PIL import Image

# Import emergentintegrations
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent, FileContentWithMimeType


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'test_database')]

# Get LLM API Key
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ChatMessage(BaseModel):
    id: str
    session_id: str
    role: str  # 'user' or 'assistant'
    content: str
    timestamp: datetime
    files: Optional[List[dict]] = None

class ChatRequest(BaseModel):
    session_id: str
    message: str
    system_message: Optional[str] = "You are NAYA AI, a legal assistant specializing in Indian law. Provide accurate legal information with citations from Indian legal codes (IPC, CrPC, CPC, Evidence Act) and case law. Always remind users to consult a qualified lawyer for their specific situation."

class ChatResponse(BaseModel):
    message: str
    session_id: str
    timestamp: datetime

# Utility functions for document processing
def extract_text_from_pdf(file_bytes: bytes) -> str:
    """Extract text from PDF file"""
    try:
        pdf_reader = PdfReader(io.BytesIO(file_bytes))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
        return text.strip()
    except Exception as e:
        logger.error(f"Error extracting PDF text: {e}")
        return ""

def extract_text_from_docx(file_bytes: bytes) -> str:
    """Extract text from DOCX file"""
    try:
        doc = Document(io.BytesIO(file_bytes))
        text = "\n".join([paragraph.text for paragraph in doc.paragraphs])
        return text.strip()
    except Exception as e:
        logger.error(f"Error extracting DOCX text: {e}")
        return ""

def image_to_base64(file_bytes: bytes, mime_type: str) -> str:
    """Convert image to base64"""
    try:
        # Validate and process image
        img = Image.open(io.BytesIO(file_bytes))
        
        # Convert to RGB if needed
        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGB')
        
        # Resize if too large (max 2048px on longest side)
        max_size = 2048
        if max(img.size) > max_size:
            ratio = max_size / max(img.size)
            new_size = tuple(int(dim * ratio) for dim in img.size)
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Convert to bytes
        output = io.BytesIO()
        format_map = {
            'image/jpeg': 'JPEG',
            'image/png': 'PNG',
            'image/webp': 'WEBP'
        }
        img_format = format_map.get(mime_type, 'JPEG')
        img.save(output, format=img_format, quality=85)
        img_bytes = output.getvalue()
        
        return base64.b64encode(img_bytes).decode('utf-8')
    except Exception as e:
        logger.error(f"Error converting image to base64: {e}")
        return ""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Handle chat messages with LLM integration
    """
    try:
        # Create new chat instance for this session
        chat_instance = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=request.session_id,
            system_message=request.system_message
        ).with_model("openai", "gpt-4o")
        
        # Create user message
        user_msg = UserMessage(text=request.message)
        
        # Send message and get response
        response = await chat_instance.send_message(user_msg)
        
        # Store user message in database
        user_message_doc = {
            "id": str(uuid.uuid4()),
            "session_id": request.session_id,
            "role": "user",
            "content": request.message,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.chat_messages.insert_one(user_message_doc)
        
        # Store assistant response in database
        assistant_message_doc = {
            "id": str(uuid.uuid4()),
            "session_id": request.session_id,
            "role": "assistant",
            "content": response,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.chat_messages.insert_one(assistant_message_doc)
        
        return ChatResponse(
            message=response,
            session_id=request.session_id,
            timestamp=datetime.now(timezone.utc)
        )
    except Exception as e:
        logger.error(f"Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")

@api_router.post("/chat/upload", response_model=ChatResponse)
async def chat_with_upload(
    session_id: str = Form(...),
    message: str = Form(...),
    files: List[UploadFile] = File(...),
    system_message: Optional[str] = Form("You are NAYA AI, a legal assistant specializing in Indian law. Provide accurate legal information with citations from Indian legal codes (IPC, CrPC, CPC, Evidence Act) and case law. Always remind users to consult a qualified lawyer for their specific situation.")
):
    """
    Handle chat messages with file uploads (documents and images)
    """
    try:
        # Create new chat instance for this session
        chat_instance = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=system_message
        ).with_model("openai", "gpt-4o")
        
        # Process uploaded files
        file_contents = []
        extracted_texts = []
        file_info = []
        
        for file in files:
            content = await file.read()
            filename = file.filename
            content_type = file.content_type
            
            file_info.append({
                "name": filename,
                "type": content_type,
                "size": len(content)
            })
            
            # Handle different file types
            if content_type == 'application/pdf':
                # Extract text from PDF
                text = extract_text_from_pdf(content)
                if text:
                    extracted_texts.append(f"--- Content from {filename} ---\n{text}\n")
            
            elif content_type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                # Extract text from DOCX
                text = extract_text_from_docx(content)
                if text:
                    extracted_texts.append(f"--- Content from {filename} ---\n{text}\n")
            
            elif content_type in ['image/jpeg', 'image/png', 'image/webp']:
                # Convert image to base64 for vision API
                img_base64 = image_to_base64(content, content_type)
                if img_base64:
                    file_contents.append(ImageContent(image_base64=img_base64))
        
        # Combine message with extracted text
        full_message = message
        if extracted_texts:
            full_message += "\n\n" + "\n".join(extracted_texts)
        
        # Create user message with attachments
        user_msg = UserMessage(
            text=full_message,
            file_contents=file_contents if file_contents else None
        )
        
        # Send message and get response
        response = await chat_instance.send_message(user_msg)
        
        # Store user message in database
        user_message_doc = {
            "id": str(uuid.uuid4()),
            "session_id": session_id,
            "role": "user",
            "content": message,
            "files": file_info,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.chat_messages.insert_one(user_message_doc)
        
        # Store assistant response in database
        assistant_message_doc = {
            "id": str(uuid.uuid4()),
            "session_id": session_id,
            "role": "assistant",
            "content": response,
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.chat_messages.insert_one(assistant_message_doc)
        
        return ChatResponse(
            message=response,
            session_id=session_id,
            timestamp=datetime.now(timezone.utc)
        )
    except Exception as e:
        logger.error(f"Error in chat upload endpoint: {e}")
        raise HTTPException(status_code=500, detail=f"Chat upload error: {str(e)}")

@api_router.get("/chat/history/{session_id}")
async def get_chat_history(session_id: str):
    """
    Get chat history for a session
    """
    try:
        messages = await db.chat_messages.find(
            {"session_id": session_id},
            {"_id": 0}
        ).sort("timestamp", 1).to_list(1000)
        
        return {"messages": messages}
    except Exception as e:
        logger.error(f"Error fetching chat history: {e}")
        raise HTTPException(status_code=500, detail=f"Error fetching history: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
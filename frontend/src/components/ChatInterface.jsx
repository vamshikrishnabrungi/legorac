import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, X, FileText, Shield, BookOpen, Scale, Plus } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && uploadedFiles.length === 0) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input || `Analyzing ${uploadedFiles.length} document(s)`,
      timestamp: new Date(),
      files: uploadedFiles.map(f => ({ name: f.name, size: f.size })),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    const currentFiles = [...uploadedFiles];
    setInput('');
    setUploadedFiles([]);
    setIsTyping(true);

    try {
      let response;
      
      if (currentFiles.length > 0) {
        // Upload files with message
        const formData = new FormData();
        formData.append('session_id', sessionId);
        formData.append('message', currentInput || 'Please analyze the uploaded documents.');
        currentFiles.forEach(file => {
          formData.append('files', file);
        });

        const result = await axios.post(`${BACKEND_URL}/api/chat/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        response = result.data.message;
      } else {
        // Text-only message
        const result = await axios.post(`${BACKEND_URL}/api/chat`, {
          session_id: sessionId,
          message: currentInput,
        });
        response = result.data.message;
      }

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} exceeds 10MB`);
        return false;
      }
      if (!file.name.match(/\.(pdf|docx|jpg|jpeg|png|webp)$/i)) {
        alert(`${file.name} format not supported. Please use PDF, DOCX, JPG, PNG, or WEBP.`);
        return false;
      }
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5));
    setShowPlusMenu(false);
  };

  const starterPrompts = [
    'Know your rights',
    'Understand a legal notice',
    'How to file an FIR',
    'Consumer complaint guide',
    'Draft a legal notice',
    'Analyze uploaded case file',
    'Employment & HR policy guide',
  ];

  return (
    <div className="w-full mb-12">
      {/* Clean Header */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-serif mb-2">Chat with India’s first legal AI</h2>
        <p className="text-gray-500 text-sm sm:text-base">Ask anything — e.g., ‘Section 420 IPC’, ‘Draft a bail application’, or ‘Analyze casefile.pdf’.</p>
      </div>

      {/* Disclaimer - Minimal */}
      <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
        <p className="text-sm text-gray-700 flex items-start gap-2">
          <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <span>
            Legal information with citations. Not legal advice. Consult a qualified lawyer for your situation.
          </span>
        </p>
      </div>

      {/* Main Chat Area - Clean */}
      <div className="min-h-[320px] mb-4">
        {messages.length === 0 && (
          <div className="py-6">
            <p className="text-gray-500 mb-6 text-center">Choose a topic to get started, or type your question below</p>
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
              {starterPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(prompt)}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${msg.type === 'user' ? 'bg-black text-white' : 'bg-white'} rounded-2xl px-6 py-4`}>
                {msg.files && msg.files.length > 0 && (
                  <div className="mb-3 flex gap-2 flex-wrap">
                    {msg.files.map((file, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm px-3 py-1.5 bg-white/10 rounded-lg">
                        <FileText className="w-4 h-4" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={`prose ${msg.type === 'user' ? 'prose-invert' : ''} max-w-none`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap m-0">{msg.content}</p>
                </div>
                
                {msg.citations && msg.citations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Citations</p>
                    <div className="space-y-2">
                      {msg.citations.map((cite, idx) => (
                        <div key={idx} className="text-xs bg-gray-50 rounded-lg p-3">
                          <p className="font-medium text-gray-900">{cite.case}</p>
                          <p className="text-gray-500 mt-1">{cite.citation} • {cite.court} ({cite.year})</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-6 py-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* File Preview */}
      {uploadedFiles.length > 0 && (
        <div className="mb-4 flex gap-2 flex-wrap">
          {uploadedFiles.map((file, idx) => (
            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <FileText className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">{file.name}</span>
              <button onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input Area - Clean ChatGPT Style */}
      <div className="relative">
        <div className="flex gap-2 items-end border border-gray-300 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow p-2">
          {/* Plus Menu */}
          <div className="relative">
            <button
              onClick={() => setShowPlusMenu(!showPlusMenu)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
            
            {showPlusMenu && (
              <div className="absolute bottom-full mb-2 left-0 bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[200px] z-10">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.jpg,.jpeg,.png,.webp"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload documents</span>
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Legal research</span>
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3">
                  <FileText className="w-4 h-4" />
                  <span>Draft document</span>
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-3">
                  <Scale className="w-4 h-4" />
                  <span>Case analysis</span>
                </button>
              </div>
            )}
          </div>

          {/* Input Field */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask anything — e.g., 'Section 420 IPC', 'Draft a bail application', or 'Analyze casefile.pdf'."
            rows={1}
            className="flex-1 resize-none outline-none text-sm py-2 max-h-32 overflow-y-auto"
            style={{ minHeight: '24px' }}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!input.trim() && uploadedFiles.length === 0}
            className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-3">
          India (IPC/CrPC/Evidence Act) • English • Privacy: Not stored
        </p>
      </div>

      {/* Feature Cards - Minimal */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
        <div className="col-span-full -mt-8 mb-4 text-center">
          <p className="text-xs sm:text-sm text-gray-500">Built for precision. Trusted for speed.</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-serif text-base font-semibold mb-2">Verified Citations</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Paragraph-level citations from SC and HC judgments
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-serif text-base font-semibold mb-2">Document Analysis</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Instant analysis with key dates and risk identification
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-serif text-base font-semibold mb-2">Draft Assistance</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Generate legal documents with proper formatting
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-serif text-base font-semibold mb-2">Loophole Detection</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Automatically flag inconsistencies in your case.
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <h4 className="font-serif text-base font-semibold mb-2">Compliance & HR Automation</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Simplify internal legal workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

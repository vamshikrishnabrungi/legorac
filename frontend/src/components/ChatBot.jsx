import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, X, FileText, Shield, MessageSquare, BookOpen, Scale } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [doNotStore, setDoNotStore] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            type: 'bot',
            content:
              "Hello! I'm NAYA AI, your legal assistant. I can help you understand legal documents, answer questions with citations, and surface next steps. What would you like to know today?",
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() && uploadedFiles.length === 0) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input || `Uploaded: ${uploadedFiles.map(f => f.name).join(', ')}`,
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
        content: 'Sorry, I encountered an error. Please try again.',
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
  };

  const starterChips = [
    'Know your rights',
    'Understand a legal notice',
    'How to file an FIR',
    'Consumer complaint guide',
    'Draft a legal notice',
    'Analyze uploaded case file',
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-[450px] h-[700px] flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-black text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="font-serif text-lg">NAYA AI</h3>
                <p className="text-xs text-gray-300">Legal Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-gray-800 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Disclaimer Banner */}
          <div className="bg-yellow-50 border-b border-yellow-200 p-3 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p>
                Legal information with citations. Not legal advice. Consult a qualified lawyer for your situation.
              </p>
            </div>
          </div>

          {/* Settings Bar */}
          <div className="border-b border-gray-200 p-3 bg-gray-50">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Jurisdiction */}
              <span className="px-3 py-1.5 text-xs border border-gray-300 rounded-full bg-white">
                🇮🇳 India (IPC/CrPC)
              </span>

              {/* Language */}
              <span className="px-3 py-1.5 text-xs border border-gray-300 rounded-full bg-white">
                English
              </span>

              {/* Privacy Toggle */}
              <label className="flex items-center gap-2 px-3 py-1.5 text-xs border border-gray-300 rounded-full bg-white cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={doNotStore}
                  onChange={(e) => setDoNotStore(e.target.checked)}
                  className="w-3 h-3"
                />
                <span>Do not store</span>
              </label>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-sm text-gray-500 mb-4">Start a conversation or choose a topic:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {starterChips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(chip)}
                      className="px-3 py-2 text-xs border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.type === 'user' ? 'bg-black text-white' : 'bg-white border border-gray-200'} rounded-lg p-3 shadow-sm`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  
                  {msg.file && (
                    <div className="mt-2 flex items-center gap-2 text-xs opacity-80">
                      <FileText className="w-3 h-3" />
                      <span>{msg.file.name}</span>
                    </div>
                  )}

                  {msg.citations && msg.citations.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-2">📚 Citations:</p>
                      {msg.citations.map((cite, idx) => (
                        <div key={idx} className="text-xs text-gray-700 mb-2 bg-gray-50 p-2 rounded">
                          <p className="font-medium">{cite.case}</p>
                          <p className="text-gray-500">{cite.citation} | {cite.court} ({cite.year})</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.hasDraft && msg.draftContent && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded border border-gray-300 relative">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                          <span className="text-6xl font-bold text-gray-400 rotate-[-20deg]">DEMO</span>
                        </div>
                        <pre className="text-xs font-mono whitespace-pre-wrap text-gray-700 max-h-48 overflow-y-auto">
                          {msg.draftContent}
                        </pre>
                        <div className="mt-3 text-center">
                          <button className="text-xs bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                            Sign in to download & customize →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-[10px] text-gray-400 mt-2">
                    {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
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

          {/* Upload Files Notice */}
          {uploadedFiles.length > 0 && (
            <div className="px-4 py-2 bg-blue-50 border-t border-blue-200">
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-blue-200">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-900 text-xs">{file.name}</span>
                    <button onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))} className="text-blue-600 hover:text-blue-800">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consent Banner (when files uploaded) */}
          {uploadedFiles.length > 0 && (
            <div className="px-4 py-2 bg-orange-50 border-t border-orange-200 text-xs text-orange-900">
              Documents are processed securely. Remove personal details where possible.
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                title="Upload PDF or DOCX (max 10MB)"
              >
                <Upload className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a legal question or use /commands..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() && !uploadedFile}
                className="bg-black text-white hover:bg-gray-800 rounded-lg px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              Type /research, /cite, /draft, or /review for specialized assistance
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

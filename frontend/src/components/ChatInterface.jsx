import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, X, FileText, Shield, User, Briefcase, ChevronDown, BookOpen, Scale, Plus } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [persona, setPersona] = useState('individual');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showPersonaMenu, setShowPersonaMenu] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
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

  const mockCitations = [
    { case: "State of Maharashtra v. Mohd. Sajid", year: "2022", court: "Supreme Court", citation: "(2022) 10 SCC 496" },
    { case: "K.M. Nanavati v. State of Maharashtra", year: "1962", court: "Supreme Court", citation: "AIR 1962 SC 605" },
    { case: "Lalita Kumari v. Government of UP", year: "2013", court: "Supreme Court", citation: "(2014) 2 SCC 1" },
  ];

  const generateMockResponse = (userInput, files) => {
    const lowerInput = userInput.toLowerCase();
    
    if (files && files.length > 0) {
      return {
        content: `I've analyzed your ${files.length} document${files.length > 1 ? 's' : ''}. Here's a summary:\n\n**Document Analysis**\n\n**Type**: Legal Case File\n**Primary Document**: ${files[0].name}\n\n**Key Issues Identified**:\n• Breach of contractual obligations (Section 73, Indian Contract Act, 1872)\n• Specific performance claim (Section 10, Specific Relief Act, 1963)\n• Damages and interest calculation\n\n**Legal Provisions**:\n• Indian Contract Act, 1872 - Sections 23, 73, 74\n• Code of Civil Procedure, 1908 - Order VII, XXXVII\n• Specific Relief Act, 1963 - Sections 10, 14, 20\n\n**Recommended Actions**:\n1. Verify limitation periods\n2. Gather supporting evidence\n3. Consider mediation options\n4. Consult with advocate for strategy`,
        citations: mockCitations,
      };
    }

    if (lowerInput.includes('murder') || lowerInput.includes('culpable') || lowerInput.includes('homicide')) {
      return {
        content: `**Culpable Homicide vs. Murder under IPC**\n\n**Culpable Homicide (Section 299)**\nCausing death with:\n• Intention of causing death\n• Intention of causing bodily injury likely to cause death\n• Knowledge that act is likely to cause death\n\n**Murder (Section 300)**\nCulpable homicide becomes murder when:\n• Act done with intention of causing death\n• With knowledge act is likely to cause death\n• Act is so dangerous that death is probable consequence\n\n**Key Principle**: All murder is culpable homicide, but not all culpable homicide is murder.\n\n**Exception - Grave & Sudden Provocation**\n• Must be sudden and grave\n• Deprives self-control\n• Committed in heat of passion\n• Before time to cool down`,
        citations: mockCitations,
      };
    }

    if (lowerInput.includes('fir') || lowerInput.includes('police')) {
      return {
        content: `**Filing an FIR in India**\n\n**Legal Basis**: Section 154, CrPC, 1973\n\n**Steps to File**:\n1. Visit police station in jurisdiction where crime occurred\n2. Provide oral or written information about cognizable offense\n3. Police must record information in writing\n4. Sign after reading; get free copy\n\n**Your Rights** (Lalita Kumari v. Govt of UP, 2013):\n✓ Police cannot refuse FIR for cognizable offenses\n✓ No preliminary inquiry needed\n✓ Free FIR copy must be provided\n✓ Can file via post if police refuses\n✓ Zero FIR facility available`,
        citations: [mockCitations[2]],
      };
    }

    if (lowerInput.includes('draft') || lowerInput.includes('notice')) {
      return {
        content: `I can help you draft a legal notice. Here's a basic template:\n\n**LEGAL NOTICE**\nUnder Section 80, CPC, 1908\n\nTo: [Recipient Details]\n\nDear Sir/Madam,\n\n**Re: Legal Notice**\n\nOn behalf of my client [Name], I serve this notice for the following:\n\n1. **Facts**: [Brief description]\n2. **Cause of Action**: [Legal grounds]\n3. **Demand**: [Relief sought within 15 days]\n4. **Consequences**: Legal proceedings without further notice\n\nYours faithfully,\n[Advocate Details]\n\n---\n*This is a template. Must be customized with specific facts.*\n\n**Sign in to download and customize this draft →**`,
        citations: [],
      };
    }

    return {
      content: `Hello! I'm NAYA AI, your legal assistant for Indian law.\n\nI can help with:\n• Legal Q&A with verified citations\n• Document analysis (contracts, notices, agreements)\n• IPC, CrPC, CPC, Evidence Act explanations\n• Basic legal drafting\n• Filing procedures (FIR, complaints)\n\nHow can I assist you today?`,
      citations: [],
    };
  };

  const handleSend = () => {
    if (!input.trim() && uploadedFiles.length === 0) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input || `Analyzing ${uploadedFiles.length} document(s)`,
      timestamp: new Date(),
      files: [...uploadedFiles],
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateMockResponse(input, uploadedFiles);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.content,
        citations: response.citations || [],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setUploadedFiles([]);
    }, 2000);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} exceeds 10MB`);
        return false;
      }
      if (!file.name.match(/\.(pdf|docx)$/i)) {
        alert(`${file.name} format not supported`);
        return false;
      }
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5));
    setShowPlusMenu(false);
  };

  const starterPrompts = persona === 'individual' 
    ? ['Know your rights', 'Understand a legal notice', 'How to file an FIR', 'Consumer complaint guide']
    : ['Research case law', 'Review contract', 'Draft bail application', 'Extract key dates'];

  return (
    <div className="w-full mb-12">
      {/* Clean Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-serif mb-2">What can I help you with?</h2>
          <p className="text-gray-500 text-sm sm:text-base">Ask about Indian law, analyze documents, or draft legal notices</p>
        </div>
        
        {/* Persona Selector - Minimal */}
        <div className="relative self-center md:self-auto">
          <button
            onClick={() => setShowPersonaMenu(!showPersonaMenu)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {persona === 'individual' ? <User className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
            <span>{persona === 'individual' ? 'Individual' : 'Lawyer'}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {showPersonaMenu && (
            <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[160px] py-1 z-10">
              <button
                onClick={() => {
                  setPersona('individual');
                  setShowPersonaMenu(false);
                  setMessages([]);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Individual
              </button>
              <button
                onClick={() => {
                  setPersona('lawyer');
                  setShowPersonaMenu(false);
                  setMessages([]);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Lawyer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer - Minimal */}
      <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
        <p className="text-sm text-gray-700 flex items-start gap-2">
          <Shield className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <span>
            {persona === 'individual' 
              ? "Legal information with citations. Not legal advice. Consult a qualified lawyer for your situation."
              : "AI assistant with verifiable sources. You maintain control of all legal decisions."}
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
                  accept=".pdf,.docx"
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
            placeholder="Ask about Indian law, upload documents, or type a command..."
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
      </div>
    </div>
  );
};

export default ChatInterface;

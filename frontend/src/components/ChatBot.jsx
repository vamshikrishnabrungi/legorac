import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, X, FileText, Shield, MessageSquare, BookOpen, Scale, User, Briefcase, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [persona, setPersona] = useState('individual'); // 'individual' or 'lawyer'
  const [jurisdiction, setJurisdiction] = useState('india');
  const [language, setLanguage] = useState('english');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [doNotStore, setDoNotStore] = useState(false);
  const [showPersonaSelector, setShowPersonaSelector] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
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
            content: persona === 'individual' 
              ? "Hello! I'm NAYA AI, your legal assistant. I can help you understand legal documents, answer legal questions with citations, and provide guidance. What would you like to know today?"
              : "Hello! I'm NAYA AI. I can help you with legal research, case analysis, drafting assistance, and cite relevant precedents. How can I assist you today?",
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [isOpen, persona]);

  const mockCitations = [
    { case: "State of Maharashtra v. Mohd. Sajid", year: "2022", court: "Supreme Court", citation: "(2022) 10 SCC 496" },
    { case: "K.M. Nanavati v. State of Maharashtra", year: "1962", court: "Supreme Court", citation: "AIR 1962 SC 605" },
    { case: "Superintendent and Remembrancer v. Anil Kumar", year: "1980", court: "Supreme Court", citation: "(1980) 1 SCC 315" },
  ];

  const generateMockResponse = (userInput, file) => {
    const lowerInput = userInput.toLowerCase();
    
    if (file) {
      return {
        content: `I've analyzed "${file.name}". Here's a summary:\n\n**Document Type**: Legal Notice\n**Parties Involved**: [Party A] and [Party B]\n**Key Dates**: Filed on [Date]\n**Main Issues**:\n1. Breach of contract concerning payment terms\n2. Demand for compensation of ₹5,00,000\n3. 15-day response deadline\n\n**Legal Provisions Cited**:\n- Indian Contract Act, 1872 - Section 73 (Compensation for loss or damage)\n- Code of Civil Procedure, 1908 - Order XXXVII\n\n**Suggested Next Steps**:\n1. Consult with a qualified lawyer to review your options\n2. Consider responding within the stipulated deadline\n3. Gather supporting documents and evidence`,
        citations: mockCitations.slice(0, 2),
        hasDraft: false,
      };
    }

    if (lowerInput.includes('murder') || lowerInput.includes('culpable') || lowerInput.includes('homicide')) {
      return {
        content: `Under Indian Penal Code (IPC), culpable homicide and murder are distinct offenses:\n\n**Culpable Homicide (Section 299 IPC)**:\nAn act causing death with intention or knowledge likely to cause death.\n\n**Murder (Section 300 IPC)**:\nCulpable homicide becomes murder when:\n1. Act done with intention of causing death\n2. With knowledge that act is likely to cause death\n3. Act is so dangerous that death is the probable consequence\n\n**Exception - Grave & Sudden Provocation (Exception 1 to Section 300)**:\nReduces murder to culpable homicide not amounting to murder when the accused acts under grave and sudden provocation.\n\n**Key Distinctions (Landmark Cases)**:\n- K.M. Nanavati v. State of Maharashtra (1962): Defined "sudden and grave provocation"\n- Superintendent v. Anil Kumar (1980): Established tests for distinguishing murder from culpable homicide`,
        citations: mockCitations,
        hasDraft: false,
      };
    }

    if (lowerInput.includes('draft') || lowerInput.includes('notice') || lowerInput.includes('complaint')) {
      return {
        content: `I can help you create a skeleton draft. Based on your query, here's a basic template:\n\n**[This is a preview. Sign in to download and customize]**`,
        citations: [],
        hasDraft: true,
        draftContent: `LEGAL NOTICE\n\nTo,\n[Name and Address of Recipient]\n\nDear Sir/Madam,\n\nUnder instructions from my client [Your Name], I hereby serve you with this legal notice under Section 80 of the Code of Civil Procedure, 1908.\n\n1. FACTS:\n[Brief description of facts leading to the dispute]\n\n2. CAUSE OF ACTION:\n[Legal grounds for the claim]\n\n3. DEMAND:\nMy client demands [specific relief sought] within 15 days from the receipt of this notice.\n\n4. LEGAL CONSEQUENCES:\nFailure to comply will result in appropriate legal proceedings without further notice.\n\nYours faithfully,\n[Advocate Name]\n[Enrollment Number]\n\nPlace: [City]\nDate: [Date]`,
      };
    }

    if (lowerInput.includes('fir') || lowerInput.includes('police') || lowerInput.includes('complaint')) {
      return {
        content: `**Filing an FIR (First Information Report) in India:**\n\n**Legal Basis**: Section 154, Code of Criminal Procedure (CrPC), 1973\n\n**Steps to File an FIR**:\n1. Visit the nearest police station in whose jurisdiction the crime occurred\n2. Provide oral or written information about the cognizable offense\n3. Police officer must record the information in writing\n4. The complainant has the right to get the FIR read back and sign it\n5. You are entitled to receive a free copy of the FIR\n\n**Important Points**:\n- Police cannot refuse to register an FIR for a cognizable offense\n- FIR can also be filed online in many states (e-FIR facility)\n- Zero FIR can be filed at any police station if the crime occurred outside jurisdiction\n\n**Your Rights** (as per Lalita Kumari v. Govt. of UP, 2013):\n- Police must register FIR for cognizable offenses\n- No preliminary inquiry needed before registration\n- Refusal to register FIR is illegal`,
        citations: [
          { case: "Lalita Kumari v. Government of UP", year: "2013", court: "Supreme Court", citation: "(2014) 2 SCC 1" }
        ],
        hasDraft: false,
      };
    }

    // Default response
    return {
      content: `Thank you for your question. I can help you with:\n\n• Understanding legal documents and notices\n• Explaining Indian laws (IPC, CrPC, Evidence Act, CPC)\n• Providing case law citations and precedents\n• Creating skeleton drafts for legal notices and complaints\n• Guidance on filing FIRs and legal procedures\n\nPlease ask a specific question or upload a document (PDF/DOCX, max 10MB) for analysis.`,
      citations: [],
      hasDraft: false,
    };
  };

  const handleSend = () => {
    if (!input.trim() && !uploadedFile) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input || `Uploaded: ${uploadedFile?.name}`,
      timestamp: new Date(),
      file: uploadedFile,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateMockResponse(input, uploadedFile);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.content,
        citations: response.citations || [],
        hasDraft: response.hasDraft,
        draftContent: response.draftContent,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setUploadedFile(null);
    }, 2000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      if (!file.name.match(/\.(pdf|docx)$/i)) {
        alert('Only PDF and DOCX files are supported');
        return;
      }
      setUploadedFile(file);
    }
  };

  const starterChips = persona === 'individual' 
    ? ['Know your rights', 'Understand a notice', 'File an FIR', 'Consumer complaint']
    : ['Research precedents', 'Review filing', 'Draft bail application', 'Extract deadlines'];

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
                {persona === 'individual' 
                  ? "NAYA provides legal information with citations. It doesn't replace a lawyer. For advice on your situation, consult a qualified lawyer."
                  : "AI assistant with verifiable sources. You remain in control."}
              </p>
            </div>
          </div>

          {/* Persona & Settings Bar */}
          <div className="border-b border-gray-200 p-3 bg-gray-50">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Persona Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowPersonaSelector(!showPersonaSelector)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors"
                >
                  {persona === 'individual' ? <User className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                  <span className="font-medium">{persona === 'individual' ? 'Individual' : 'Lawyer'}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {showPersonaSelector && (
                  <div className="absolute top-full mt-1 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[140px]">
                    <button
                      onClick={() => {
                        setPersona('individual');
                        setShowPersonaSelector(false);
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
                        setShowPersonaSelector(false);
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

              {/* Jurisdiction */}
              <span className="px-3 py-1.5 text-xs border border-gray-300 rounded-full bg-white">
                🇮🇳 India (IPC/CrPC)
              </span>

              {/* Language */}
              <span className="px-3 py-1.5 text-xs border border-gray-300 rounded-full bg-white">
                {language === 'english' ? 'English' : 'हिन्दी'}
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

          {/* Upload File Notice */}
          {uploadedFile && (
            <div className="px-4 py-2 bg-blue-50 border-t border-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-blue-600" />
                <span className="text-blue-900 text-xs">{uploadedFile.name}</span>
              </div>
              <button onClick={() => setUploadedFile(null)} className="text-blue-600 hover:text-blue-800">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Consent Banner (when file uploaded) */}
          {uploadedFile && (
            <div className="px-4 py-2 bg-orange-50 border-t border-orange-200 text-xs text-orange-900">
              For this demo, we don't store your file after this session. Remove personal details where possible.
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

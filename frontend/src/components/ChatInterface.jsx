import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload, X, FileText, Shield, User, Briefcase, ChevronDown, Sparkles, BookOpen, Scale, Plus } from 'lucide-react';

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
    scrollToBottom();
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
    <div className="w-full mb-20">
      {/* Clean Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-serif mb-2">What can I help you with?</h2>
          <p className="text-gray-500">Ask about Indian law, analyze documents, or draft legal notices</p>
        </div>
        
        {/* Persona Selector - Minimal */}
        <div className="relative">
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
      <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
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
      <div className="min-h-[500px] mb-6">
        {messages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-500 mb-8">Choose a topic to get started, or type your question below</p>
            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
              {starterPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(prompt)}
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-colors"
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
      <div className="mt-16 grid grid-cols-3 gap-8 pt-16 border-t border-gray-100">
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

  const mockCitations = [
    { case: "State of Maharashtra v. Mohd. Sajid", year: "2022", court: "Supreme Court", citation: "(2022) 10 SCC 496" },
    { case: "K.M. Nanavati v. State of Maharashtra", year: "1962", court: "Supreme Court", citation: "AIR 1962 SC 605" },
    { case: "Lalita Kumari v. Government of UP", year: "2013", court: "Supreme Court", citation: "(2014) 2 SCC 1" },
  ];

  const generateMockResponse = (userInput, files) => {
    const lowerInput = userInput.toLowerCase();
    
    if (files && files.length > 0) {
      return {
        content: `I've analyzed your ${files.length} document${files.length > 1 ? 's' : ''}. Here's a comprehensive summary:\n\n**Document Type**: Legal Case File Bundle\n**Primary Document**: ${files[0].name}\n**Total Pages**: Approximately 45 pages\n**Key Parties**: Plaintiff vs. Defendant\n**Case Type**: Civil Contract Dispute\n\n**Core Legal Issues Identified**:\n1. Breach of contractual obligations under Section 73, Indian Contract Act, 1872\n2. Specific performance claim under Section 10, Specific Relief Act, 1963\n3. Damages quantification and interest calculation\n4. Timeline compliance and procedural adherence\n\n**Critical Dates & Events**:\n- Agreement Date: [Date extracted from document]\n- Breach Occurrence: [Date]\n- Legal Notice Sent: [Date]\n- Filing Deadline: 15 days from notice receipt\n\n**Legal Provisions Applicable**:\n- Indian Contract Act, 1872 - Sections 23, 73, 74\n- Code of Civil Procedure, 1908 - Order VII, Order XXXVII\n- Specific Relief Act, 1963 - Sections 10, 14, 20\n\n**Recommended Next Steps**:\n1. Verify all dates and ensure compliance with limitation periods\n2. Gather supporting documentary evidence\n3. Consider mediation before proceeding to trial\n4. Consult with a qualified advocate for case-specific strategy`,
        citations: mockCitations,
        hasDraft: false,
      };
    }

    if (lowerInput.includes('murder') || lowerInput.includes('culpable') || lowerInput.includes('homicide') || lowerInput.includes('ipc') || lowerInput.includes('section 300')) {
      return {
        content: `**Distinction Between Culpable Homicide and Murder under IPC**\n\n**Culpable Homicide (Section 299 IPC)**:\nAn act by which death is caused with:\n• Intention of causing death, or\n• Intention of causing bodily injury likely to cause death, or\n• Knowledge that the act is likely to cause death\n\n**Murder (Section 300 IPC)**:\nCulpable homicide is murder when the act is done with:\n1. Intention of causing death\n2. Intention of causing such bodily injury as the offender knows is likely to cause death\n3. Intention of causing bodily injury sufficient in the ordinary course to cause death\n4. Knowledge that the act is so imminently dangerous that it must in all probability cause death\n\n**Key Legal Principle**:\n"All murder is culpable homicide, but not all culpable homicide is murder."\n\n**Exception - Grave & Sudden Provocation (Exception 1 to Section 300)**:\n• Must be sudden and grave\n• Deprives self-control\n• Committed in heat of passion\n• Before time for passion to cool\n\n**Landmark Cases Establishing Tests**:\nThe Supreme Court has laid down specific tests to distinguish between these offenses, particularly regarding the degree of intention and probability of death.`,
        citations: mockCitations,
        hasDraft: false,
      };
    }

    if (lowerInput.includes('draft') || lowerInput.includes('notice') || lowerInput.includes('complaint') || lowerInput.includes('legal notice')) {
      return {
        content: `I can help you create a professional legal document. Here's a skeleton draft based on your requirements:\n\n**[PREVIEW - Sign in to customize and download]**`,
        citations: [],
        hasDraft: true,
        draftContent: `LEGAL NOTICE\nUnder Section 80, Code of Civil Procedure, 1908\n\nTo,\n[Name of Recipient]\n[Complete Address]\n[City, State - PIN]\n\nDear Sir/Madam,\n\nRe: Legal Notice under Section 80 CPC\n\nUnder instructions and on behalf of my client [Your Name/Company Name], having address at [Your Address], I hereby serve you with this legal notice for the reasons stated hereinbelow:\n\n1. BRIEF FACTS:\n   [Concise narration of facts leading to the dispute]\n   • Date of agreement/transaction: [Date]\n   • Nature of obligation: [Description]\n   • Amount involved: ₹[Amount]\n\n2. CAUSE OF ACTION:\n   My client's cause of action arose on [Date] when you failed to [specific breach/default]. Despite repeated requests and reminders, you have deliberately and willfully avoided your obligations.\n\n3. LEGAL POSITION:\n   Your conduct constitutes:\n   • Breach of contract under Section 73, Indian Contract Act, 1872\n   • [Other applicable legal provisions]\n\n4. DEMAND:\n   My client hereby demands that you:\n   a) [Primary relief sought]\n   b) Pay compensation of ₹[Amount] with interest @ 18% p.a.\n   c) Comply within 15 days from receipt of this notice\n\n5. CONSEQUENCES OF NON-COMPLIANCE:\n   Please take notice that if you fail to comply with the above demands within 15 days of receipt of this notice, my client shall be constrained to initiate appropriate civil/criminal proceedings against you at your risk as to costs, consequences, and damages, without any further notice.\n\nThis notice is without prejudice to my client's rights, remedies, claims, and contentions, all of which are expressly reserved.\n\nYours faithfully,\n\n[Advocate Name]\n[Enrollment No.]\n[Bar Council Registration]\n\nPlace: [City]\nDate: [Date]\n\n---\nNote: This is a template. Actual notice must be customized with specific facts and reviewed by a qualified lawyer.`,
      };
    }

    if (lowerInput.includes('fir') || lowerInput.includes('police') || lowerInput.includes('complaint') || lowerInput.includes('criminal')) {
      return {
        content: `**Complete Guide to Filing FIR (First Information Report) in India**\n\n**Legal Framework**: Section 154, Code of Criminal Procedure (CrPC), 1973\n\n**What is FIR?**\nFirst Information Report is the first step in criminal justice process. It sets the criminal law in motion.\n\n**How to File FIR**:\n\n**Step 1: Jurisdiction**\n• Visit police station where crime occurred\n• For emergencies: Dial 100 or file e-FIR online\n• Zero FIR can be filed at any station, later transferred\n\n**Step 2: Information to Police**\n• Give oral or written information\n• Police must record it in writing (FIR register)\n• Must be signed by you after reading\n• Free copy must be provided immediately\n\n**Step 3: Contents of FIR**\n• Date, time, and place of occurrence\n• Nature of offense\n• Description of accused (if known)\n• Names of witnesses\n• Brief facts of the case\n\n**Your Rights (Lalita Kumari v. Govt of UP, 2013)**:\n✓ Police cannot refuse to register FIR for cognizable offenses\n✓ No preliminary inquiry needed before FIR registration\n✓ You must get free FIR copy\n✓ You can send written complaint by post (registered)\n✓ Complaint to Superintendent of Police if police refuses\n\n**Online FIR Facilities**:\nMost states now offer e-FIR for non-serious offenses:\n• Lost documents\n• Theft of mobile/vehicle\n• Minor accidents\n\n**Important Points**:\n⚠️ False FIR is punishable under Section 182, IPC\n⚠️ FIR must be specific and factual\n⚠️ Keep acknowledgment receipt safely`,
        citations: [mockCitations[2]],
        hasDraft: false,
      };
    }

    // Default response
    return {
      content: `Welcome! I'm NAYA AI, your intelligent legal assistant. I can help you with:\n\n**For Individuals**:\n• Understanding legal documents and notices\n• Guidance on filing FIR and complaints  \n• Consumer rights and remedies\n• Explanation of legal provisions in simple language\n• Basic legal document drafting (notices, complaints)\n\n**For Legal Professionals**:\n• Legal research with case law citations\n• Document analysis and review\n• Draft preparation assistance\n• Precedent search and analysis\n• Timeline and deadline extraction\n\n**I can explain**:\n✓ Indian Penal Code (IPC)\n✓ Code of Criminal Procedure (CrPC)\n✓ Code of Civil Procedure (CPC)\n✓ Indian Evidence Act\n✓ Contract Act, Consumer Protection Act, and more\n\nHow can I assist you today? Ask a question or upload a document (PDF/DOCX, max 10MB) for analysis.`,
      citations: [],
      hasDraft: false,
    };
  };

  const handleSend = () => {
    if (!input.trim() && uploadedFiles.length === 0) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input || `Analyzing ${uploadedFiles.length} document(s)...`,
      timestamp: new Date(),
      files: [...uploadedFiles],
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateMockResponse(input, uploadedFiles);
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
      setUploadedFiles([]);
    }, 2500);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} is larger than 10MB`);
        return false;
      }
      if (!file.name.match(/\.(pdf|docx)$/i)) {
        alert(`${file.name} is not a supported format. Only PDF and DOCX allowed.`);
        return false;
      }
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const starterChips = persona === 'individual' 
    ? [
        { text: 'Know your rights', icon: <Shield className="w-3 h-3" /> },
        { text: 'Understand a notice', icon: <FileText className="w-3 h-3" /> },
        { text: 'File an FIR', icon: <BookOpen className="w-3 h-3" /> },
        { text: 'Consumer complaint', icon: <Scale className="w-3 h-3" /> },
      ]
    : [
        { text: 'Research precedents', icon: <BookOpen className="w-3 h-3" /> },
        { text: 'Review filing', icon: <FileText className="w-3 h-3" /> },
        { text: 'Draft bail application', icon: <Scale className="w-3 h-3" /> },
        { text: 'Extract deadlines', icon: <Sparkles className="w-3 h-3" /> },
      ];

  return (
    <div className="w-full mb-20">
      {/* Main Chat Container */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Top Control Bar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-md">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">NAYA AI Legal Assistant</h3>
                <p className="text-xs text-gray-500">Powered by advanced AI • Indian Law Specialist</p>
              </div>
            </div>

            {/* Persona Selector */}
            <div className="relative">
              <button
                onClick={() => setShowPersonaMenu(!showPersonaMenu)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
              >
                {persona === 'individual' ? <User className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                <span className="text-sm font-medium">{persona === 'individual' ? 'Individual' : 'Lawyer'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showPersonaMenu && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-10 min-w-[180px]">
                  <button
                    onClick={() => {
                      setPersona('individual');
                      setShowPersonaMenu(false);
                      setMessages([]);
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100"
                  >
                    <User className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-medium">Individual</div>
                      <div className="text-xs text-gray-500">Legal guidance</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setPersona('lawyer');
                      setShowPersonaMenu(false);
                      setMessages([]);
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Briefcase className="w-4 h-4 text-gray-700" />
                    <div>
                      <div className="font-medium">Lawyer</div>
                      <div className="text-xs text-gray-500">Professional tools</div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Settings Chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1.5 text-xs bg-gray-100 rounded-full font-medium flex items-center gap-1.5">
              🇮🇳 <span>India (IPC/CrPC/Evidence Act)</span>
            </span>
            <span className="px-3 py-1.5 text-xs bg-gray-100 rounded-full font-medium">
              English
            </span>
            <label className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-100 rounded-full font-medium cursor-pointer hover:bg-gray-200 transition-colors">
              <input
                type="checkbox"
                checked={doNotStore}
                onChange={(e) => setDoNotStore(e.target.checked)}
                className="w-3 h-3 accent-black"
              />
              <span>Do not store chat</span>
            </label>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200 px-6 py-3">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-800">
              <strong>Important:</strong> {persona === 'individual' 
                ? "NAYA provides legal information with citations. This is not legal advice. For guidance on your specific situation, please consult a qualified lawyer."
                : "AI assistant with verifiable sources and case law. You remain in control of all legal decisions and client communications."}
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-[500px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Ask me anything about Indian Law</h3>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Get instant answers with verified citations, analyze legal documents, or draft basic legal notices. 
                Choose a topic below or type your question.
              </p>
              <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
                {starterChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(chip.text)}
                    className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all text-sm font-medium"
                  >
                    {chip.icon}
                    <span>{chip.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`mb-6 ${msg.type === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
              <div className={`max-w-[85%] ${msg.type === 'user' ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white' : 'bg-white border-2 border-gray-200'} rounded-2xl p-5 shadow-lg`}>
                {msg.files && msg.files.length > 0 && (
                  <div className="mb-4 flex gap-3 flex-wrap">
                    {msg.files.map((file, idx) => (
                      <div key={idx} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4" />
                        <span className="font-medium">{file.name}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                
                {msg.citations && msg.citations.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-gray-200">
                    <p className="text-xs font-bold text-gray-600 mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>LEGAL CITATIONS & PRECEDENTS</span>
                    </p>
                    <div className="space-y-2">
                      {msg.citations.map((cite, idx) => (
                        <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                          <p className="font-semibold text-gray-900">{cite.case}</p>
                          <p className="text-xs text-gray-600 mt-1">{cite.citation} • {cite.court} • {cite.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {msg.hasDraft && msg.draftContent && (
                  <div className="mt-5 pt-5 border-t border-gray-200">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                        <span className="text-[120px] font-bold text-gray-500 rotate-[-25deg]">PREVIEW</span>
                      </div>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs font-bold text-gray-600 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            <span>DRAFT PREVIEW</span>
                          </p>
                          <span className="text-xs bg-yellow-200 text-yellow-900 px-2 py-1 rounded font-semibold">WATERMARKED</span>
                        </div>
                        <pre className="text-xs font-mono whitespace-pre-wrap text-gray-700 max-h-64 overflow-y-auto bg-white p-4 rounded border border-gray-200">
                          {msg.draftContent}
                        </pre>
                        <div className="mt-4 text-center">
                          <Button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 px-6 py-3 rounded-lg shadow-lg">
                            Sign in to download, edit & customize →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-[10px] text-gray-400 mt-3">
                  {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mb-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <span className="text-sm text-gray-600 ml-2">NAYA is analyzing...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* File Upload Preview */}
        {uploadedFiles.length > 0 && (
          <div className="px-6 py-4 bg-blue-50 border-t border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-blue-900">Attached Documents ({uploadedFiles.length}/5)</p>
              <p className="text-xs text-blue-700">For demo: files not stored after session</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {uploadedFiles.map((file, idx) => (
                <div key={idx} className="bg-white border-2 border-blue-300 rounded-lg px-4 py-2 flex items-center gap-3 shadow-sm">
                  <FileText className="w-5 h-5 text-red-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <button onClick={() => removeFile(idx)} className="text-gray-500 hover:text-red-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white border-t-2 border-gray-200 p-6">
          <div className="flex gap-3 mb-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
            
            {/* Quick Action Buttons */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all"
              title="Upload documents (PDF/DOCX, max 10MB each)"
            >
              <Upload className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium hidden sm:inline">Upload</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all">
              <BookOpen className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium hidden sm:inline">Legal research</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all">
              <Database className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium hidden sm:inline">Database</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-gray-900 hover:bg-gray-50 transition-all">
              <Globe className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium hidden sm:inline">Web</span>
            </button>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Indian law, upload documents, or use commands like /research, /draft, /cite..."
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm bg-gray-50"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() && uploadedFiles.length === 0}
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 rounded-xl px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Commands: <span className="font-mono bg-gray-100 px-2 py-1 rounded">/research</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">/cite</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">/draft</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">/review</span> <span className="font-mono bg-gray-100 px-2 py-1 rounded">/summarize</span>
          </p>
        </div>
      </div>

      {/* Info Section Below Chat */}
      <div className="mt-12 grid grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h4 className="font-serif text-lg font-semibold mb-2">Verified Citations</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every legal answer includes paragraph-level citations from Supreme Court and High Court judgments
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Scale className="w-7 h-7 text-white" />
          </div>
          <h4 className="font-serif text-lg font-semibold mb-2">Document Analysis</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Upload legal documents for instant analysis, key dates extraction, and risk identification
          </p>
        </div>

        <div className="text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h4 className="font-serif text-lg font-semibold mb-2">Draft Assistance</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Generate legal notices, complaints, and other documents with proper formatting and citations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

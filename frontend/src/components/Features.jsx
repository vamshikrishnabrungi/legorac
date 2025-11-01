import React from 'react';
import { Globe, Scale, Database, Plus, Sparkles, Zap } from 'lucide-react';

const Features = () => {
  const documents = [
    { name: 'Beta_Solutions_Client_Contract_2022.docx', type: 'docx', color: 'text-blue-600' },
    { name: 'Acme_Corp_Agreement_2023.pdf', type: 'pdf', color: 'text-red-600' },
    { name: 'Gamma_Tech_Partnership_Agreement_2...', type: 'pdf', color: 'text-red-600' },
    { name: 'Delta_Industries_Service_Agreement_20...', type: 'docx', color: 'text-blue-600' },
    { name: 'Epsilon_Enterprises_NDA_2020.pdf', type: 'pdf', color: 'text-red-600' },
    { name: 'Zeta_Consulting_Engagement_Letter_20...', type: 'docx', color: 'text-blue-600' },
    { name: 'Theta_Healthcare_Patient_Agreement_20...', type: 'docx', color: 'text-blue-600' },
  ];

  return (
    <section className="py-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-3 gap-4">
          {/* Review faster card */}
          <div className="bg-[#B8C9C4] overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="p-8 h-[650px] flex flex-col">
              {/* Document list */}
              <div className=\"flex-1 flex items-center justify-center\">
                <div className=\"bg-white rounded-lg p-6 shadow-md w-full max-w-sm\">
                  <div className=\"text-xs font-semibold text-gray-700 mb-4\">Document</div>
                  <div className=\"space-y-3\">
                    {documents.map((doc, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-xs ${doc.color}`}>
                        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"currentColor\">
                          <path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\" />
                          <polyline points=\"14 2 14 8 20 8\" />
                        </svg>
                        <span className=\"truncate\">{doc.name}</span>
                      </div>
                    ))}
                    <div className=\"text-xs text-gray-500 mt-3\">+ 24 more</div>
                  </div>
                </div>
              </div>
              
              {/* Title at bottom */}
              <div className=\"mt-6\">
                <h3 className=\"text-xl font-serif mb-2\">Review faster</h3>
              </div>
            </div>
          </div>

          {/* Draft smarter card */}
          <div className="bg-[#C5D9E8] overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="p-8 h-[650px] flex flex-col">
              {/* App icons - unified container */}
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-gradient-to-br from-blue-50/50 to-blue-100/50 rounded-[3rem] p-8 shadow-sm">
                  <div className="flex items-center justify-center gap-8">
                    {/* Network/AI icon */}
                    <div className="bg-white rounded-3xl p-6 shadow-md">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="5" r="2" fill="currentColor" />
                        <circle cx="5" cy="12" r="2" fill="currentColor" />
                        <circle cx="19" cy="12" r="2" fill="currentColor" />
                        <circle cx="12" cy="19" r="2" fill="currentColor" />
                        <line x1="12" y1="7" x2="12" y2="17" />
                        <line x1="7" y1="12" x2="17" y2="12" />
                      </svg>
                    </div>
                    
                    {/* Word icon */}
                    <div className="bg-white rounded-3xl p-6 shadow-md">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">W</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title at bottom */}
              <div className="mt-6">
                <h3 className="text-xl font-serif mb-2">Draft smarter</h3>
              </div>
            </div>
          </div>

          {/* Research deeper card */}
          <div className="bg-[#D8D8D8] overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="p-8 h-[650px] flex flex-col">
              {/* Research interface */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <input
                      type="text"
                      placeholder="What would you like to do?"
                      className="w-full text-sm text-gray-400 border-none outline-none mb-4"
                    />
                    
                    {/* Action buttons */}
                    <div className="flex items-center gap-2 mb-4">
                      <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium hover:bg-gray-50 rounded transition-colors">
                        <Plus className="w-3 h-3" />
                        <span>Add sources</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium hover:bg-gray-50 rounded transition-colors">
                        <Sparkles className="w-3 h-3" />
                        <span>Create</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium hover:bg-gray-50 rounded transition-colors">
                        <Zap className="w-3 h-3" />
                        <span>Workflows</span>
                      </button>
                    </div>
                    
                    {/* Sources dropdown */}
                    <div className="border-t pt-3">
                      <div className="text-xs font-semibold text-gray-500 mb-2">Sources</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm hover:bg-gray-50 p-2 rounded cursor-pointer">
                          <Globe className="w-4 h-4 text-blue-600" />
                          <span>Web search</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm hover:bg-gray-50 p-2 rounded cursor-pointer">
                          <Scale className="w-4 h-4 text-yellow-600" />
                          <span>Legal search</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm hover:bg-gray-50 p-2 rounded cursor-pointer">
                          <Database className="w-4 h-4 text-green-600" />
                          <span>Database search</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title at bottom */}
              <div className="mt-6">
                <h3 className="text-xl font-serif mb-2">Research deeper</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700">
            The collaborative AI workspace built to fit seamlessly into a lawyer's workflow. Legora adapts to your ways of working, unlocking team and machine collaboration at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
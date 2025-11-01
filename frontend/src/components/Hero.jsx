import React from 'react';

const Hero = () => {
  return (
    <section className="pt-[120px] pb-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Hero Headline - Much Larger */}
        <div className="max-w-5xl mb-0">
          <h1 className="text-[110px] leading-[1.05] font-serif tracking-tight mb-0">
            Legal work,
          </h1>
          <h1 className="text-[110px] leading-[1.05] font-serif tracking-tight mb-0">
            without limits.
          </h1>
        </div>
      </div>

      {/* Hero Image Section with beige background */}
      <div className="w-full bg-[#DFD6C3] mt-20">
        <div className="max-w-[1400px] mx-auto px-8 py-24">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px] bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Professional lawyer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <div className="text-2xl text-gray-300">|</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                    <span>Legal research</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                    <span>Database</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>Web</span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Spend less time on routine, and more time on the work only lawyers can do. Legora frees you from admin so you can think sharper, move faster, and deliver more for your clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
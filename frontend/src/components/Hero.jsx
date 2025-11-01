import React, { useEffect, useRef, useState } from 'react';
import ChatInterface from './ChatInterface';

const Hero = () => {
  const indentRef = useRef(null);
  const [indent, setIndent] = useState(0);
  const [shouldIndent, setShouldIndent] = useState(false);

  useEffect(() => {
    const updateIndent = () => {
      if (indentRef.current) {
        const baseWidth = indentRef.current.offsetWidth;
        if (typeof window !== 'undefined') {
          const width = window.innerWidth;
          const maxIndent = width * 0.35;
          setIndent(Math.min(baseWidth, maxIndent));
          setShouldIndent(width >= 1024);
        } else {
          setIndent(baseWidth);
          setShouldIndent(false);
        }
      }
    };

    updateIndent();
    window.addEventListener('resize', updateIndent);

    return () => {
      window.removeEventListener('resize', updateIndent);
    };
  }, []);

  return (
    <section className="pt-36 md:pt-[200px] pb-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Headline - Much Larger */}
        <div className="max-w-6xl mb-10 md:mb-12">
          <h1 className="text-[52px] sm:text-[80px] lg:text-[160px] leading-[1] font-serif tracking-tight">
            <span className="block">
              <span ref={indentRef} className="inline-block">
                {'Legal\u00a0'}
              </span>
              <span>work,</span>
            </span>
            <span
              className="block"
              style={{
                marginLeft: shouldIndent ? indent : 0,
                whiteSpace: shouldIndent ? 'nowrap' : 'normal',
              }}
            >
              {'without\u00a0limits.'}
            </span>
          </h1>
        </div>

        {/* Large Chatbot Interface */}
        <ChatInterface />

        {/* Professional Class AI callout */}
        <div className="mt-16 md:mt-24">
          <div className="max-w-5xl mx-auto md:flex md:items-center md:justify-between md:gap-14">
            <div className="text-center md:text-left md:max-w-3xl">
              <h2 className="font-serif text-[40px] sm:text-[56px] md:text-[64px] leading-[1.05] text-gray-900">
                Professional Class AI
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-gray-600">
                Domain-specific AI for law firms, professional service providers, and the Fortune 500.
              </p>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col items-center gap-6 sm:flex-row md:flex-col md:items-end">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-10 py-4 text-lg font-medium text-white transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Request a Demo
              </button>
              <span className="text-base sm:text-lg text-gray-500 md:text-right">
                Experience the speed, security, and precision your team expects.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

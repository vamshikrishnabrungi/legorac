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
      </div>
    </section>
  );
};

export default Hero;

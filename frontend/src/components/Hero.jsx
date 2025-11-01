import React from 'react';
import ChatInterface from './ChatInterface';

const Hero = () => {
  return (
    <section className="pt-[120px] pb-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Hero Headline - Much Larger */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-[110px] leading-[1.05] font-serif tracking-tight mb-0">
            Legal <span className="inline-block">work,</span>
          </h1>
          <h1 className="text-[110px] leading-[1.05] font-serif tracking-tight mb-0 ml-[308px]">
            without limits.
          </h1>
        </div>

        {/* Large Chatbot Interface */}
        <ChatInterface />
      </div>
    </section>
  );
};

export default Hero;
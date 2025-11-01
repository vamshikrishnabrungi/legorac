import React from 'react';
import ChatInterface from './ChatInterface';

const Hero = () => {
  return (
    <section className="pt-[120px] pb-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Hero Headline - Much Larger */}
        <div className="max-w-6xl mb-12">
          <h1 className="text-[140px] leading-[1] font-serif tracking-tight">
            Legal work,
            <br />
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
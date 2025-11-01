import React from 'react';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6">
            Ready to realize your full potential?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Discover how Naya AI can put time back in your hands for what matters most.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

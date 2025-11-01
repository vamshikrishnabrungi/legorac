import React from 'react';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center">
          <h2 className="text-5xl font-serif mb-6">
            Ready to realize your full potential?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Discover how Naya AI can put time back in your hands for what matters most.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-sm px-8 py-6 text-lg">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
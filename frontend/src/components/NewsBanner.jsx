import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsBanner = () => {
  return (
    <div className="fixed top-[65px] left-0 right-0 z-40 bg-black text-white py-3">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-center gap-4">
        <span className="text-sm font-medium">News</span>
        <span className="text-sm">Legora raises $150M</span>
        <button className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
          Read more
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NewsBanner;
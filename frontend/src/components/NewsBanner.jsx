import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsBanner = () => {
  return (
    <div className="bg-black text-white py-2 text-xs md:text-sm md:py-3 md:fixed md:top-[65px] left-0 right-0 z-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
        <span className="font-medium uppercase tracking-wide text-[10px] md:text-xs">News</span>
        <span className="text-xs md:text-sm">Naya AI raises $150M</span>
        <button className="flex items-center gap-2 text-xs md:text-sm hover:opacity-80 transition-opacity">
          Read more
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NewsBanner;

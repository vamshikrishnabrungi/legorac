import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif leading-snug mb-8">
            Today as much as 80% of our people are active users, and as high as 30% use Legora more than ten times a day.
          </h2>
          <div className="space-y-2">
            <p className="text-lg font-semibold">Thomas K Svensen</p>
            <p className="text-sm text-gray-600">Managing Partner at BAHR</p>
          </div>
          <p className="mt-8 text-base text-gray-700 leading-relaxed">
            Our collaboration with BAHR demonstrates how a unified culture, world-class legal minds, and cutting-edge AI can work together to shape the future of legal services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
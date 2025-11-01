import React from 'react';

const Vision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif">Our Vision</h2>
        </div>

        <div className="grid grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative h-[600px] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Max Junestrand, Co-founder & CEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-1">Max Junestrand</h3>
              <p className="text-sm text-gray-600">Co-founder & CEO</p>
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <p className="text-lg leading-relaxed text-gray-800">
              Lawyers bring judgment, strategy, and creativity. AI brings speed, scale, and precision. Together, they unlock new possibilities for how legal work gets done.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Our vision is to give every lawyer the tools to focus on what matters most: advising clients, shaping outcomes, and driving progress. By removing repetitive tasks and streamlining complex workflows, we help lawyers spend less time on admin and more time practising law at its highest level.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              We're building more than a product. Alongside industry professionals, we're building a new golden standard for legal work. A future where tech complements expertise, where legal teams operate with confidence and efficiency, and where every lawyer has the freedom to do their best work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
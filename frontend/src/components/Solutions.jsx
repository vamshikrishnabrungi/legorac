import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Litigation',
      description: 'Streamline the litigation process and free your team to focus on a winning outcome.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      link: '/solutions/litigation'
    },
    {
      title: 'M&A',
      description: 'Review documents faster and draft precise, detailed agreements and reports in less time.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80',
      link: '/solutions/ma'
    },
    {
      title: 'Tax',
      description: 'Analyze complex tax rulings and legislation with speed and clarity.',
      image: 'https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=600&q=80',
      link: '/solutions/tax'
    },
    {
      title: 'Banking',
      description: 'Stay ahead of regulation, process documents faster and focus on strategy.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
      link: '/solutions/banking'
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Naya AI meets lawyers where they are.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="relative h-[260px] sm:h-[340px] md:h-[400px] overflow-hidden rounded-lg">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-serif mb-2">{solution.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

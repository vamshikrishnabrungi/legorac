import React from 'react';
import { Link } from 'react-router-dom';
import { pageContent } from '../data/pageContent';

const Solutions = () => {
  const industries = [
    {
      title: 'Litigation',
      description: 'Summarize cases & generate arguments instantly.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
      path: pageContent.industryLitigation.path,
    },
    {
      title: 'M&A',
      description: 'Automate diligence & extract key clauses.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80',
      path: pageContent.industryMA.path,
    },
    {
      title: 'Tax',
      description: 'Interpret rulings & draft replies with precision.',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80',
      path: pageContent.industryTax.path,
    },
    {
      title: 'Banking',
      description: 'Accelerate regulatory filings, reduce risk.',
      image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=600&q=80',
      path: pageContent.industryBanking.path,
    },
    {
      title: 'Employment & HR',
      description: 'Create contracts, NDAs & policies automatically.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      path: pageContent.industryEmploymentHR.path,
    },
    {
      title: 'Corporate Compliance',
      description: 'Track obligations & board filings in one dashboard.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      path: pageContent.industryCorporateCompliance.path,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Industries</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
            Naya AI adapts to the realities of your practice area — from litigation to compliance — so every team can deliver faster, more precise outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              to={industry.path}
              className="group h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif text-gray-900">{industry.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

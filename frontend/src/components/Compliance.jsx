import React from 'react';

const Compliance = () => {
  const certifications = [
    {
      title: 'ISO 42001',
      description: 'Our AI governance framework, compliant with ISO 42001, ensures that customers can trust how we implement AI.',
    },
    {
      title: 'ISO 27001',
      description: 'Legora is fully compliant with ISO 27001, the internationally recognized standard for information security management.',
    },
    {
      title: 'SOC Type 2',
      description: 'We meet SOC 2 requirements to ensure secure and compliant management of data across all our systems.',
    },
    {
      title: 'GDPR',
      description: 'With our technical team based in Sweden, we operate under GDPR — the world\'s strictest standard for data privacy.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
            Certified & compliant
          </p>
          <h2 className="text-4xl font-serif max-w-3xl mx-auto">
            Legora is committed to maintaining compliance with the most rigorous international safety and security standards.
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
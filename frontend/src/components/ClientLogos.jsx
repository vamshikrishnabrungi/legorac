import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Bird & Bird', logo: 'Bird&Bird' },
    { name: 'Cleary Gottlieb', logo: 'CLEARY GOTTLIEB' },
    { name: 'CMS', logo: 'CMS' },
    { name: 'Deloitte', logo: 'Deloitte.' },
    { name: 'Dentons', logo: 'DENTONS' },
    { name: 'Goodwin', logo: 'GOODWIN' },
    { name: 'Linklaters', logo: 'Linklaters' },
    { name: 'Mannheimer Swartling', logo: 'MANNHEIMER\nSWARTLING' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs font-semibold text-gray-900 text-center whitespace-pre-line">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

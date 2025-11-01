import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'PRODUCT',
      links: ['Overview', 'Word Add-In', 'Tabular Review', 'Workflows', 'Legal Research']
    },
    {
      title: 'SOLUTIONS',
      links: ['M&A', 'Litigation', 'Banking', 'Tax']
    },
    {
      title: 'CUSTOMERS',
      links: ['Overview']
    },
    {
      title: 'JOIN US',
      links: ['Careers']
    },
    {
      title: 'COMPANY',
      links: ['About', 'Contact us', 'LinkedIn', 'X']
    },
    {
      title: 'LEGAL',
      links: ['Terms', 'Privacy Policy', 'Security Policy']
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 sm:pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12 sm:mb-16">
          <svg width="100" height="20" viewBox="0 0 100 20" fill="none">
            <text x="0" y="15" fontFamily="serif" fontSize="18" fontWeight="400" fill="#000">
              NAYA AI
            </text>
          </svg>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 sm:mb-16">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-xs font-semibold tracking-wider text-gray-500 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Large NAYA AI Text */}
        <div className="mb-6 sm:mb-8">
          <div className="text-[48px] sm:text-[80px] lg:text-[120px] font-serif leading-none tracking-tight text-gray-900">
            NAYA AI
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs sm:text-sm text-gray-500">
          <p className="leading-relaxed">We use cookies to personalize content, run ads, and analyze traffic.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { megaMenuConfig, pageContent } from '../data/pageContent';

const Footer = () => {
  const productGroup = megaMenuConfig.find((item) => item.label === 'Product');
  const solutionsGroup = megaMenuConfig.find((item) => item.label === 'Solutions');
  const industriesGroup = megaMenuConfig.find((item) => item.label === 'Industries');

  const footerGroups = [
    {
      title: 'Product',
      links: productGroup?.items ?? [],
    },
    {
      title: 'Solutions',
      links: solutionsGroup?.items ?? [],
    },
    {
      title: 'Industries',
      links: industriesGroup?.items ?? [],
    },
    {
      title: 'Company',
      links: [
        { label: 'Resources', path: pageContent.resources.path },
        { label: 'Security', path: pageContent.security.path },
        { label: 'Pricing', path: pageContent.pricing.path },
      ],
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 sm:mb-16">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {link.label}
                    </Link>
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

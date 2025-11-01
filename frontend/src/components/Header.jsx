import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Product', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Security', hasDropdown: false },
    { label: 'Customers', hasDropdown: false },
    { label: 'News', hasDropdown: true },
    { label: 'Careers', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Logo with icon */}
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <circle cx="6" cy="6" r="1.5" />
            <circle cx="18" cy="6" r="1.5" />
            <circle cx="6" cy="18" r="1.5" />
            <circle cx="18" cy="18" r="1.5" />
            <line x1="12" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="text-base font-normal tracking-wide">NAYA AI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          ))}
          <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Log in
          </button>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-sm px-6 py-2 text-sm">
            Book a demo
          </Button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Log in
          </button>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-sm px-4 py-2 text-sm">
            Demo
          </Button>
          <button
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-sm">
          <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setOpenMenu((prev) => (prev === item.label ? null : item.label))}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className={`w-4 h-4 transform transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} />}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="w-full text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors text-left">
                Log in
              </button>
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-sm px-4 py-3 text-sm">
                Book a demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

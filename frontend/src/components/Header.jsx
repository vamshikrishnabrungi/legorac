import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { megaMenuConfig, simpleNavLinks } from '../data/pageContent';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderHighlightCard = (item) => {
    if (!item.highlight) return null;

    if (item.label === 'Solutions') {
      return (
        <div className="p-6">
          <div className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-[#F8FAFC] p-5 shadow-sm min-h-[220px]">
            <div className="flex items-center gap-2 text-teal-600">
              <Sparkles className="h-5 w-5" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
                {item.highlight.eyebrow}
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">{item.highlight.title}</p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.highlight.description}</p>
            </div>
            <Link
              to={item.highlight.ctaPath}
              className="text-sm font-semibold text-teal-700 hover:underline"
            >
              {item.highlight.ctaLabel}
            </Link>
          </div>
        </div>
      );
    }

    if (item.label === 'Industries') {
      return (
        <div className="p-6">
          <div className="flex flex-col gap-4 rounded-xl bg-[#F1F5F9] p-6 border border-transparent border-l border-[#E2E8F0] min-h-[260px]">
            <div className="flex items-center gap-2 text-slate-600">
              <BookOpen className="h-5 w-5" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                {item.highlight.eyebrow}
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">{item.highlight.title}</p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.highlight.description}</p>
            </div>
            <Link
              to={item.highlight.ctaPath}
              className="text-sm font-semibold text-cyan-800 hover:underline"
            >
              {item.highlight.ctaLabel}
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200 bg-gray-50 p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 mb-3">
            {item.highlight.eyebrow}
          </p>
          <h3 className="text-xl font-serif text-gray-900">
            {item.highlight.title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {item.highlight.description}
          </p>
        </div>
        <div className="mt-6">
          <Link
            to={item.highlight.ctaPath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
          >
            {item.highlight.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 relative">
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
        <nav
          className="relative hidden lg:flex items-center gap-6"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {megaMenuConfig.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {item.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === item.label && (
                <div className="absolute left-1/2 top-full z-40 mt-3 w-screen max-w-[1200px] -translate-x-1/2 px-4">
                  <div className="max-h-[420px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0px_8px_32px_rgba(0,0,0,0.08)]">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-0">
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-4">
                          {item.headerLabel || item.label}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
                          {item.items.map((link) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              className="group flex flex-col rounded-xl border border-transparent px-4 py-3 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-cyan-700">
                                {link.label}
                              </span>
                              <span className="mt-1 text-sm text-gray-600 leading-snug">
                                {link.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {item.highlight && renderHighlightCard(item)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {simpleNavLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Log in
          </Link>
          <Button asChild className="bg-black text-white hover:bg-gray-800 rounded-sm px-6 py-2 text-sm">
            <a href="#contact">Book a demo</a>
          </Button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Log in
          </Link>
          <Button asChild className="bg-black text-white hover:bg-gray-800 rounded-sm px-4 py-2 text-sm">
            <a href="#contact">Book a demo</a>
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
            {megaMenuConfig.map((item) => (
              <div key={item.label}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={() => setOpenMenu((prev) => (prev === item.label ? null : item.label))}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {openMenu === item.label && (
                  <div className="mt-3 space-y-4 pl-2">
                    <div className="space-y-3">
                      {item.items.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block rounded-lg border border-gray-200 px-3 py-3 text-sm text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="block font-semibold text-gray-900">{link.label}</span>
                          <span className="text-xs text-gray-600 mt-1">{link.description}</span>
                        </Link>
                      ))}
                    </div>
                    {item.highlight && (
                      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                          {item.highlight.eyebrow}
                        </p>
                        <p className="mt-2 text-base font-serif text-gray-900">{item.highlight.title}</p>
                        <p className="mt-2 text-xs text-gray-600 leading-relaxed">{item.highlight.description}</p>
                        <Link
                          to={item.highlight.ctaPath}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.highlight.ctaLabel}
                          {!['Solutions', 'Industries'].includes(item.label) && <ArrowRight className="w-4 h-4" />}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            {simpleNavLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                to="/login"
                className="block text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Button asChild className="w-full bg-black text-white hover:bg-gray-800 rounded-sm px-4 py-3 text-sm">
                <a href="#contact">Book a Demo</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

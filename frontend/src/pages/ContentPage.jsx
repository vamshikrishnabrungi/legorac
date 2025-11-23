import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { pageContent } from '../data/pageContent';

const ContentPage = ({ pageKey }) => {
  const page = pageContent[pageKey];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pageKey]);

  if (!page) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-40 pb-24">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-3xl font-semibold text-gray-900">Page not found</h1>
            <p className="mt-4 text-base text-gray-600">
              The page you are looking for does not exist. Please use the navigation to find the right section.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/">Return home</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-gray-900">
              {page.hero?.title}
            </h1>
            {page.hero?.description && (
              <p className="mt-6 text-lg text-gray-600">{page.hero.description}</p>
            )}
            {page.hero?.ctas && page.hero.ctas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {page.hero.ctas.map((cta) => {
                  const key = `${cta.label}-${cta.href || cta.to}`;
                  if (cta.to) {
                    return (
                      <Button key={key} asChild>
                        <Link to={cta.to}>{cta.label}</Link>
                      </Button>
                    );
                  }
                  if (cta.href) {
                    return (
                      <Button key={key} asChild>
                        <a href={cta.href}>{cta.label}</a>
                      </Button>
                    );
                  }
                  return (
                    <Button key={key}>{cta.label}</Button>
                  );
                })}
              </div>
            )}
          </header>

          {page.sections?.map((section, index) => (
            <section key={`${section.title || 'section'}-${index}`} className={index === 0 ? '' : 'mt-16'}>
              {section.title && (
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
              )}
              {section.description && (
                <p className="mt-4 text-base text-gray-600">{section.description}</p>
              )}
              {section.body && (
                <p className="mt-4 text-base text-gray-600">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={`${section.title || 'section'}-${itemIndex}`} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" aria-hidden="true" />
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.columns && section.columns.length > 0 && (
                <div
                  className={`mt-8 grid grid-cols-1 gap-6 ${
                    section.columns.length > 1 ? 'md:grid-cols-2' : ''
                  }`}
                >
                  {section.columns.map((column, columnIndex) => (
                    <div key={`${section.title || 'columns'}-${columnIndex}`} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                      {column.title && <h3 className="text-xl font-semibold text-gray-900">{column.title}</h3>}
                      {column.description && <p className="mt-3 text-base text-gray-600">{column.description}</p>}
                      {column.items && (
                        <ul className="mt-4 space-y-2 text-gray-600">
                          {column.items.map((item, idx) => (
                            <li key={`${column.title || 'column'}-item-${idx}`} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-600" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.cards && section.cards.length > 0 && (
                <div
                  className={`mt-8 grid grid-cols-1 gap-6 ${
                    section.cards.length === 1
                      ? ''
                      : section.cards.length === 2
                        ? 'md:grid-cols-2'
                        : 'md:grid-cols-2 xl:grid-cols-3'
                  }`}
                >
                  {section.cards.map((card, cardIndex) => (
                    <div key={`${section.title || 'cards'}-${cardIndex}`} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
                      {card.badge && (
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">{card.badge}</p>
                      )}
                      {card.title && <h3 className="mt-2 text-xl font-semibold text-gray-900">{card.title}</h3>}
                      {card.description && <p className="mt-3 text-base text-gray-600">{card.description}</p>}
                      {card.items && (
                        <ul className="mt-4 space-y-2 text-gray-600">
                          {card.items.map((item, idx) => (
                            <li key={`${card.title || 'card'}-item-${idx}`} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.image && (
                <div className="mt-8">
                  <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
                    <img
                      src={section.image.src}
                      alt={section.image.alt || section.title || 'Screenshot'}
                      className="w-full rounded-2xl"
                    />
                  </div>
                  {section.image.caption && (
                    <p className="mt-3 text-sm text-gray-500 text-center">{section.image.caption}</p>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentPage;

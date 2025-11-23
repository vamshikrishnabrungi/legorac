import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ResearchIcon, ReviewIcon } from '../components/icons/LegalIcons';
import { ShieldCheck, Layers, Sparkles } from 'lucide-react';

const coverageStats = [
  { label: 'Supreme Court', value: '1950–2024', detail: 'Full-text judgments with parallel citations.' },
  { label: 'High Courts', value: 'All 25+', detail: 'State-wise coverage with daily updates.' },
  { label: 'Statutes & Rules', value: '18,000+', detail: 'Acts, rules, notifications, and circulars.' },
  { label: 'Regulators', value: '30+', detail: 'RBI, SEBI, MCA, GST, Labour, DPDP, and more.' },
];

const ProductLegalResearchPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <section className="bg-white pt-36 md:pt-[180px] pb-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Product · Legal Research</p>
          <h1 className="mt-6 font-serif text-[48px] sm:text-[64px] leading-[1.05] text-gray-900">
            Research law with paragraph-level confidence.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Naya’s retrieval-first engine surfaces judgments, statutes, and private knowledge simultaneously — pairing every narrative with verifiable citations and source documents.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Start researching
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8">
              Tour the engine
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] font-serif text-gray-900">Indian Corpus Coverage</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A single search taps into every authoritative Indian legal source — updated continuously with audit trails and confidence indicators.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Unlike generic AI models, Naya’s engine is trained and evaluated exclusively on Indian legal corpora.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {coverageStats.map(({ label, value, detail }) => (
              <div key={label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">{label}</p>
                <p className="mt-3 text-2xl font-serif text-gray-900">{value}</p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Parallel Search (Judgments + Statutes + Private Vault)
              </p>
              <h2 className="mt-5 text-[36px] font-serif text-gray-900">
                Search judgments, statutes, and your private indexes together.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Naya surfaces authoritative answers across Supreme Court, High Courts, statutes, rules, and your internal knowledge base — preserving context and trust.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {[
                  { label: 'Judgments', icon: '⚖️' },
                  { label: 'Statutes', icon: '📘' },
                  { label: 'Rules', icon: '📑' },
                  { label: 'Circulars', icon: '📄' },
                  { label: 'Vault', icon: '🗂️' },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3 text-gray-600">
                <p>• Multi-source retrieval with confidence scoring</p>
                <p>• Inline paragraph citations with direct source access</p>
                <p>• Private vault overlays for firm precedents and memos</p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-center gap-3">
                <ResearchIcon className="h-7 w-7 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Unified results</p>
                  <p className="text-xs text-gray-500">Judgments, acts, rules, circulars, and private vault entries.</p>
                </div>
              </div>
              <div className="mt-6 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <img src="/assets/ui/research-snapshot.png" alt="Legal research snapshot" className="w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr,1fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Citation Verification Engine</p>
                  <p className="text-xs text-gray-500">Hallucination controls with cross-checks on every response.</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>• Automatic validation against official sources before rendering answers</p>
                <p>• Explainable chains showing every retrieval step</p>
                <p>• Downloadable citation matrices for partners and clients</p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-center gap-3">
                <Layers className="h-7 w-7 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Semantic + Boolean Hybrid Search</p>
                  <p className="text-xs text-gray-500">Combine conversational prompts with precise filters.</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>• Run conversational prompts, Boolean queries, or both simultaneously</p>
                <p>• Filter by court, judge, citation, timeline, or issue tags</p>
                <p>• Save research canvases with annotations for matter re-use</p>
              </div>
              <div className="mt-6 w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <img
                  src="/assets/ui/research-canvas.png"
                  alt="Saved research canvas snapshot"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-cyan-600" />
          <h2 className="mt-5 text-[32px] font-serif text-gray-900">
            Research that lawyers can cite — and clients can trust.
          </h2>
          <p className="mt-4 text-gray-600">
            Every answer is export-ready with verifiable references, audit trails, and sharing workflows for partners and stakeholders.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Run a sample search
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8">
              Download research memo
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ProductLegalResearchPage;

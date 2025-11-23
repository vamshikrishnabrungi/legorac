import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { DraftIcon, ReviewIcon, ResearchIcon, OpsIcon } from '../components/icons/LegalIcons';

const steps = [
  {
    title: 'Draft inside Microsoft Word',
    description: 'Work within Word’s native editor while Naya structures pleadings, notices, agreements, and templates for you.',
    icon: DraftIcon,
  },
  {
    title: 'Insert clauses from the Naya clause bank',
    description: 'Insert precedent-approved clauses from your clause bank without switching windows.',
    icon: ResearchIcon,
  },
  {
    title: 'Run AI review → redline → validate citations',
    description: 'Run AI review to detect deviations, generate redlines, and verify citations in one click.',
    icon: ReviewIcon,
  },
];

const miniFeatureCards = [
  {
    title: 'Smart Redlining',
    description: 'Compare drafts to firm playbooks, highlight deviations, and auto-generate partner-ready markups.',
    icon: ReviewIcon,
  },
  {
    title: 'Clause Intelligence',
    description: 'Surface fallback positions, annotations, and precedent clauses based on the paragraph you are editing.',
    icon: ResearchIcon,
  },
  {
    title: 'Citation Validator',
    description: 'Verify every reference against Naya’s citation engine before circulating the draft.',
    icon: DraftIcon,
  },
];

const ProductWordAddInPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <section className="bg-white pt-36 md:pt-[180px] pb-24">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Product · Word Add-In</p>
          <h1 className="mt-6 font-serif text-[48px] sm:text-[64px] leading-[1.05] text-gray-900">
            Draft, review, and cite without leaving Word.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Bring Naya’s legal OS directly into Microsoft Word — so drafting, redlining, and citation checks happen in the document lawyers already use daily.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Install the add-in
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8">
              Request admin deployment
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Most legal drafting in India happens inside Word. Naya brings verified research, drafting, and citation validation into the tool lawyers already trust.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] font-serif text-gray-900">How it works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            The add-in brings Naya’s drafting intelligence, clause bank, and review engine directly into Microsoft Word — preserving firm playbooks and audit trails.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]"
              >
                <Icon className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {miniFeatureCards.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
                    <Icon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">In-document tool</p>
                </div>
                <h3 className="mt-5 text-2xl font-serif text-gray-900">{title}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.55)]">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-inner">
              <div className="flex items-center justify-between rounded-t-2xl bg-[#2b579a] px-4 py-2 text-xs font-semibold text-white">
                <span>Word — Drafting Template.docx</span>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em]">
                  <span>Editing</span>
                  <span>AutoSave</span>
                </div>
              </div>
              <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-500">
                File • Home • Insert • References • Review • View • Naya Add-in
              </div>
              <div className="flex flex-col gap-4 p-4 lg:flex-row">
                <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="space-y-4 text-[13px] leading-relaxed text-gray-800">
                    <p>
                      WHEREAS the <span className="bg-amber-100 px-1">Respondent</span> has undertaken to comply with the obligations set out in Annexure III, all deviations must
                      be recorded prior to filing.
                    </p>
                    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-rose-800">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em]">Redline</p>
                      <p>
                        Replace “shall provide” with <span className="font-semibold text-rose-900">“must provide within 7 days”</span> per Bail Playbook §4.2.
                      </p>
                    </div>
                    <p>
                      All undertakings are supported by citations to <span className="text-cyan-700">2023 SCC Online Del 421</span> and <span className="text-cyan-700">CrPC §437(3)</span>.
                    </p>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-3 text-sm text-gray-600">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Tracked change</p>
                      <p>AI review accepted 2 of 3 clause suggestions · 1 pending partner review.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm lg:w-[320px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Naya analysis</p>
                  <div className="mt-4 space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="text-xs font-semibold text-gray-500">Clause status</p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center justify-between">
                          <span>Aligned</span>
                          <span className="text-cyan-700">12</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Needs review</span>
                          <span className="text-amber-700">3</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Blocked</span>
                          <span className="text-rose-700">1</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-3">
                      <p className="text-xs font-semibold text-gray-500">Citations</p>
                      <p className="text-[13px] text-gray-800">4 accepted · 0 flagged · Last verified 2 mins ago.</p>
                    </div>
                    <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-[13px] text-cyan-900">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em]">Suggested action</p>
                      <p>Insert Clause 9(c) fallback · auto-insert markup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 text-gray-600 md:grid-cols-2">
            <p>• Maintain drafting in the trusted Word environment while Naya handles structure, formatting, and citations.</p>
            <p>• Insert precedent-approved clauses from your clause bank without switching windows.</p>
            <p>• Run AI review to detect deviations, generate redlines, and verify citations in one click.</p>
            <p>• Export to PDF or share instantly within Naya’s matter workspace for approvals and filing prep.</p>
          </div>
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white/70 px-6 py-4 text-center text-sm font-semibold text-gray-700">
            Supported document types: Notices, replies, agreements, petitions, writs, affidavits, contracts, NDAs, HR documents, policy drafts.
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-28">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_18px_55px_-45px_rgba(15,23,42,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Enterprise deployment</p>
            <h2 className="mt-4 text-[36px] font-serif leading-tight text-gray-900">Deploy across your firm with IT controls.</h2>
            <p className="mt-4 text-lg text-gray-600">
              Roll the add-in out through the Microsoft admin center or push-button installs while keeping security and compliance teams in the loop.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-gray-700 md:grid-cols-3">
              {[
                'SSO with Azure AD or Google Workspace',
                'Admin-controlled rollout and license governance',
                'Security-aligned deployment policies with audit logs',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-semibold">
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="text-[36px] font-serif text-gray-900">From intake to insights — governed every step.</h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Workflows leverage Naya’s Legal OS so every stage — from data ingestion, through drafting, to approvals — remains auditable,
                secure, and citation-backed.
              </p>
              <div className="mt-8 space-y-4 text-gray-600">
                <p>• Automated matter creation with evidence vault linking</p>
                <p>• Role-based tasking and approval chains</p>
                <p>• Auto-generated reports, notes, and client-ready summaries</p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white/60 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-center gap-3">
                <OpsIcon className="h-7 w-7 text-cyan-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Workflow analytics</p>
                  <p className="text-xs text-gray-500">Monitor turnaround times, approvals, and SLA adherence.</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-gray-600">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Litigation readiness</p>
                  <p className="mt-2">Chronologies, drafts, and bundles auto-updated.</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Corporate diligence</p>
                  <p className="mt-2">Clause deviations and risk summaries at a glance.</p>
                </div>
                <div className="col-span-2 rounded-xl border border-dashed border-gray-200 bg-white/70 p-4">
                  <p className="font-semibold text-gray-900">Compliance evidence trail</p>
                  <p className="mt-2">Every step, citation, and approval preserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Ready to bring Naya into Word?</p>
          <h2 className="mt-4 text-[40px] font-serif leading-tight text-gray-900">Give every drafter AI co-pilots inside Microsoft Word.</h2>
          <p className="mt-4 text-lg text-gray-600">
            Install the add-in for a pilot matter or roll it out firm-wide with admin controls, security policies, and tracked adoption.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">Install Add-In</Button>
            <Button
              variant="outline"
              className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ProductWordAddInPage;

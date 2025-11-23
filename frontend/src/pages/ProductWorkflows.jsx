import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ResearchIcon, DraftIcon, ReviewIcon, OpsIcon } from '../components/icons/LegalIcons';

const workflowGroups = [
  {
    title: 'Litigation workflows',
    subtitle: 'Tools for filings, hearings, evidence, and court prep.',
    icon: '⚖️',
    badge: 'IPC • CrPC • CPC',
    image: '/assets/ui/workflow-litigation.png',
    items: ['Draft bail applications', 'Writ petitions & replies', 'Chronology builder & hearing prep', 'Evidence bundle review'],
  },
  {
    title: 'Corporate law workflows',
    subtitle: 'Automate drafting, approvals, and board governance across entities.',
    icon: '🏢',
    badge: 'Companies Act • FEMA • MCA',
    image: '/assets/ui/workflow-corporate.png',
    items: ['Shareholder agreement drafting', 'M&A diligence orchestration', 'Board resolution automation', 'Entity compliance tracker'],
  },
  {
    title: 'Banking / NBFC workflows',
    subtitle: 'Stay ahead of RBI, SEBI, and NBFC obligations with guided flows.',
    icon: '🏦',
    badge: 'RBI • SEBI • IBC',
    image: '/assets/ui/workflow-banking.png',
    items: ['RBI / SEBI filing automation', 'Loan agreement review', 'Risk heatmap generation', 'Compliance calendar updates'],
  },
  {
    title: 'Tax + Compliance workflows',
    subtitle: 'Respond to notices, plan litigation, and automate statutory reporting.',
    icon: '🧾',
    badge: 'GST • Income Tax • DPDP',
    image: '/assets/ui/workflow-tax.png',
    items: ['Tax notice reply builder', 'GST litigation prep', 'Obligation extraction & reminders', 'Regulatory reporting summaries'],
  },
  {
    title: 'HR + Employment workflows',
    subtitle: 'Manage contracts, policies, and dispute playbooks with consistency.',
    icon: '👥',
    badge: 'Labour Codes • POSH • Shops & Est.',
    image: '/assets/ui/workflow-hr.png',
    items: ['Employment contract drafting', 'Policy generation & review', 'Disciplinary notice automation', 'Employee dispute casefiles'],
  },
];

const featuredWorkflows = [
  {
    title: 'Case Intake → FIR Prep → Filing → Chronology → Draft Reply',
    description:
      'An end-to-end litigation pipeline that prepares filings, builds timelines, and drafts replies with verified sources.',
    icon: ResearchIcon,
    accent: 'from-cyan-50 to-white',
  },
  {
    title: 'Agreement Review → Clause Extraction → Redline → Approval',
    description:
      'Upload agreements to extract key clauses, surface deviations against playbooks, and circulate redlines for approvals.',
    icon: DraftIcon,
    accent: 'from-amber-50 to-white',
  },
  {
    title: 'Diligence → Risk Summary → Report Generation',
    description:
      'Aggregate data rooms, triage risks, and export diligence reports tailored to your engagement format.',
    icon: ReviewIcon,
    accent: 'from-lime-50 to-white',
  },
];

const ProductWorkflowsPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      <section className="bg-white pt-36 md:pt-[180px] pb-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Product · Workflows</p>
          <h1 className="mt-6 font-serif text-[48px] sm:text-[64px] leading-[1.05] text-gray-900">
            Agentic workflows for every Indian legal team.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Orchestrate intake, drafting, review, approvals, and filings across litigation, corporate, banking, tax, and employment matters — all
            within Naya’s governed workspace.
          </p>
          <p className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">
            Built for IPC · CrPC · CPC · SEBI · RBI · GST · Companies Act
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Explore workflows
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8">
              Book a demo
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] font-serif text-gray-900">Purpose-built workflows by practice area.</h2>
          <p className="text-gray-600 mt-2">End-to-end agentic workflows designed for Indian legal operations, powered by verified sources.</p>
          <div className="mt-12 flex flex-col">
            {workflowGroups.map(({ title, subtitle, items, icon, image, badge }) => (
              <div
                key={title}
                className="mt-16 first:mt-0 rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_18px_55px_-40px_rgba(15,23,42,0.5)]"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Practice area</p>
                      <h3 className="text-[32px] font-serif leading-tight text-gray-900">{title}</h3>
                    </div>
                  </div>
                  <span className="ml-auto rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                    {badge}
                  </span>
                </div>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">{subtitle}</p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm"
                    >
                      <span className="text-cyan-600">▶</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="aspect-[5/3] overflow-hidden rounded-xl bg-white">
                    <img src={image} alt={`${title} interface`} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Workflow architecture</p>
            <h2 className="mt-5 text-[36px] font-serif leading-tight text-gray-900">
              Ingest → Reason → Draft → Approve → Deliver.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every workflow runs on the same governed stack so matter data, AI reasoning, and human approvals stay linked.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.1fr]">
            <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.6)]">
              {[
                { label: 'Ingest & classify', detail: 'Documents, evidence, and emails land in governed vaults.' },
                { label: 'Reason & retrieve', detail: 'Retrieval-augmented AI surfaces facts and citations.' },
                { label: 'Draft & redline', detail: 'Agentic planners assemble drafts aligned to firm playbooks.' },
                { label: 'Approve & track', detail: 'Role-based approvals, audit trails, and SLA controls.' },
                { label: 'Deliver & measure', detail: 'Exports, court filings, or client updates with analytics.' },
              ].map(({ label, detail }, index) => (
                <div key={label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">{label}</p>
                  <p className="mt-1 text-sm text-gray-600">{detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white/60 p-6 shadow-[0_24px_70px_-55px_rgba(15,23,42,0.6)]">
              <div className="aspect-[5/3] overflow-hidden rounded-2xl bg-gray-50">
                <img src="/assets/ui/workflow-architecture.png" alt="Workflow architecture diagram" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[36px] font-serif text-gray-900">Featured automations</h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredWorkflows.map(({ title, description, icon: Icon, accent }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]"
              >
                <div className={`flex items-center gap-3 rounded-full bg-gradient-to-r ${accent} px-4 py-2`}>
                  <Icon className="h-5 w-5 text-cyan-700" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-600">Automation</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Launch litigation workflow
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8">
              View automation catalog
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-32">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
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
    </main>
    <Footer />
  </div>
);

export default ProductWorkflowsPage;

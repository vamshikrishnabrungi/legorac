import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle, Database, LineChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ResearchIcon, DraftIcon, ReviewIcon, WorkspaceIcon } from '../components/icons/LegalIcons';

const capabilityCards = [
  {
    title: 'Verified Research',
    description:
      'Authoritative answers with paragraph-linked citations from Supreme Court, High Courts, statutes, and circulars.',
    icon: ResearchIcon,
  },
  {
    title: 'AI Drafting & Review',
    description: 'Generate notices, replies, petitions, contracts, and motions aligned to your firm’s playbooks.',
    icon: DraftIcon,
  },
  {
    title: 'Bundle & Document Analysis',
    description: 'Upload pleadings, agreements, or bundles to extract timelines, fact patterns, obligations, and risk.',
    icon: ReviewIcon,
  },
  {
    title: 'Matter Workspace',
    description: 'Manage matters, evidence, deadlines, and approvals within one auditable workspace.',
    icon: WorkspaceIcon,
  },
];

const researchCards = [
  {
    title: 'Intelligent Research',
    description:
      'Ask natural language questions or create Boolean queries. Get paragraph-linked citations across SC / HC judgments, statutes, rules, and notifications — instantly.',
    icon: ResearchIcon,
    image: '/assets/ui/research-snapshot.png',
    alt: 'Research workspace',
  },
  {
    title: 'Guided Drafting',
    description:
      'Draft legal notices, replies, petitions, NDAs, and contracts using structured templates and AI-assisted redlining that flags deviations in real time.',
    icon: DraftIcon,
    image: '/assets/ui/drafting-assistant.png',
    alt: 'Drafting assistant',
  },
  {
    title: 'Review & Analysis',
    description:
      'Upload case bundles, agreements, pleadings, or policy documents. Naya extracts facts, timelines, issues, obligations, inconsistencies, and risk summaries automatically.',
    icon: ReviewIcon,
    image: '/assets/ui/review-dashboard.png',
    alt: 'Review dashboard',
  },
];

const accuracyBullets = [
  'Retrieval-first pipeline tuned on Indian legal datasets.',
  'Paragraph-level citation checks before output.',
  'Comprehensive coverage: Supreme Court, High Courts, statutes, rules, circulars.',
  'Self-verification plus human-in-the-loop controls for sensitive matters.',
];

const integrationLogos = ['Microsoft Word', 'Outlook', 'Google Drive', 'SharePoint', 'iManage', 'OneDrive'];

const collaborationCards = [
  {
    title: 'Partners & Associates',
    description: 'Strategize, share drafts, and access precedent research in one workspace.',
    emoji: '👔',
  },
  {
    title: 'Paralegals & Analysts',
    description: 'Accelerate filings, chronology prep, cleanup, and bundle assembly.',
    emoji: '📁',
  },
  {
    title: 'In-house Legal & Ops',
    description: 'Route intake, manage approvals, enforce SLAs, and track policies.',
    emoji: '🏢',
  },
  {
    title: 'Clients & Stakeholders',
    description: 'Provide secure access to evidence, drafts, and matter status updates.',
    emoji: '👤',
  },
];

const builtForBullets = [
  'Faster research with authoritative citations.',
  'Drafting aligned to Indian statutes and firm playbooks.',
  'SOC 2, ISO 27001, ISO 42001, GDPR / DPDP compliant.',
  'Optimized for criminal, civil, commercial, and corporate matters.',
  'Supports multiple practice areas and enterprise legal teams.',
];

const trustLogos = ['Shardul Amarchand', 'AZB & Partners', 'Khaitan & Co', 'Trilegal', 'PwC India', 'EY Law'];

const workspaceCards = [
  {
    title: 'Matter timeline',
    description: 'Key filings, hearings, milestones, and owners in one view.',
  },
  {
    title: 'Evidence vault',
    description: 'Versioned exhibits, annotations, and secure notes.',
  },
];

const accuracyFeatures = [
  {
    title: 'Citation verification engine',
    description: 'Double-checks every source before release.',
    icon: ShieldCheck,
  },
  {
    title: 'Retrieval logs',
    description: 'Trace prompts to statutes, acts, and judgments.',
    icon: Database,
  },
  {
    title: 'Confidence analytics',
    description: 'Monitor risk signals across matter types.',
    icon: LineChart,
  },
];

const adoptionStats = [
  {
    title: '62% faster answers',
    description: 'Semantic research with instant citations and linked authorities.',
    icon: ResearchIcon,
  },
  {
    title: '40 hrs saved weekly',
    description: 'Template-guided drafting replaces manual first drafts.',
    icon: DraftIcon,
  },
  {
    title: 'Zero surprise filings',
    description: 'Matter workspace tracks every deadline, owner, and approval.',
    icon: WorkspaceIcon,
  },
];

const GradientCard = ({ children, accent = 'from-cyan-100 via-white to-blue-100' }) => (
  <div className="relative">
    <div className={`absolute inset-0 blur-[120px] opacity-70 bg-gradient-to-br ${accent}`} />
    <div className="relative min-h-[320px] rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
      {children}
    </div>
  </div>
);

const MetricCard = ({ label, value, subtext }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">{label}</p>
    <p className="mt-2 text-3xl font-serif text-gray-900">{value}</p>
    <p className="mt-2 text-sm text-gray-600">{subtext}</p>
  </div>
);

const ProductOverviewPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-white pt-40 md:pt-[200px] pb-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Product Overview</p>
          <p className="text-gray-600 text-lg mt-1">Your complete workspace for Indian legal operations.</p>
          <h1 className="mt-6 font-serif text-[52px] sm:text-[72px] lg:text-[96px] leading-[1] text-gray-900">
            Run every legal workflow from one platform.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            One unified workspace to research, draft, review, and manage every matter — built for India.
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Naya brings everything your legal team needs into a single governed platform: verified research, drafting automation,
            case analysis, matter collaboration, and compliance — all powered by Indian jurisdiction-aware AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Book a demo
            </Button>
            <Button
              variant="outline"
              className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8"
            >
              Explore workflows
            </Button>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-gray-50 py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Core Capabilities</p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              A single platform. Multiple powerful workflows.
            </h2>
            <p className="text-gray-600 mt-2">
              End-to-end agentic workflows designed for Indian legal operations, powered by verified sources.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {capabilityCards.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-3 text-cyan-600">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Capability</p>
                </div>
                <h3 className="text-2xl font-serif text-gray-900">{title}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Naya exists */}
      <section className="border-t border-gray-100 bg-white py-36">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Why Naya exists</p>
          <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
            Legal work in India deserves tools built for Indian law.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From IPC to CrPC, civil disputes to commercial compliance — Naya is engineered specifically for the Indian legal
            system, giving teams accuracy, speed, and verifiable outputs they can trust.
          </p>
        </div>
      </section>

      {/* Legal OS */}
      <section className="mt-16 border-t border-gray-100 bg-white py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr,1fr]">
            <div className="space-y-7">
              <p className="mt-16 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Your Legal OS</p>
              <h2 className="text-[40px] font-serif leading-tight text-gray-900">A governed workspace for every legal workflow.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Naya unifies your entire legal lifecycle so teams never lose context across documents, matters, or stakeholders.
              </p>
              <div className="space-y-3">
                {[
                  'Semantic research with instant sourcing.',
                  'Draft petitions, replies, notices, and contracts in minutes.',
                  'AI-powered review of bundles, agreements, and pleadings.',
                  'Automatic extraction of timelines, issues, obligations, and fact patterns.',
                  'Case and matter management with evidence vaults and shared timelines.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-cyan-600" />
                    <p className="text-base text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  variant="outline"
                  className="rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-900 hover:bg-gray-100 sm:px-8"
                >
                  See platform tour
                </Button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0">
              <GradientCard>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                  </div>
                  <Sparkles className="h-5 w-5 text-cyan-600" />
                </div>
                <div className="mt-8 space-y-6">
                  <div className="mt-10 rounded-2xl border border-dashed border-gray-200 bg-white p-5 sm:col-span-2">
                    <p className="text-sm font-semibold text-gray-900">Workspace overview</p>
                    <p className="mt-2 text-xs text-gray-500">
                      One place to manage research, drafting, review, and collaboration.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {workspaceCards.map(({ title, description }) => (
                      <div key={title} className="rounded-2xl border border-gray-100 bg-white/80 p-4">
                        <p className="text-sm font-semibold text-gray-900">{title}</p>
                        <p className="mt-2 text-xs text-gray-500">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Secure • Audited • Enterprise ready
                </p>
              </GradientCard>
            </div>
          </div>
        </div>
      </section>

      {/* Research / Draft / Review */}
      <section className="bg-gray-50 py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-10 mb-2 text-sm uppercase tracking-[0.35em] text-gray-500">
              Research • Draft • Review
            </p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              All in one place — orchestrated by AI, governed by your playbooks.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {researchCards.map(({ title, description, icon: Icon, image, alt }) => (
              <div
                key={title}
                className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)] transition-transform hover:-translate-y-2"
              >
                <Icon className="h-10 w-10 text-cyan-600" />
                <div>
                  <h3 className="text-2xl font-serif text-gray-900">{title}</h3>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
                </div>
                <div className="mt-6">
                  <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="aspect-[5/3] overflow-hidden rounded-xl bg-gray-50">
                      <img src={image} alt={alt} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Start researching with Naya
            </Button>
          </div>
        </div>
      </section>

      {/* Accuracy Layer */}
      <section className="border-t border-gray-100 bg-white py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr,1.1fr]">
            <GradientCard accent="from-purple-100 via-white to-pink-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gray-300" />
                  <span className="h-2 w-2 rounded-full bg-gray-300" />
                  <span className="h-2 w-2 rounded-full bg-gray-300" />
                </div>
                <ShieldCheck className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">Validation checks</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Citations cleared</span>
                      <span className="font-semibold text-gray-900">12 / 12</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-cyan-500" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Risk tolerance</span>
                      <span className="font-semibold text-gray-900">Strict</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-rose-400" style={{ width: '65%' }} />
                    </div>
                  </div>
                </div>
                <div className="mt-5 border-t border-dashed border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Source sync</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
                    {['SC', 'HC', 'Acts', 'Rules', 'Circulars'].map((token) => (
                      <span key={token} className="rounded-full bg-gray-100 px-3 py-1">
                        {token}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-gray-500">Audit trail synced 2 mins ago</p>
                </div>
              </div>
            </GradientCard>
            <div className="space-y-8">
              <div>
                <p className="mt-16 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Accuracy Layer</p>
                <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
                  Retrieval-first architecture engineered for verifiable answers.
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Every response from Naya is anchored in real legal sources, validated through hallucination controls, and delivered
                  with complete transparency.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {accuracyFeatures.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 text-left shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-cyan-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{title}</p>
                      <p className="text-xs text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {accuracyBullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-cyan-600" />
                    <p className="text-base text-gray-700 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <MetricCard label="Citations Verified" value="100%" subtext="Paragraph-linked sources across every answer." />
                <MetricCard label="Corpus Coverage" value="450K+" subtext="Judgments, acts, rules, and circulars tracked continuously." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption */}
      <section className="border-t border-gray-100 bg-white py-36">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Why teams adopt Naya</p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              Enterprise accuracy with measurable time savings.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Firms, chambers, and in-house teams standardize on Naya to shorten research cycles, govern drafting, and eliminate
              matter risk.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {adoptionStats.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 text-left shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
                <div className="flex items-center gap-3 text-cyan-600">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Outcome</span>
                </div>
                <h3 className="mt-5 text-2xl font-serif text-gray-900">{title}</h3>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="mt-16 bg-gray-50 py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-16 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Seamless Integrations</p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              Work where your teams already work.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Connect Naya to your document systems, email, and identity providers so your workflows stay connected and compliant.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {integrationLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-24 items-center justify-center rounded-2xl border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8"
            >
              View integration catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="border-t border-gray-100 bg-white py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-16 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Collaboration</p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              One workspace for teams, clients, and stakeholders.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Naya keeps every participant aligned with secure portals, shared timelines, evidence coordination, and auditable
              activity trails.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {collaborationCards.map(({ title, description, emoji }) => (
              <div key={title} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)]">
                <div>
                  <h3 className="flex items-center text-2xl font-serif text-gray-900">
                    <span className="text-2xl mr-2">{emoji}</span>
                    {title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
              Talk to sales
            </Button>
          </div>
        </div>
      </section>

      {/* Built for Indian teams */}
      <section className="bg-gray-50 py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Built for Modern Indian Legal Teams
            </p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              Speed. Accuracy. Security. Local expertise.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {builtForBullets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.55)]">
                <CheckCircle className="mt-1 h-5 w-5 text-cyan-600" />
                <p className="text-base text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="border-t border-gray-100 bg-white py-36">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-16 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Trusted Across India
            </p>
            <h2 className="mt-5 text-[40px] font-serif leading-tight text-gray-900">
              Legal teams, enterprises, and consultancies rely on Naya.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Accelerate litigation, diligence, reviews, and regulatory workflows with one legal OS designed for Indian law.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {trustLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-20 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm px-3 text-center"
              >
                <p className="tracking-widest text-xs font-semibold text-gray-700 sm:text-sm uppercase">{logo}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <h3 className="text-[32px] font-serif text-gray-900">Start transforming your legal work.</h3>
            <p className="text-lg text-gray-600 max-w-2xl">
              Join thousands using Naya to research, draft, and automate legal work with verifiable accuracy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="rounded-full bg-black px-6 py-4 text-base text-white hover:bg-gray-800 sm:px-8">
                Start Free Chat
              </Button>
              <Button
                variant="outline"
                className="rounded-full border border-gray-300 px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8"
              >
                Book a demo
              </Button>
              <Button variant="ghost" className="rounded-full px-6 py-4 text-base text-gray-900 hover:bg-gray-100 sm:px-8">
                Explore workflows
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ProductOverviewPage;

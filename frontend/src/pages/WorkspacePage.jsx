import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Bot,
  Files,
  Workflow,
  BookOpen,
  Clock3,
  HelpCircle,
  Settings,
  Home,
  ShieldCheck,
  LibraryBig,
  FolderPlus,
  Upload,
  Sparkles,
  Search,
  FileText,
  ListChecks,
  FileSignature,
  Scale,
  Bell,
  CheckCircle,
  Clock4,
} from 'lucide-react';

const sidebarLinks = [
  { label: 'Home', icon: Home },
  { label: 'Assistant', icon: Bot },
  { label: 'Vault', icon: Files },
  { label: 'Workflows', icon: Workflow },
  { label: 'Library', icon: BookOpen },
  { label: 'History', icon: Clock3 },
  { label: 'Guidance', icon: ShieldCheck },
  { label: 'Workspaces', icon: LibraryBig },
  { label: 'Settings', icon: Settings },
  { label: 'Help', icon: HelpCircle },
];

const quickWorkflows = [
  { title: 'Draft Legal Notice', icon: FileText, description: 'Preload precedents and parties.' },
  { title: 'Casefile Analysis', icon: Search, description: 'Triangulate facts with citations.' },
  { title: 'Generate Chronology', icon: ListChecks, description: 'Build timelines from filings.' },
  { title: 'Analyze FIR', icon: ShieldCheck, description: 'Spot gaps and contradictions.' },
  { title: 'Draft Agreement', icon: FileSignature, description: 'Playbooks + clause bank ready.' },
  { title: 'SEBI/RBI Filing', icon: Scale, description: 'Compliance checklists pre-set.' },
];

const WorkflowBadge = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
    <Sparkles className="h-4 w-4 text-slate-500" />
    {label}
  </span>
);

const Card = ({ children }) => (
  <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] p-8">
    {children}
  </div>
);

const WorkspacePage = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="min-h-screen bg-white text-slate-900 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 bg-slate-50/60 p-5 gap-5">
        <div className="flex items-center gap-2 font-semibold text-lg tracking-wide px-1">
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
          NAYA AI
        </div>
        <div className="space-y-1">
          {sidebarLinks.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="w-full inline-flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-white hover:shadow-sm hover:border hover:border-slate-200 transition"
            >
              <Icon className="h-4 w-4 text-slate-500" />
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className="mt-auto space-y-3">
          <div className="rounded-xl bg-white border border-slate-200 p-4 text-sm text-slate-700 shadow-sm space-y-2">
            <p className="font-semibold">Teams & matters</p>
            <p className="text-xs text-slate-500">Litigation — 12 matters</p>
            <p className="text-xs text-slate-500">Corporate — 9 matters</p>
            <p className="text-xs text-slate-500">Compliance — 6 matters</p>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
            <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
              {email ? email[0]?.toUpperCase() : 'N'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800">Whitford Lane</p>
              <p className="text-xs text-slate-500">Switch organization</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-white">
        {/* Minimal top bar */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur px-4 sm:px-8 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-slate-500">Org</span>
              <select className="bg-transparent focus:outline-none">
                <option>Whitford Lane</option>
                <option>Acme Legal</option>
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-slate-500">Mode</span>
              <select className="bg-transparent focus:outline-none">
                <option>Litigation</option>
                <option>Corporate</option>
                <option>Compliance</option>
                <option>HR</option>
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-slate-500">Matter</span>
              <select className="bg-transparent focus:outline-none">
                <option>Vortex vs State</option>
                <option>Series B Financing</option>
                <option>Data Protection Rollout</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50">
              <Search className="h-4 w-4 text-slate-600" />
            </button>
            <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
              {email ? email[0]?.toUpperCase() : 'N'}
            </div>
          </div>
        </header>

        <div className="flex-1 px-4 sm:px-8 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Hero chat fills the width */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-8 space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div className="space-y-1">
                  <h1 className="text-3xl font-semibold text-slate-900">Ask Naya anything</h1>
                  <p className="text-sm text-slate-600">Org: Whitford Lane · Mode: Litigation · Matter: Vortex vs State</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <WorkflowBadge label="Deep Research" />
                  <WorkflowBadge label="Matter context on" />
                </div>
              </div>
              <div className="space-y-4">
                <textarea
                  placeholder="Draft a response for opposing counsel referencing the RBI circulars from April 2024..."
                  className="w-full min-h-[360px] rounded-2xl border border-slate-200 px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-slate-100"
                />
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 hover:bg-slate-50 transition">
                    <Upload className="h-4 w-4" /> Add Files
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 hover:bg-slate-50 transition">
                    <FolderPlus className="h-4 w-4" /> Add from Vault
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 hover:bg-slate-50 transition">
                    <Workflow className="h-4 w-4" /> Choose Workflow
                  </button>
                </div>
                <button className="w-full rounded-2xl bg-black text-white py-4 text-sm font-semibold hover:bg-gray-900 transition">
                  Open Assistant
                </button>
              </div>
            </div>

            {/* Secondary modules in 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-5 w-5 text-slate-500" />
                    <h3 className="text-lg font-semibold">Recent activity</h3>
                  </div>
                  <button className="text-xs text-slate-600 hover:text-black">View all</button>
                </div>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex justify-between py-2">
                    <span className="leading-relaxed">Drafted legal notice for Vortex</span>
                    <span className="text-slate-400 ml-4">2h</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Analyzed FIR and generated chronology</span>
                    <span className="text-slate-400 ml-4">Yesterday</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Uploaded case bundle to Vault</span>
                    <span className="text-slate-400 ml-4">2d</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Compliance workflow: SEBI filing</span>
                    <span className="text-slate-400 ml-4">This week</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-slate-500" />
                    <h4 className="font-semibold text-lg">Notifications & approvals</h4>
                  </div>
                  <button className="text-xs text-slate-600 hover:text-black">View all</button>
                </div>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex justify-between items-start py-2">
                    <span className="leading-relaxed">Partner review: SPA draft</span>
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded ml-4">Pending</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Compliance check: SEBI addendum</span>
                    <span className="text-xs text-emerald-600 font-medium px-2 py-1 bg-emerald-50 rounded ml-4">Approved</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Upload NDA for Acme</span>
                    <span className="text-xs text-slate-600 font-medium px-2 py-1 bg-slate-100 rounded ml-4">Due</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-slate-500" />
                    <h4 className="font-semibold text-lg">Tasks</h4>
                  </div>
                  <button className="text-xs text-slate-600 hover:text-black">Assign task</button>
                </div>
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-center justify-between py-2">
                    <span className="leading-relaxed">Deposition summary — upload</span>
                    <span className="text-xs text-slate-400 ml-4">Today</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Chronology cross-check</span>
                    <span className="text-xs text-slate-400 ml-4">This week</span>
                  </li>
                  <li className="flex items-center justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Policy update — HR</span>
                    <span className="text-xs text-slate-400 ml-4">Next week</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Quick workflows</h3>
                  <button className="text-sm text-slate-600 hover:text-black">View all</button>
                </div>
                <div className="space-y-4">
                  {quickWorkflows.slice(0, 3).map(({ title, icon: Icon, description }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition flex items-start gap-4 cursor-pointer"
                    >
                      <div className="h-10 w-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-slate-700" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-900 leading-relaxed">{title}</p>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">Vault preview</h4>
                  <button className="text-sm text-slate-600 hover:text-black">Open Vault</button>
                </div>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start justify-between py-2">
                    <span className="inline-flex items-start gap-3 flex-1">
                      <Files className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">
                        Litigation bundle — <span className="text-xs text-emerald-700 font-semibold px-2 py-0.5 bg-emerald-50 rounded">Shared</span>
                      </span>
                    </span>
                    <span className="text-xs text-slate-400 ml-4">Today</span>
                  </div>
                  <div className="flex items-start justify-between py-2 border-t border-slate-100">
                    <span className="inline-flex items-start gap-3 flex-1">
                      <Files className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">
                        Corporate SPA — <span className="text-xs text-amber-700 font-semibold px-2 py-0.5 bg-amber-50 rounded">Draft</span>
                      </span>
                    </span>
                    <span className="text-xs text-slate-400 ml-4">2d</span>
                  </div>
                  <div className="flex items-start justify-between py-2 border-t border-slate-100">
                    <span className="inline-flex items-start gap-3 flex-1">
                      <Files className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">
                        RBI notes — <span className="text-xs text-slate-700 font-semibold px-2 py-0.5 bg-slate-100 rounded">Updated</span>
                      </span>
                    </span>
                    <span className="text-xs text-slate-400 ml-4">This week</span>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">Teams & matters</h4>
                  <button className="text-sm text-slate-600 hover:text-black">Manage</button>
                </div>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-center justify-between py-2">
                    <span className="leading-relaxed">Litigation</span>
                    <span className="text-xs text-slate-500 font-medium ml-4">12 matters</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Corporate</span>
                    <span className="text-xs text-slate-500 font-medium ml-4">9 matters</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-slate-100">
                    <span className="leading-relaxed">Compliance</span>
                    <span className="text-xs text-slate-500 font-medium ml-4">6 matters</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkspacePage;

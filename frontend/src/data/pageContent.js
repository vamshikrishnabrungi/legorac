export const pageContent = {
  productOverview: {
    path: '/product/overview',
    hero: {
      title: 'Your unified AI workspace for modern legal work',
      description: 'Research, draft, review, and manage matters — all in one intelligent platform.',
      ctas: [{ label: 'Book a demo', href: '#contact' }],
    },
    sections: [
      {
        title: 'The Complete Legal OS',
        description: 'Naya brings every step of legal work into a single governed workspace:',
        items: [
          'Research with paragraph-level citations',
          'Draft notices, petitions, contracts',
          'Analyze contracts, pleadings, bundles',
          'Extract timelines, issues, and inconsistencies',
          'Manage matters, deadlines, and evidence',
          'Collaborate securely with clients',
        ],
      },
      {
        title: 'Accuracy You Can Trust',
        items: [
          'Retrieval-first architecture',
          'Real citations from Supreme Court and High Court judgments',
          'Coverage across statutes, rules, and notifications',
          'Private indexes for firm documents',
          'Hallucination-safe workflows',
        ],
      },
      {
        title: 'Integrates with Your Tools',
        items: [
          'Microsoft Word Add-In',
          'Outlook and email filing',
          'Drive, OneDrive, SharePoint',
          'iManage and NetDocs (Enterprise)',
          'SSO, SCIM, and RBAC',
          'Vault storage with audit trails',
        ],
      },
      {
        title: 'One Workspace for the Entire Team',
        description: 'Partners, associates, paralegals, and clients — unified.',
      },
    ],
  },
  productWordAddIn: {
    path: '/product/word-add-in',
    hero: {
      title: 'Draft, edit, and review inside Word — powered by Naya AI',
      ctas: [{ label: 'Install the Add-In', href: '#contact' }],
    },
    sections: [
      {
        title: 'Features',
        items: [
          'Smart drafting from templates',
          'Clause suggestions based on playbooks',
          'Redlines and deviation summaries',
          'Automatic citation validation',
          'Version comparison and summarization',
          'Insert arguments, clauses, and summaries',
          'Works with DOC, DOCX, and PDF formats',
        ],
      },
    ],
  },
  productWorkflows: {
    path: '/product/workflows',
    hero: {
      title: 'End-to-end legal workflows, built by experts',
      ctas: [{ label: 'Explore workflows', href: '#contact' }],
    },
    sections: [
      {
        title: 'Workflows Included',
        items: [
          'Draft a bail application',
          'Draft a legal notice',
          'Case file → summary → issues → arguments',
          'M&A due diligence automation',
          'Employment policy generation',
          'Regulatory compliance workflow',
          'Banking regulatory filing',
          'Consumer dispute workflow',
          'Corporate governance workflow',
          'Contract review workflow',
        ],
      },
    ],
  },
  productLegalResearch: {
    path: '/product/legal-research',
    hero: {
      title: 'Legal research with real citations — not guesses',
      ctas: [{ label: 'Start researching', href: '#contact' }],
    },
    sections: [
      {
        title: 'Features',
        items: [
          'Natural language and Boolean search',
          'Semantic, statute, and rule lookup',
          'Paragraph-level citations',
          'Judge, court, and case metadata',
          'Case summaries and holding extraction',
          'Private vault search',
          'Research to draft integration',
          'Batch research for complex matters',
        ],
      },
    ],
  },
  solutionsLitigation: {
    path: '/solutions/litigation',
    hero: {
      title: 'Litigation intelligence for every stage of a case',
      description: 'Naya orchestrates criminal and civil casework — from FIR intake to appeal drafting — with AI copilots for every stage.',
      ctas: [
        { label: 'Try Litigation Workflow', href: '#contact' },
        { label: 'See litigation demo', href: '#contact' },
      ],
    },
    sections: [
      {
        title: 'Litigation workflow control center',
        description: 'Upload case bundles, FIRs, and written statements to see instant summaries, issue lists, and AI drafting suggestions.',
        items: [
          'Matter canvas showing evidence packets, contradictions, and pending tasks',
          'Saved filters for SC / HC citations plus issue-based folders',
          'Criminal + civil playbooks that drive drafting automations',
        ],
        image: {
          src: '/assets/solutions/litigation-workflow.png',
          alt: 'Litigation workflow screenshot',
          caption: 'Bail, WS, and appeal drafts orchestrated alongside contradictions, chronology, and bundle review.',
        },
      },
      {
        title: 'Criminal and civil coverage',
        description: 'Align every case type with structured automations.',
        columns: [
          {
            title: 'Criminal matters',
            description: 'Purpose-built workflows for investigation and trial stages.',
            items: [
              'FIR & complaint ingestion with issue + loophole extraction',
              'Bail drafting (regular, anticipatory, default) with precedent snippets',
              'Charge-sheet variance detection and contradiction tables',
              'Evidence vault with witness statements, cross-question notes, and mobile hearing mode',
              'Appeal drafting with grounds auto-suggested from trial record',
            ],
          },
          {
            title: 'Civil & commercial matters',
            description: 'AI copilots for plaints, written statements, and submissions.',
            items: [
              'Auto-build plaints, WS, rejoinders, and written arguments with citations',
              'Chronology builder linked to annexures and exhibits',
              'Bundle organizer for briefs, paper-books, and digital evidence',
              'Contradiction matrix for affidavits, testimonies, and disclosures',
              'Client-ready updates with status, next hearings, and draft previews',
            ],
          },
        ],
      },
      {
        title: 'Stage-based automation',
        description: 'Every step of the litigation lifecycle stays audit-ready.',
        cards: [
          {
            title: 'Intake & case triage',
            items: [
              'Drag-and-drop FIRs, complaints, notices, and transcripts',
              'Instant issue, party, and relief extraction with confidence scores',
            ],
          },
          {
            title: 'FIR / complaint analysis',
            items: [
              'Identify loopholes, missing sections, limitation issues',
              'Map allegations to statutory ingredients and precedents',
            ],
          },
          {
            title: 'Contradiction & loophole engine',
            items: [
              'Auto-generate contradiction tables across statements and evidence',
              'Flag factual gaps versus defence theory or prosecution case',
            ],
          },
          {
            title: 'Drafting studio',
            items: [
              'Bail, written statements, petitions, and affidavits with playbook templates',
              'Contextual clause suggestions + automatic citation validation',
            ],
          },
          {
            title: 'Chronology builder',
            items: [
              'Timeline tied to documents, events, and exhibits',
              'Exports to court-ready annexures or internal briefing decks',
            ],
          },
          {
            title: 'Bundle & evidence review',
            items: [
              'Compare pleadings, highlight additions/deletions, attach notes',
              'Generate bundle summaries with issues + relief sought',
            ],
          },
          {
            title: 'Hearing mode',
            items: [
              'Mobile-friendly view with indexed issues, citations, and arguments',
              'Live note-taking synced back to the matter canvas',
            ],
          },
          {
            title: 'Appeal drafting',
            items: [
              'Automatic identification of appealable issues and limitation clocks',
              'Draft SLPs / appeals referencing trial contradictions and evidence gaps',
            ],
          },
        ],
      },
      {
        title: 'Litigation example snippets',
        cards: [
          {
            badge: 'Bail draft sample',
            title: 'Pre-filled bail application',
            description: 'Populate facts, grounds, and precedent citations mapped to CrPC §§ 437/438 with deviation alerts.',
            items: ['Auto-insert cause title, parties, and case diary references', 'Instant redlines comparing partner edits'],
          },
          {
            badge: 'Contradiction table',
            title: 'Witness vs documentary evidence',
            description: 'Side-by-side comparison of deposition, FIR, and charge-sheet statements with loophole callouts.',
            items: ['Highlight contradictions by issue + paragraph', 'Export to PDF or chronology decks'],
          },
          {
            badge: 'Evidence timeline',
            title: 'Event-linked timeline',
            description: 'Timeline view linking exhibits, testimony, and procedural history for judge-ready briefs.',
          },
          {
            badge: 'Bundle summary',
            title: 'Digest of pleadings & annexures',
            description: 'Summaries of written submissions, annexures, and pending interrogatories with risk flags.',
          },
        ],
      },
      {
        title: 'Measured outcomes',
        items: [
          '50% faster bail and WS drafts with auto-citations',
          '15+ contradictions surfaced per bundle on average',
          'Chronology exports generated in minutes instead of days',
          'Mobile hearing mode adopted across chambers for real-time referencing',
        ],
      },
    ],
  },
  solutionsCorporateLaw: {
    path: '/solutions/corporate-law',
    hero: {
      title: 'AI that accelerates deals, diligence, and governance',
      description: 'From diligence to board governance, Naya keeps every corporate workflow automated, auditable, and aligned to your firm’s playbooks.',
      ctas: [
        { label: 'Explore Corporate Law', href: '#contact' },
        { label: 'See corporate demo', href: '#contact' },
      ],
    },
    sections: [
      {
        title: 'M&A diligence cockpit',
        description: 'Ingest entire data rooms, surface key clauses, and generate deviation + risk reports in minutes.',
        items: [
          'Bulk upload VDR folders, convert scans, and OCR instantly',
          'Clause extraction for change of control, indemnity, MFN, escrow, reps & warranties',
          'Deviation heatmap tying issues to buyer / seller templates',
        ],
        image: {
          src: '/assets/solutions/mna-diligence.png',
          alt: 'M&A diligence workspace',
          caption: 'Clause extraction, issues, and deviation scoring with export-ready diligence reports.',
        },
      },
      {
        title: 'Entity & governance operations',
        columns: [
          {
            title: 'Entity management',
            description: 'Track every subsidiary, compliance obligation, and statutory register.',
            items: [
              'Auto-updated registers (shareholder, director, beneficial ownership)',
              'Board calendar with reminders for approvals, filings, and disclosures',
              'Entity health dashboards with risk scoring and redline alerts',
            ],
          },
          {
            title: 'Board governance & resolutions',
            description: 'Generate and circulate resolutions in minutes.',
            items: [
              'Template-driven board and shareholder resolutions with clause suggestions',
              'Meeting minutes drafted from agenda + action items',
              'Cap table validation tied to filings and post-closing adjustments',
            ],
          },
        ],
        image: {
          src: '/assets/solutions/entity-management.png',
          alt: 'Entity management dashboard',
          caption: 'Calendar, registers, and approval workflows aligned to governance playbooks.',
        },
      },
      {
        title: 'Corporate drafting examples',
        cards: [
          {
            badge: 'Shareholder agreement',
            title: 'Redlines with deviation summary',
            description: 'Instantly highlight deviations in SHA / SSA clauses and map them to playbook-approved language.',
            items: [
              'Clause-by-clause deviation scoring (CoC, indemnity, exit rights)',
              'Auto-generate partner notes with fallback positions',
            ],
          },
          {
            badge: 'Board resolution',
            title: 'Draft + approval packet',
            description: 'Resolution drafted, annotated, and circulated with e-signature-ready PDFs.',
            items: [
              'Pull prior resolutions for quick reference',
              'Attach supporting docs and link to entity register updates',
            ],
          },
          {
            badge: 'Clause deviation summary',
            title: 'Heatmap & downstream actions',
            description: 'Summaries showing owners, status, and mitigation for every deviation.',
          },
        ],
      },
      {
        title: 'Corporate playbook intelligence',
        description: 'Naya enforces your firm’s preferred language across deals, contracts, and governance documents.',
        items: [
          'Upload golden templates and fallback guidance for every contract type',
          'AI drafting draws from your approved clauses first, then Indian legal corpora',
          'Deviation reports trigger partner approvals before sending to counterparties',
        ],
      },
      {
        title: 'Measured outcomes',
        items: [
          '70% faster diligence reports with automated clause extraction',
          'Entity register accuracy maintained without manual spreadsheets',
          'Redlines backed by firm playbooks, reducing partner review cycles',
          'Audit-ready governance history for every entity and resolution',
        ],
      },
    ],
  },
  solutionsBanking: {
    path: '/solutions/banking',
    hero: {
      title: 'Banking legal workflows — automated with precision',
      description: 'From RBI / SEBI filings to NBFC recovery workflows, Naya streamlines every regulatory deliverable with audit trails and risk analytics.',
      ctas: [
        { label: 'Explore Banking AI', href: '#contact' },
        { label: 'Book a banking demo', href: '#contact' },
      ],
    },
    sections: [
      {
        title: 'RBI / SEBI filing assistant',
        description: 'Upload circulars, map obligations, and produce filings with one-click exports.',
        items: [
          'Auto-detect applicable circulars with clause-level summaries',
          'Pre-fill compliance forms (RBI, SEBI, IRDAI) with contextual references',
          'Deadline tracker with reminders and escalation handling',
        ],
        image: {
          src: '/assets/solutions/banking-filing.png',
          alt: 'RBI / SEBI filing workspace',
          caption: 'Regulatory filings with cited circulars, responsible owners, and submission status.',
        },
      },
      {
        title: 'Risk heatmap & compliance scoring',
        description: 'Visualize obligations, document deviations, and risk severity at a glance.',
        items: [
          'Heatmap showing green / amber / red risks across business lines',
          'Contract obligation tracker for covenants, caps, and triggers',
          'Compliance scorecards exportable to management dashboards',
        ],
        image: {
          src: '/assets/solutions/risk-heatmap.png',
          alt: 'Risk heatmap dashboard',
          caption: 'Combine clause deviations, covenant breaches, and filing status in one dashboard.',
        },
      },
      {
        title: 'NBFC workflow automation',
        cards: [
          {
            title: 'Loan agreement drafting',
            items: [
              'AI-prepared loan documents with covenants, security, and conditions precedent',
              'Deviation alerts when clauses fall outside policy thresholds',
            ],
          },
          {
            title: 'Recovery & SARFAESI support',
            items: [
              'Generate notices, affidavits, and petitions with asset + borrower data',
              'Timeline tracker for SARFAESI steps and DRT filings',
            ],
          },
          {
            title: 'Compliance & KYC/AML',
            items: [
              'Extract obligations from RBI Master Directions and DPSS circulars',
              'Auto-build KYC/AML checklists with owner assignments',
            ],
          },
        ],
      },
      {
        title: 'Measured outcomes',
        items: [
          'Regulatory forms produced 60% faster with linked citations',
          'Real-time visibility into risk status across portfolios',
          'Standardized NBFC agreements & recovery notices aligned to policy',
          'Audit-ready trail for every filing, review, and approval',
        ],
      },
    ],
  },
  solutionsTaxCompliance: {
    path: '/solutions/tax-compliance',
    hero: {
      title: 'Tax litigation and compliance made effortless',
      description: 'Answer GST, income tax, and DPDP obligations with AI-generated drafts, timelines, and compliance calendars.',
      ctas: [
        { label: 'Analyze Tax Documents', href: '#contact' },
        { label: 'Schedule tax demo', href: '#contact' },
      ],
    },
    sections: [
      {
        title: 'GST notice → reply generator',
        description: 'Convert show-cause notices into structured replies with extracted issues, timelines, and annexures.',
        items: [
          'Upload SCN / adjudication orders to auto-extract issues, parties, tax periods, and exposure',
          'Generate reply drafts referencing GST Act provisions, circulars, and case law',
          'Timeline view with due dates, escalation paths, and pending evidence',
        ],
        image: {
          src: '/assets/solutions/tax-notice.png',
          alt: 'GST notice workflow',
          caption: 'Issue summary, timeline, and draft reply preview in one canvas.',
        },
      },
      {
        title: 'DPDP compliance automation',
        description: 'Policy generation, data mapping, and DPIA automation tuned for India’s DPDP Act.',
        items: [
          'Generate privacy policies, consent flows, and notices aligned to DPDP / GDPR',
          'Data mapping questionnaires auto-linked to business processes',
          'DPIA templates with risk scoring and mitigation tracking',
        ],
        image: {
          src: '/assets/solutions/dpdp-dashboard.png',
          alt: 'DPDP compliance dashboard',
          caption: 'Track DPIAs, policy drafts, and approvals with audit logs.',
        },
      },
      {
        title: 'Regulatory calendar & reminders',
        description: 'Centralized calendar automatically populated from GST, income tax, ROC, and RBI obligations.',
        cards: [
          {
            title: 'GST & indirect tax',
            items: ['Return filings, SCN replies, GST audit schedules', 'Escalation alerts for overdue actions'],
          },
          {
            title: 'Income tax & ITAT',
            items: ['Assessment replies, appeals, rectification petitions', 'Automated document packets for counsel'],
          },
          {
            title: 'ROC / RBI filings',
            items: ['Company law filings, FEMA declarations, DPDP updates', 'Owner assignment with approval flow'],
          },
        ],
      },
      {
        title: 'Litigation preparation',
        cards: [
          {
            badge: 'GST litigation',
            title: 'Issue & contradiction summary',
            description: 'Summaries for GSTAT / High Court matters with issue trees, facts, and contradictions.',
          },
          {
            badge: 'Income tax appeals',
            title: 'ITAT/HC briefing decks',
            description: 'Auto-generated briefs covering grounds, evidence relied upon, and precedent support.',
          },
        ],
      },
      {
        title: 'Measured outcomes',
        items: [
          'Notice replies drafted in hours with citation-linked arguments',
          'DPDP policies deployed with full audit logs',
          'Regulatory calendar adoption eliminates missed filings',
          'Briefs for GST / ITAT litigation generated from case files instantly',
        ],
      },
    ],
  },
  solutionsInHouse: {
    path: '/solutions/in-house',
    hero: {
      title: 'Your enterprise legal operating system',
      description: 'Automate intake, contracting, approvals, and governance for business stakeholders without compromising control.',
      ctas: [
        { label: 'For In-House Teams', href: '#contact' },
        { label: 'See intake demo', href: '#contact' },
      ],
    },
    sections: [
      {
        title: 'Intake → approval automation',
        description: 'Business users submit requests, Naya drafts responses, and approvals stay governed in one place.',
        items: [
          'Custom forms for NDAs, contracts, legal queries, and investigations',
          'Auto-drafted responses / contracts with clause-level notes',
          'Approval chains with escalations, SLAs, and audit trails',
        ],
        image: {
          src: '/assets/solutions/inhouse-intake.png',
          alt: 'Intake automation screenshot',
          caption: 'Employee intake, legal review, draft generation, and approvals tracked in a single view.',
        },
      },
      {
        title: 'Contract lifecycle management',
        cards: [
          {
            title: 'AI-first contracting',
            items: [
              'Draft NDAs, MSAs, SOWs, vendor agreements with firm templates',
              'Deviation summaries for faster legal + business approvals',
            ],
          },
          {
            title: 'Obligation tracker',
            items: [
              'Auto-extract obligations, renewal dates, and service levels',
              'Assign owners and reminders with dashboards for compliance',
            ],
          },
          {
            title: 'Renewals & amendments',
            items: [
              'Renewal pipeline with playbooked negotiation positions',
              'Linked history of comments, redlines, and approvals',
            ],
          },
        ],
      },
      {
        title: 'Policy & governance',
        columns: [
          {
            title: 'Policy drafting studio',
            items: [
              'Generate policies (DPDP, AML, HR) with tracked guidance',
              'Collaborate with stakeholders via comments and approvals',
            ],
          },
          {
            title: 'Board & compliance governance',
            items: [
              'Board packs, resolutions, and minutes auto-generated',
              'Compliance mapping for obligations across jurisdictions',
            ],
          },
        ],
      },
      {
        title: 'Reporting & analytics',
        description: 'Give legal leadership real-time visibility into workload, risk, and SLAs.',
        image: {
          src: '/assets/solutions/inhouse-reporting.png',
          alt: 'In-house reporting dashboard',
          caption: 'SLA compliance, contract volumes, and risk distribution dashboards.',
        },
        items: [
          'SLA dashboards by matter type, business unit, and owner',
          'Risk heatmaps with drill-down into contracts or disputes',
          'Productivity reports for intake, reviews, and approvals',
        ],
      },
      {
        title: 'Measured outcomes',
        items: [
          'Self-service intake reduces email tickets by 60%',
          'Negotiations accelerate with AI redlines and playbooks',
          'Policies published with auditable version history',
          'Executives see SLA + risk insights without manual decks',
        ],
      },
    ],
  },
  solutionsLawFirms: {
    path: '/solutions/law-firms',
    hero: {
      title: 'Grow your practice with AI that scales your team',
      description: 'Give partners, associates, and paralegals AI copilots that deliver research, drafting, and collaboration speed-ups across matters.',
      ctas: [
        { label: 'For Law Firms', href: '#contact' },
        { label: 'See firm workspace', href: '#contact' },
      ],
    },
    sections: [
      {
        title: 'Collaboration workspace',
        description: 'Unify research, drafting, comments, and timelines in one AI-assisted workspace for every matter.',
        image: {
          src: '/assets/solutions/lawfirm-workspace.png',
          alt: 'Law firm collaboration workspace',
          caption: 'Shared research, drafts, and timelines with role-based access and AI summaries.',
        },
        items: [
          'Real-time comments and versioning across teams',
          'Research + drafting view with citations and bundles side-by-side',
          'Client-ready updates with automatic formatting',
        ],
      },
      {
        title: 'Personas we support',
        cards: [
          {
            badge: 'Partner',
            title: 'Strategy & oversight',
            items: [
              'One-click briefings with risk, status, and next actions',
              'Playbook enforcement before drafts reach clients',
            ],
          },
          {
            badge: 'Associate',
            title: 'Drafting & research speed',
            items: [
              'AI-generated drafts with paragraph citations',
              'Chronology + bundle comparisons to prep for hearings',
            ],
          },
          {
            badge: 'Paralegal',
            title: 'Execution & coordination',
            items: [
              'Automated formatting, pagination, and bundle assembly',
              'Task lists and intake workflows tied to evidence',
            ],
          },
        ],
      },
      {
        title: 'Performance metrics law firms track',
        cards: [
          {
            title: 'Drafting speed',
            description: '50–70% faster motion, petition, and contract drafts with AI starters + playbook clause insertions.',
          },
          {
            title: 'Research accuracy',
            description: 'Paragraph-linked citations from SC/HC judgments plus private precedent vaults.',
          },
          {
            title: 'Cost & SLA efficiency',
            description: 'Measure throughput per associate, SLA adherence, and client-facing turnaround times.',
          },
        ],
        image: {
          src: '/assets/solutions/lawfirm-metrics.png',
          alt: 'Law firm performance metrics',
          caption: 'Dashboard for drafting speed, research accuracy, and SLA compliance.',
        },
      },
      {
        title: 'AI-enabled firm playbooks',
        items: [
          'Upload firm playbooks for civil, criminal, corporate, or regulatory practices',
          'AI drafting defaults to your preferred clauses and annotations',
          'Deviation approvals ensure partner sign-off before delivery',
        ],
      },
      {
        title: 'Measured outcomes',
        items: [
          'Cross-team collaboration without context loss',
          'AI playbooks reduce review loops and rework',
          'Associates focus on judgment + strategy, not formatting or lookup work',
        ],
      },
    ],
  },
  industryLitigation: {
    path: '/industries/litigation',
    hero: {
      title: 'Built for litigators. Trusted for accuracy.',
      ctas: [{ label: 'Start Litigation AI', href: '#contact' }],
    },
    sections: [
      {
        title: 'What You Can Do',
        items: [
          'Analyze FIRs, complaints, and petitions',
          'Extract issues, parties, and contradictions',
          'Automatically generate arguments',
          'Draft petitions, written statements, and affidavits',
          'Build chronology',
          'Review bundles and evidence',
        ],
      },
    ],
  },
  industryMA: {
    path: '/industries/ma',
    hero: {
      title: 'Deal-grade diligence, automated end-to-end',
      ctas: [{ label: 'Run M&A Diligence', href: '#contact' }],
    },
    sections: [
      {
        title: 'Capabilities',
        items: [
          'Bulk VDR ingestion',
          'Clause extraction',
          'Deviation versus golden standard',
          'Risk heatmaps',
          'Summary reports',
          'Term sheet generation',
        ],
      },
    ],
  },
  industryTax: {
    path: '/industries/tax',
    hero: {
      title: 'Interpret rulings and reply to notices with confidence',
      ctas: [{ label: 'Analyze Tax Order', href: '#contact' }],
    },
    sections: [
      {
        title: 'Capabilities',
        items: [
          'Analyze rulings',
          'Draft replies',
          'Extract deadlines',
          'Create compliance checklists',
          'Identify factual gaps',
          'GST and income tax support',
        ],
      },
    ],
  },
  industryBanking: {
    path: '/industries/banking',
    hero: {
      title: 'AI support for banking legal and regulatory teams',
      ctas: [{ label: 'Explore Banking Tools', href: '#contact' }],
    },
    sections: [
      {
        title: 'Capabilities',
        items: [
          'RBI and SEBI circular analysis',
          'Filing automation',
          'Clause extraction',
          'Contract review',
          'Generate loan agreements',
          'Compliance dashboards',
        ],
      },
    ],
  },
  industryEmploymentHR: {
    path: '/industries/employment-hr',
    hero: {
      title: 'From offer letters to HR policies — automated',
      ctas: [{ label: 'Create HR Documents', href: '#contact' }],
    },
    sections: [
      {
        title: 'Capabilities',
        items: [
          'Offer letters',
          'NDAs',
          'HR policies',
          'Employment contracts',
          'Misconduct notices',
          'Internal complaints summary',
        ],
      },
    ],
  },
  industryCorporateCompliance: {
    path: '/industries/corporate-compliance',
    hero: {
      title: 'Governance, tracking, and obligations — simplified',
      ctas: [{ label: 'Automate Compliance', href: '#contact' }],
    },
    sections: [
      {
        title: 'Capabilities',
        items: [
          'Entity management',
          'Board meeting minutes',
          'Resolution drafting',
          'Obligations calendar',
          'Compliance monitoring',
          'Policy updates',
        ],
      },
    ],
  },
  resources: {
    path: '/resources',
    hero: {
      title: 'Knowledge to empower legal teams',
    },
    sections: [
      {
        title: 'What You’ll Find',
        items: ['Blogs', 'Guides', 'Webinars', 'Templates', 'Case Studies', 'Product Updates'],
      },
    ],
  },
  security: {
    path: '/security',
    hero: {
      title: 'Security, governance, and compliance — by design',
    },
    sections: [
      {
        title: 'Standards and Controls',
        items: [
          'ISO 27001',
          'SOC 2',
          'ISO 42001',
          'DPDP and GDPR compliance',
          'Encryption',
          'Data residency',
          'Audit logs',
          'AI governance',
        ],
      },
    ],
  },
  pricing: {
    path: '/pricing',
    hero: {
      title: 'Simple, transparent pricing',
    },
    sections: [
      {
        title: 'Free Tier',
        description: 'For individuals.',
        items: ['Public chat', '1 file analysis', 'Basic research'],
      },
      {
        title: 'Pro Tier',
        description: 'For solo lawyers and consultants.',
        items: ['Unlimited research', 'Drafting', 'Review', 'Case Hub', '50 files per month'],
      },
      {
        title: 'Enterprise Tier',
        description: 'For firms and companies.',
        items: [
          'Dedicated models',
          'Private vault',
          'SSO and SCIM',
          'Compliance suite',
          'Admin console',
          'Custom integrations',
          'SLA support',
        ],
      },
    ],
  },
};

export const megaMenuConfig = [
  {
    label: 'Product',
    items: [
      {
        label: 'Overview',
        description: 'Unified AI workspace for research, drafting, and review.',
        path: pageContent.productOverview.path,
      },
      {
        label: 'Workflows',
        description: 'Pre-built legal flows for fast, compliant execution.',
        path: pageContent.productWorkflows.path,
      },
      {
        label: 'Word Add-In',
        description: 'Draft and review inside Word with AI-powered assistance.',
        path: pageContent.productWordAddIn.path,
      },
      {
        label: 'Legal Research',
        description: 'Search judgments and statutes with paragraph-level citations.',
        path: pageContent.productLegalResearch.path,
      },
    ],
    highlight: {
      eyebrow: 'Product spotlight',
      title: 'Case Hub',
      description: 'Manage matters, deadlines, evidence, and client collaboration in one governed workspace.',
      ctaLabel: 'Learn more',
      ctaPath: pageContent.productOverview.path,
    },
  },
  {
    label: 'Solutions',
    headerLabel: 'Legal Workflows',
    items: [
      {
        label: 'Litigation',
        description: 'Litigation — Summaries, issues, arguments, chronology.',
        path: pageContent.solutionsLitigation.path,
      },
      {
        label: 'Corporate Law',
        description: 'Corporate Law — Diligence, redlining, board governance.',
        path: pageContent.solutionsCorporateLaw.path,
      },
      {
        label: 'Banking',
        description: 'Banking — Filings, circular analysis, risk dashboards.',
        path: pageContent.solutionsBanking.path,
      },
      {
        label: 'Tax & Compliance',
        description: 'Tax & Compliance — Replies, obligations, compliance checklists.',
        path: pageContent.solutionsTaxCompliance.path,
      },
      {
        label: 'In-House Teams',
        description: 'In-House Teams — Intake, approvals, contracts, policies.',
        path: pageContent.solutionsInHouse.path,
      },
      {
        label: 'Law Firms',
        description: 'Law Firms — Scale drafting, research, collaboration.',
        path: pageContent.solutionsLawFirms.path,
      },
    ],
    highlight: {
      eyebrow: 'Featured Capability',
      title: 'Litigation Intelligence',
      description: 'Upload a case bundle and receive automated summaries, loopholes, and draft-ready arguments.',
      ctaLabel: 'Try litigation workflow →',
      ctaPath: pageContent.solutionsLitigation.path,
    },
  },
  {
    label: 'Industries',
    headerLabel: 'Teams & Practice Areas',
    items: [
      {
        label: 'Litigation',
        description: 'Litigation — Purpose-built for trial teams & chambers.',
        path: pageContent.industryLitigation.path,
      },
      {
        label: 'M&A',
        description: 'M&A — Bulk VDR ingestion with clause extraction & heatmaps.',
        path: pageContent.industryMA.path,
      },
      {
        label: 'Tax',
        description: 'Tax — Interpret rulings, draft replies, track obligations.',
        path: pageContent.industryTax.path,
      },
      {
        label: 'Banking',
        description: 'Banking — Compliance dashboards & regulatory filings.',
        path: pageContent.industryBanking.path,
      },
      {
        label: 'Employment & HR',
        description: 'Employment & HR — Contracts, NDAs, and policy workflows.',
        path: pageContent.industryEmploymentHR.path,
      },
      {
        label: 'Corporate Compliance',
        description: 'Corporate Compliance — Entity governance & board monitoring.',
        path: pageContent.industryCorporateCompliance.path,
      },
    ],
    highlight: {
      eyebrow: 'Teams & Practice Areas',
      title: 'Sector Playbooks',
      description: 'Download tailored playbooks that show how each practice area uses Naya AI end-to-end.',
      ctaLabel: 'View playbooks →',
      ctaPath: pageContent.industryLitigation.path,
    },
  },
  {
    label: 'Resources',
    items: [
      {
        label: 'Blogs',
        description: 'Insights on AI for legal teams and product updates.',
        path: `${pageContent.resources.path}#blogs`,
      },
      {
        label: 'Guides',
        description: 'Step-by-step manuals for critical legal workflows.',
        path: `${pageContent.resources.path}#guides`,
      },
      {
        label: 'Templates',
        description: 'Ready-to-use notices, pleadings, policies, and more.',
        path: `${pageContent.resources.path}#templates`,
      },
      {
        label: 'Case Studies',
        description: 'See how top firms and enterprises scale with Naya.',
        path: `${pageContent.resources.path}#case-studies`,
      },
      {
        label: 'Webinars',
        description: 'Live and on-demand sessions with legal and product experts.',
        path: `${pageContent.resources.path}#webinars`,
      },
      {
        label: 'Product Updates',
        description: 'Release notes and feature spotlights each month.',
        path: `${pageContent.resources.path}#product-updates`,
      },
    ],
    highlight: {
      eyebrow: 'New release',
      title: 'Legal Insights Engine',
      description: 'Watch how Naya delivers insight-packed briefs with paragraph-level citations in under two minutes.',
      ctaLabel: 'Watch video',
      ctaPath: pageContent.resources.path,
    },
  },
];

export const simpleNavLinks = [
  {
    label: 'Security',
    path: pageContent.security.path,
  },
  {
    label: 'Pricing',
    path: pageContent.pricing.path,
  },
];

// ---------------------------------------------------------------------------
// CASE STUDIES
// ---------------------------------------------------------------------------
// Detailed content for each project's case study page (/case-study/:slug).
// Each `slug` must match a project `slug` in `projects.ts`.
// The `mockup` field selects which dashboard mockup component renders in the
// "preview" area (see src/components/mockups/). Add new mockup keys there.
// ---------------------------------------------------------------------------

export type MockupKey =
  | "search-fund-crm"
  | "addback-scrubber"
  | "cre-tracker"
  | "riskledger"
  | "post-trade"
  | "internship-tracker";

export interface CaseStudy {
  slug: string;
  /** Mockup component key for the dashboard preview area. */
  mockup: MockupKey;
  overview: string;
  businessProblem: string;
  audience: string;
  whyMessy: string;
  whatIBuilt: string;
  /** Core feature cards: title + short description. */
  features: { title: string; description: string }[];
  conceptsApplied: string[];
  exampleUseCase: string;
  employerRelevance: string;
  improveNext: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "search-fund-sourcing-crm",
    mockup: "search-fund-crm",
    overview:
      "A sourcing CRM built as a prototype to structure proprietary deal flow for a search fund or independent acquirer. It turns a scattered list of companies, brokers, and owners into a single pipeline an operator can review on a weekly cadence.",
    businessProblem:
      "Proprietary sourcing generates a constant stream of fragmented inputs: a company name from a broker call, an owner referral, an industry list, a half-finished email thread. Without structure, promising targets go cold simply because nobody remembered to follow up.",
    audience:
      "Search fund principals, acquisition entrepreneurs, and the analysts who support proprietary sourcing and business development.",
    whyMessy:
      "Deal data arrives from many channels and never in the same format. Targets sit at different stages, brokers represent multiple companies, and follow-up timing matters more than volume. Spreadsheets lose this nuance quickly.",
    whatIBuilt:
      "I designed the CRM around the sourcing loop: capture a target, attach the broker and owner contacts, tag it by industry / geography / stage, log outreach, and schedule the next touch. The interface is built to be scanned in a weekly pipeline review rather than read row by row.",
    features: [
      { title: "Target records", description: "SMB acquisition targets with industry, revenue band, and acquisition-criteria fit." },
      { title: "Contact graph", description: "Links each target to its broker and owner so relationships stay visible." },
      { title: "Stage pipeline", description: "Deal-stage chips from sourced → contacted → in conversation → diligence." },
      { title: "Follow-up queue", description: "Surfaces overdue touches so warm targets do not go cold." },
    ],
    conceptsApplied: [
      "Proprietary sourcing",
      "CRM workflows",
      "SMB acquisition criteria",
      "Pipeline management",
      "Deal origination",
    ],
    exampleUseCase:
      "During a weekly review, an operator opens the pipeline, filters to targets in the 'contacted' stage that have had no touch in 14 days, reviews the deal notes, and queues a second outreach to three owners and one broker — without re-reading their entire inbox.",
    employerRelevance:
      "Shows I understand how business development and search fund sourcing workflows actually operate, and that I can organize fragmented market data into a usable pipeline.",
    improveNext: [
      "Add a lightweight scoring model that ranks targets against stated acquisition criteria.",
      "Support importing broker lists from CSV so a sourcing sprint can be loaded in minutes.",
      "Add a saved-view system for different industries or geographies.",
    ],
  },
  {
    slug: "smb-due-diligence-addback-scrubber",
    mockup: "addback-scrubber",
    overview:
      "A diligence prototype designed to demonstrate the unglamorous financial cleanup that precedes any small-business valuation: normalizing a messy P&L and reasoning about which seller add-backs are defensible.",
    businessProblem:
      "Owner-operated financials blend the business and the owner's lifestyle. Personal vehicles, family payroll, one-time legal fees, and discretionary travel all sit inside the P&L. Before anyone can talk about a multiple, those line items have to be understood.",
    audience:
      "Junior diligence analysts, search fund acquirers, small-business brokers, and accounting staff supporting M&A screening.",
    whyMessy:
      "There is rarely a clean GAAP statement. Categories are inconsistent, some add-backs are legitimate and some are aggressive, and the difference is a matter of judgment that has to be documented for an investor or lender.",
    whatIBuilt:
      "I structured the tool around the normalization workflow: load P&L line items, flag candidates for add-back, classify each as owner compensation / discretionary / one-time, and roll the adjustments into an adjusted profitability summary. A risk panel calls out add-backs that a buyer would likely challenge.",
    features: [
      { title: "P&L input table", description: "Line items with reported amounts and an editable normalization column." },
      { title: "Add-back classifier", description: "Tags each adjustment as owner comp, discretionary, or one-time." },
      { title: "Adjusted summary", description: "Conceptual adjusted profitability / adjusted EBITDA roll-up." },
      { title: "Risk flag panel", description: "Highlights aggressive or poorly supported add-backs for review." },
    ],
    conceptsApplied: [
      "P&L normalization",
      "Seller add-backs",
      "Adjusted EBITDA",
      "Quality of earnings",
      "Accounting judgment",
    ],
    exampleUseCase:
      "An analyst loads a $1.4M-revenue HVAC company's P&L, marks the owner's above-market salary and a one-time roof repair as add-backs, leaves a questionable 'consulting' line flagged for the partner, and exports a clean adjusted-EBITDA summary for the broker conversation.",
    employerRelevance:
      "Shows I can think through the unglamorous but important financial cleanup work that analysts do in small-business acquisitions, accounting, and diligence workflows.",
    improveNext: [
      "Add supporting-documentation prompts so every add-back has an evidence note.",
      "Model a sensitivity view showing valuation impact at different multiples.",
      "Add a reviewer sign-off state to mirror a real diligence approval chain.",
    ],
  },
  {
    slug: "sf-cre-lease-expiry-tracker",
    mockup: "cre-tracker",
    overview:
      "A commercial real estate prospecting tracker modeled around the San Francisco office market, built to demonstrate how market conditions can be turned into a structured outreach pipeline.",
    businessProblem:
      "In a high-vacancy office market, the most valuable signal is timing: which tenants are approaching a lease rollover and may relocate, downsize, or consolidate. That signal is buried across listings, news, and broker knowledge.",
    audience:
      "Commercial real estate brokers, tenant-rep teams, and market researchers building B2B prospecting lists.",
    whyMessy:
      "Lease data is fragmented and partly private. Submarket dynamics shift, and 'flight risk' is a judgment call that combines expiry timing, headcount trends, and space efficiency — not a single field.",
    whatIBuilt:
      "I structured the tracker around the prospecting research loop: record a tenant and its building, capture lease expiry timing, score relocation / downsizing risk, and prioritize outreach. A rollover timeline makes it easy to see who is 'in the window.'",
    features: [
      { title: "Tenant list", description: "Companies with building, submarket, and approximate occupied space." },
      { title: "Lease expiry timeline", description: "Visual rollover window so near-term opportunities stand out." },
      { title: "Risk scoring", description: "Relocation / downsizing risk score combining timing and signals." },
      { title: "Outreach notes", description: "Broker follow-up status and prioritization for the next call list." },
    ],
    conceptsApplied: [
      "CRE prospecting",
      "Lease rollover",
      "Office vacancy",
      "Tenant risk",
      "B2B lead generation",
    ],
    exampleUseCase:
      "A tenant-rep broker filters to SoMa tenants with leases expiring in the next 9 months and a high downsizing score, then builds a prioritized call list of eight companies most likely to be evaluating their footprint.",
    employerRelevance:
      "Shows I can turn market conditions into a practical prospecting system and build structured research workflows for business development teams.",
    improveNext: [
      "Add a configurable scoring model so each brokerage can weight its own signals.",
      "Layer in submarket vacancy benchmarks for context on each tenant.",
      "Add a 'last verified' field so research freshness is visible.",
    ],
  },
  {
    slug: "riskledger-operational-risk",
    mockup: "riskledger",
    overview:
      "A lightweight operational risk register built to demonstrate how documentation, ownership, and a repeatable review cadence turn informal risk tracking into a usable internal-controls workflow.",
    businessProblem:
      "Small companies carry real operational, vendor, and compliance risks but track them informally across spreadsheets, Slack, and memory. Without an owner and a status, risks are noticed but never managed.",
    audience:
      "Operations leads, finance and compliance staff, and founders who need basic risk visibility without enterprise GRC software.",
    whyMessy:
      "Risks differ wildly in type and severity, ownership is often unclear, and mitigation steps live in people's heads. The hard part is not listing risks — it is keeping the list current and accountable.",
    whatIBuilt:
      "I structured RiskLedger around the risk-review loop: log a risk, categorize it, score severity and likelihood, assign an owner, set a status, and record mitigation notes. A severity matrix gives management a one-glance view of where attention is needed.",
    features: [
      { title: "Risk register", description: "Central table of risk items with type, owner, and status." },
      { title: "Severity matrix", description: "Likelihood × impact grid that prioritizes the register visually." },
      { title: "Ownership & status", description: "Every risk has an accountable owner and an open / mitigating / closed state." },
      { title: "Mitigation notes", description: "Documented steps so reviews build on prior decisions." },
    ],
    conceptsApplied: [
      "Operational risk",
      "Internal controls",
      "Vendor risk",
      "Risk scoring",
      "Management reporting",
    ],
    exampleUseCase:
      "In a monthly ops review, the team sorts the register by severity, confirms the two high-likelihood / high-impact items have named owners and active mitigation, and closes a vendor risk that was resolved by signing a backup supplier.",
    employerRelevance:
      "Shows I understand how documentation, ownership, and repeatable review workflows support better operations and controls.",
    improveNext: [
      "Add a residual-risk score to show severity after mitigation.",
      "Add review reminders so each risk has a next-review date.",
      "Add a simple audit log of status changes for accountability.",
    ],
  },
  {
    slug: "post-trade-analytics-platform",
    mockup: "post-trade",
    overview:
      "A trading-journal analytics dashboard built to demonstrate metric thinking: turning a raw trade log into expectancy, drawdown, and setup-level performance instead of a feeling about recent wins.",
    businessProblem:
      "Student and retail traders evaluate themselves by their last few trades. The information needed to improve — which setups are actually profitable, where behavioral mistakes cluster — only appears when the log is analyzed in aggregate.",
    audience:
      "Self-directed traders and anyone who needs to translate raw activity logs into decision-useful performance metrics.",
    whyMessy:
      "Trade logs are inconsistent, mix setups and timeframes, and rarely separate process from outcome. A single big win can mask a negative-expectancy strategy.",
    whatIBuilt:
      "I structured the dashboard around performance attribution: ingest a trade log, compute win rate / expectancy / net profit / max drawdown, break results down by setup, and tag recurring behavioral mistakes so the review points at a process change, not just a P&L number.",
    features: [
      { title: "KPI cards", description: "Win rate, expectancy, net profit, and max drawdown at a glance." },
      { title: "Equity curve", description: "Cumulative performance view to spot drawdown periods." },
      { title: "Setup performance", description: "Per-setup expectancy so the edge (or lack of one) is visible." },
      { title: "Mistake breakdown", description: "Tags behavioral errors like early exits or oversized risk." },
    ],
    conceptsApplied: [
      "KPI analysis",
      "Expectancy",
      "Risk / reward",
      "Drawdown",
      "Performance attribution",
    ],
    exampleUseCase:
      "After a losing month, a trader reviews the dashboard and finds that their breakout setup has positive expectancy while their 'revenge trades' account for most of the drawdown — pointing to a behavioral rule rather than a new strategy.",
    employerRelevance:
      "Shows I can think in metrics, build dashboards, and translate raw activity into decision-useful performance insights.",
    improveNext: [
      "Add benchmarking against a simple baseline strategy.",
      "Add filters for timeframe and instrument to slice performance.",
      "Add a weekly review summary that flags the largest mistake category.",
    ],
  },
  {
    slug: "internship-lead-tracker",
    mockup: "internship-tracker",
    overview:
      "A personal internship sourcing system built to demonstrate CRM-style thinking applied outside of sales: treating a non-target job search as a structured pipeline with sourcing, outreach, and follow-up.",
    businessProblem:
      "Landing internships without a target-school pipeline means generating your own leads and following up systematically. Most students scatter this across job boards, notes apps, and memory — and warm leads die from neglect.",
    audience:
      "Students and early-career job seekers running a self-directed, outreach-heavy search — and a demonstration of sales-ops thinking for employers.",
    whyMessy:
      "Opportunities come from postings, referrals, and cold outreach simultaneously. Each lead has a different status, contact, and next step, and the search only works if follow-up is disciplined.",
    whatIBuilt:
      "I structured the tracker as a recruiting funnel: capture target companies and postings, attach the recruiter or hiring manager, log cold-email and application status, score role fit, and surface the next follow-up. It enforces pipeline hygiene over a weekly job-search cadence.",
    features: [
      { title: "Company pipeline", description: "Target companies and live postings with stage and priority." },
      { title: "Outreach status", description: "Cold-email and application states from sent → replied → interview." },
      { title: "Role fit score", description: "Rates each lead by realism and alignment to focus the week." },
      { title: "Follow-up reminders", description: "Surfaces overdue touches so warm leads do not go cold." },
    ],
    conceptsApplied: [
      "CRM management",
      "Lead sourcing",
      "Funnel tracking",
      "Pipeline hygiene",
      "Workflow design",
    ],
    exampleUseCase:
      "On a Sunday planning session, the student filters to high-fit leads with no reply after 7 days, sends four follow-ups, and adds three new fintech-ops postings sourced that week — keeping the funnel full and current.",
    employerRelevance:
      "Shows I can build structured systems for messy operational processes and use CRM-style thinking outside of traditional sales.",
    improveNext: [
      "Add conversion analytics across the funnel (reply rate, interview rate).",
      "Add templated outreach snippets tied to role type.",
      "Add a weekly target (e.g., new leads sourced) to keep the search consistent.",
    ],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);

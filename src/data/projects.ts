// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
// This file is the single source of truth for the project cards shown in the
// homepage grid. To add, remove, or edit a project, change the objects below.
// Each `slug` must match a case study `slug` in `caseStudies.ts` so the
// "View Case Study" link resolves to the right detail page.
// ---------------------------------------------------------------------------

export type ProjectStatus = "Built" | "Prototype" | "In Progress";

export interface Project {
  /** URL-safe id, must match the related case study slug. */
  slug: string;
  title: string;
  /** Short label shown under the title, e.g. "Search Funds / Private Markets". */
  category: string;
  /** One-sentence summary used on the card. */
  oneLiner: string;
  /** The messy problem this tool addresses. */
  problem: string;
  /** 3–5 headline features shown as a bulleted list on the card. */
  keyFeatures: string[];
  /** Business / domain concepts surfaced as small tags. */
  concepts: string[];
  status: ProjectStatus;
  /**
   * Two illustrative sample metrics shown in the card's dashboard-snapshot
   * header. These are sample figures, not real data — they mirror the
   * mockups on the case study page.
   */
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "search-fund-sourcing-crm",
    title: "Search Fund Sourcing CRM",
    category: "Search Funds / Private Markets / Business Development",
    oneLiner:
      "A sourcing CRM for tracking SMB acquisition targets, broker relationships, outreach status, and deal notes.",
    problem:
      "Search fund operators need a structured way to track messy proprietary deal sourcing across companies, brokers, owners, industries, and follow-ups.",
    keyFeatures: [
      "Tracks SMB acquisition targets with owner and broker contacts",
      "Outreach status and deal-stage tracking",
      "Tags for industry, geography, and deal stage",
      "Deal notes and recurring pipeline review",
    ],
    concepts: [
      "Proprietary sourcing",
      "CRM workflows",
      "Acquisition criteria",
      "Pipeline management",
      "Deal origination",
    ],
    status: "Built",
    metrics: [
      { label: "Targets tracked", value: "42" },
      { label: "In conversation", value: "3" },
    ],
  },
  {
    slug: "smb-due-diligence-addback-scrubber",
    title: "SMB Due Diligence & Add-Back Scrubber",
    category: "Accounting / M&A / Due Diligence",
    oneLiner:
      "A diligence tool for normalizing messy small-business P&Ls and identifying potential seller add-backs.",
    problem:
      "Owner-operated businesses run discretionary, family, and one-time costs through the company. Analysts must clean these inputs before estimating true profitability.",
    keyFeatures: [
      "Reviews messy P&L categories and flags discretionary expenses",
      "Identifies owner / family salary adjustments",
      "Separates recurring vs. one-time costs",
      "Builds an adjusted profitability summary with risk flags",
    ],
    concepts: [
      "P&L normalization",
      "Seller add-backs",
      "Adjusted EBITDA",
      "Quality of earnings",
      "Accounting judgment",
    ],
    status: "Prototype",
    metrics: [
      { label: "Adjusted EBITDA", value: "$485K" },
      { label: "Risk flags", value: "1" },
    ],
  },
  {
    slug: "sf-cre-lease-expiry-tracker",
    title: "SF Commercial Lease Expiry & Flight Risk Tracker",
    category: "Commercial Real Estate / Market Research / Lead Gen",
    oneLiner:
      "A CRE prospecting tracker for identifying San Francisco office tenants with lease expirations and relocation risk.",
    problem:
      "In a high-vacancy office market, brokers need to identify companies approaching lease rollover and prioritize outreach by relocation, consolidation, or flight risk.",
    keyFeatures: [
      "Tracks tenants, office locations, and submarkets",
      "Stores lease expiry timing on a rollover timeline",
      "Scores downsizing / relocation risk",
      "Prioritizes companies for broker follow-up",
    ],
    concepts: [
      "CRE prospecting",
      "Lease rollover",
      "Office vacancy",
      "Tenant risk",
      "B2B lead generation",
    ],
    status: "Prototype",
    metrics: [
      { label: "High flight risk", value: "2" },
      { label: "In rollover window", value: "5" },
    ],
  },
  {
    slug: "riskledger-operational-risk",
    title: "RiskLedger — Operational Risk Dashboard",
    category: "Risk Operations / Internal Controls / Vendor Management",
    oneLiner:
      "A lightweight risk register for tracking operational, vendor, compliance, and process risks.",
    problem:
      "Small teams track risk informally across spreadsheets and email. A structured register assigns owners, monitors severity, and documents mitigation.",
    keyFeatures: [
      "Tracks and categorizes risk items by type",
      "Scores severity and likelihood on a matrix",
      "Assigns owners and tracks status",
      "Stores mitigation notes and review cadence",
    ],
    concepts: [
      "Operational risk",
      "Internal controls",
      "Vendor risk",
      "Risk scoring",
      "Management reporting",
    ],
    status: "Built",
    metrics: [
      { label: "Risks tracked", value: "9" },
      { label: "High severity", value: "2" },
    ],
  },
  {
    slug: "post-trade-analytics-platform",
    title: "Post-Trade Analytics Platform",
    category: "Trading Analytics / KPI Dashboard / Performance Review",
    oneLiner:
      "A trading journal dashboard for reviewing trade logs, expectancy, drawdowns, setup performance, and behavioral mistakes.",
    problem:
      "Student traders fixate on individual wins instead of repeatable patterns. A structured dashboard surfaces what is actually profitable.",
    keyFeatures: [
      "Structures trade log data into KPIs",
      "Tracks win rate, expectancy, net profit, and max drawdown",
      "Breaks down performance by setup",
      "Highlights behavioral mistake patterns",
    ],
    concepts: [
      "KPI analysis",
      "Expectancy",
      "Risk / reward",
      "Drawdown",
      "Performance attribution",
    ],
    status: "Prototype",
    metrics: [
      { label: "Expectancy", value: "+0.21R" },
      { label: "Win rate", value: "51%" },
    ],
  },
  {
    slug: "internship-lead-tracker",
    title: "Internship Lead Tracker",
    category: "Career Operations / CRM / Research Automation",
    oneLiner:
      "A personal sourcing system for tracking applications, cold outreach, company leads, and follow-up status.",
    problem:
      "Finding internships as a non-target student requires systematic sourcing and follow-up. Most students track this poorly across notes and job boards.",
    keyFeatures: [
      "Tracks target companies and internship postings",
      "Tracks recruiters / hiring managers and cold-email status",
      "Prioritizes leads by realism and fit",
      "Creates a repeatable weekly job-search workflow",
    ],
    concepts: [
      "CRM management",
      "Lead sourcing",
      "Funnel tracking",
      "Pipeline hygiene",
      "Workflow design",
    ],
    status: "In Progress",
    metrics: [
      { label: "Active leads", value: "34" },
      { label: "Replies", value: "6" },
    ],
  },
];

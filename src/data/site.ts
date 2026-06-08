// ---------------------------------------------------------------------------
// SITE CONFIG
// ---------------------------------------------------------------------------
// Personal details, contact links, hero copy, and the resume path live here so
// they can be edited in one place. To swap the resume, replace the PDF at the
// path in `resumePath` (see README) — keep the filename the same or update it.
// ---------------------------------------------------------------------------

export const site = {
  name: "Zayyan Latif",
  role: "Business Administration & Data Science student",
  school: "Las Positas College",
  location: "SF Bay Area / NYC",
  email: "zayyanlatif11@gmail.com",
  linkedin: "https://linkedin.com/in/zayyanmlatif",
  linkedinLabel: "linkedin.com/in/zayyanmlatif",
  resumePath: "/Zayyan_Latif_Resume_2026.pdf",

  positioning:
    "Practical analyst tools for messy real-world business workflows.",
  positioningAlt:
    "Tools for sourcing, diligence, risk, and operations workflows.",

  hero: {
    eyebrow: "Business · Finance · Operations",
    headline: "Practical analyst tools for the messy parts of business",
    subheadline:
      "I design working tools for real finance and operations workflows — search-fund sourcing, SMB diligence, CRE prospecting, risk tracking, and performance review. Each project takes a fragmented, judgment-heavy process and turns it into something an analyst or operator can actually use.",
    // An honest, low-key note about how these get built — kept small on purpose
    // so the business thinking leads, not the tooling.
    note: "Built quickly and AI-assisted — what I sometimes call “vibe-coding” — but always designed around the underlying business judgment.",
    chips: [
      "Search Fund Sourcing",
      "SMB Due Diligence",
      "CRE Prospecting",
      "Risk Operations",
      "Finance Workflows",
    ],
  },

  // Scannable competency band so a hiring manager can match the work to a role
  // in seconds. Grouped by the kind of work, not by buzzword.
  capabilities: [
    {
      group: "Finance & Diligence",
      items: [
        "P&L normalization",
        "Seller add-backs / adjusted EBITDA",
        "Quality-of-earnings thinking",
        "Valuation fundamentals",
      ],
    },
    {
      group: "Operations & Risk",
      items: [
        "Risk registers & scoring",
        "Internal controls",
        "Vendor / process risk",
        "KPI & management reporting",
      ],
    },
    {
      group: "Sourcing & Research",
      items: [
        "CRM & pipeline design",
        "Proprietary deal sourcing",
        "Market & prospecting research",
        "Outreach / funnel tracking",
      ],
    },
    {
      group: "Data & Build",
      items: [
        "Dashboards & data viz",
        "Spreadsheet modeling",
        "React / TypeScript",
        "AI-assisted development",
      ],
    },
  ],

  about:
    "I'm Zayyan Latif, a Business Administration & Data Science student at Las Positas College targeting internships in finance operations, accounting, business operations, strategy, fintech, search funds, and market research. My portfolio is focused on practical tools that mirror the workflows I want to support as an intern.",
};

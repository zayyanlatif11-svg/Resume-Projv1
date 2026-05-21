# SMB Acquisition Intelligence Dashboard

A portfolio-ready React + TypeScript + Tailwind application that simulates how a search-fund intern or junior M&A analyst could prioritize SMB acquisition targets using a transparent weighted scoring model.

## Why this project exists
This project is built for internship recruiting in:
- Finance / investment analyst
- Search funds / ETA
- Management consulting
- Corporate development / strategy

It demonstrates product thinking, analytical rigor, and practical UI execution in a single, reviewable project.

## Core capabilities
- **Executive KPI overview**: total screened targets, average score, top target, average revenue/margin, high-priority count.
- **Interactive visual analytics**:
  - Top 10 targets by score (bar chart)
  - Industry mix (donut chart)
  - Revenue vs score relationship (scatter)
- **Target screener table** with practical filters:
  - Industry, location, risk level
  - Minimum score threshold
  - Revenue range
  - Sort mode
- **Company detail panel** with full score breakdown and plain-English factor explanations.
- **Memo generator** that drafts an analyst-style acquisition note for the selected company.
- **Methodology section** explaining assumptions, model structure, and limitations.

## Scoring model (100 points)
The model is intentionally transparent and editable in `src/lib/scoring.ts`.

### Weighted factors
- Financial attractiveness: **30%**
- Market attractiveness: **20%**
- Digital upside: **15%**
- Succession opportunity: **15%**
- Operational simplicity: **10%**
- Review/reputation quality: **10%**

### Notes
- The app uses local mock data only.
- Weights are static by design for interview explainability.
- Factor descriptions are shown directly in the UI to make model logic auditable.

## Dataset
- 40 fictional SMB targets across:
  - HVAC
  - Dental practices
  - Auto repair
  - Accounting firms
  - Landscaping
  - Specialty food
  - Med spas
  - Property management
  - Laundromats
  - B2B services

## Tech stack
- React 18
- TypeScript
- Tailwind CSS
- Recharts
- Vite

## Local development
```bash
npm install
npm run dev
```

### Quality checks
```bash
npm run lint
npm run build
```

## Portfolio usage tips
If you include this project on your resume/GitHub, highlight:
- Transparent business scoring framework design
- Interactive analytical UX for decision support
- Ability to connect financial reasoning to product implementation

### Sample resume bullets
- Built a React/TypeScript acquisition intelligence dashboard to evaluate 40 SMB targets using a transparent 6-factor, 100-point scoring model.
- Designed screening workflows (filters, sortable metrics, portfolio KPIs, visualizations) to prioritize high-conviction acquisition opportunities.
- Implemented analyst-style memo generation summarizing thesis, risks, value-creation levers, and diligence agenda for selected targets.

## Limitations
- Mock financial and operational data (not audited).
- No quality-of-earnings adjustments.
- No customer cohort/churn time series.
- No external data integrations or live comps.

## Future enhancements
- Sensitivity analysis for score weights
- Downloadable IC memo export (PDF)
- Pipeline stage tracking (sourced, LOI, diligence, close)
- Data connectors for accounting/CRM/market-demand sources

## Vercel deployment (exact settings)
This repository is a **Vite + React + TypeScript** app (not Next.js).

### Recommended Vercel project settings
- **Framework Preset:** `Vite`
- **Root Directory:** `.` (repository root)
- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** default Vercel Node is fine (Node 18+ recommended)

### Why 404 NOT_FOUND can happen
A common cause is using the wrong output directory or root directory. For this repo, Vercel must build from the repo root and publish `dist`.

For client-side routing safety, this repo includes `vercel.json` with a rewrite to `index.html`.

### One-click checklist in Vercel UI
1. Import the repository.
2. In **Project Settings → Build & Development Settings**, set:
   - Root Directory: `.`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Redeploy.
4. If you still see 404, clear overridden settings and redeploy with the repo defaults.


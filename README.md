# RiskLedger

RiskLedger is a polished fintech portfolio dashboard that combines **FP&A variance analysis**, **credit-risk analytics**, and **AP/accounting close tracking** in one recruiter-friendly web app.

## Why I Built It
I built RiskLedger to demonstrate practical business analytics skills for internships where teams care about financial performance, credit quality, and operational execution—not just code.

## Target Roles
- Credit Risk Analyst Intern
- Risk Operations Intern
- FP&A Intern
- Finance Operations Intern
- Accounting Operations Intern
- Business Analyst Intern

## Features
- **Executive Summary:** Portfolio KPIs, risk trend, budget vs actual trend, and analyst insights.
- **FP&A Dashboard:** Budget variance logic, spend flags, burn and runway analysis.
- **Credit Risk Dashboard:** Approval/default/charge-off KPIs, score-band analysis, risk segmentation.
- **AP / Close Tracker:** AP aging, overdue workflow monitoring, reconciliation and close completion.
- **About This Project page:** Recruiter-ready explanation of business context and skills demonstrated.

## Tech Stack
- React + Vite
- Tailwind CSS
- Recharts
- Local sample datasets (no backend required)

## Finance / Risk / Accounting Concepts Demonstrated
- Default rate, approval rate, charge-off rate, net loss rate
- Budget variance and variance flagging
- Gross margin and net income
- Monthly burn and cash runway
- AP aging buckets and reconciliation status
- Close checklist completion rate

## Local Setup
```bash
npm install
npm run dev
```
Then open the local URL shown by Vite.

## Production Build
```bash
npm run build
npm run preview
```

## Deploy (Vercel / Netlify)
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18+

### Vercel
1. Import repo into Vercel.
2. Framework preset: **Vite**.
3. Confirm build command/output (`npm run build` / `dist`).
4. Deploy.

### Netlify
1. New site from Git.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

## Screenshots (Placeholders)
- `docs/screenshots/executive-summary.png`
- `docs/screenshots/fpa-dashboard.png`
- `docs/screenshots/credit-risk-dashboard.png`
- `docs/screenshots/ap-close-tracker.png`

## Resume Bullets
- Built a fintech finance analytics dashboard combining FP&A variance analysis, credit-risk segmentation, and AP close tracking using React, Tailwind, and Recharts.
- Designed KPI logic for default rate, charge-off rate, approval rate, budget variance, cash runway, invoice aging, and close task completion.
- Created realistic sample datasets and analyst recommendation cards to simulate finance operations, risk operations, and accounting workflows.

## Future Improvements
- Optional CSV upload flow for custom scenario analysis.
- Historical benchmarking and scenario forecasting module.
- Exportable PDF pack for monthly management reporting.

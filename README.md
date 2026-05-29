# Zayyan Latif — Analyst Tool Portfolio

A project case-study portfolio focused on **vibe-coded analyst tools for messy
real-world business workflows** — search fund sourcing, SMB due diligence,
commercial real estate prospecting, risk operations, trading analytics, and
finance/operations workflows.

This is intentionally **not** a resume website. It leads with projects and
presents each one as a practical, credible case study for hiring managers in
finance operations, accounting, business operations, strategy, consulting,
fintech operations, search funds, and market research.

Built with **React + TypeScript + Vite + Tailwind CSS** and
[`lucide-react`](https://lucide.dev) icons. No backend — all content lives in
editable static data files.

---

## Run it online / in the cloud

This project runs anywhere Node 18+ is available (cloud IDE, Codespaces, local).

```bash
npm install      # install dependencies
npm run dev      # start the dev server (Vite) on http://localhost:5173
```

`npm run dev` uses `--host`, so in a cloud environment it binds to all
interfaces and is reachable via the forwarded/preview URL.

Other scripts:

```bash
npm run build    # type-check + production build into /dist
npm run preview  # serve the production build locally
npm run lint     # TypeScript type-check only (tsc --noEmit)
```

---

## Edit your project content

Everything is data-driven — you do **not** need to touch the components to
update content.

### Projects (homepage grid)

Edit **`src/data/projects.ts`**. Each project object controls one card:
title, category, one-liner, problem, key features, concept tags, and a
`status` of `"Built" | "Prototype" | "In Progress"`.

The `slug` field must match the corresponding case study slug.

### Case studies (detail pages)

Edit **`src/data/caseStudies.ts`**. Each case study controls a
`/case-study/<slug>` page: overview, business problem, audience, why the
workflow is messy, what you built, feature cards, concepts, example use case,
employer relevance, and "what I would improve next."

The `mockup` field chooses which dashboard preview renders (see below).

### Personal details & contact

Edit **`src/data/site.ts`** for your name, role, school, location, email,
LinkedIn URL, the hero headline/subheadline/chips, the about paragraph, and the
resume path.

---

## Add real screenshots later

Right now each case study shows a polished, **labeled sample-data dashboard
mockup** (no fake claims, no lorem ipsum). When you have real screenshots:

1. Drop the image into `public/` (e.g. `public/screenshots/search-fund-crm.png`).
2. Open `src/components/CaseStudy.tsx` and replace the `<Mockup .../>` element in
   the **Dashboard preview** block with an `<img>` (or keep the mockup and add
   the image below it):

   ```tsx
   <img
     src="/screenshots/search-fund-crm.png"
     alt="Search Fund Sourcing CRM dashboard"
     className="w-full rounded-xl border border-surface-line shadow-card"
   />
   ```

The mockup components live in `src/components/mockups/` if you'd rather tweak
the placeholder UI instead.

---

## Replace the resume PDF

The "Download Resume" button links to `public/Zayyan_Latif_Resume_2026.pdf`
(currently a placeholder).

- **Same filename:** just replace the file at
  `public/Zayyan_Latif_Resume_2026.pdf` with your real PDF.
- **Different filename:** drop your PDF in `public/` and update `resumePath` in
  `src/data/site.ts`.

---

## Deploy to Vercel or Netlify

The build output is a static SPA in `/dist`. Client-side routing is handled —
`vercel.json` and `public/_redirects` already rewrite all paths to
`index.html`.

### Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
   (`vercel.json` handles SPA rewrites automatically.)
4. Deploy.

### Netlify

1. Push this repo to GitHub.
2. Create a new site from the repo at [app.netlify.com](https://app.netlify.com).
3. Build command `npm run build`, publish directory `dist`.
   (`public/_redirects` handles SPA routing automatically.)
4. Deploy.

---

## Project structure

```
src/
  data/
    projects.ts       # project cards (edit me)
    caseStudies.ts    # case study detail content (edit me)
    site.ts           # name, contact, hero, resume path (edit me)
  components/
    Hero.tsx
    Navbar.tsx
    ProjectCard.tsx
    ProjectGallery.tsx
    CaseStudy.tsx
    WhyProjectsMatter.tsx
    HowIBuild.tsx
    CaseStudyPreviews.tsx
    About.tsx
    Contact.tsx
    Footer.tsx
    ui/Badge.tsx       # status / category / tag chips
    mockups/           # labeled sample-data dashboard previews
  pages/
    Home.tsx           # homepage section order
  App.tsx              # routes
  main.tsx             # entry
public/
  Zayyan_Latif_Resume_2026.pdf   # placeholder resume (replace me)
```

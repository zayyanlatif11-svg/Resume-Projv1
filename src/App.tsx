import { useMemo, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { mockTargets } from './data/mockTargets'
import {
  priorityFromScore,
  riskLevelFromScore,
  SCORE_FACTOR_DESCRIPTIONS,
  SCORE_WEIGHTS,
  scoreTarget,
} from './lib/scoring'

type SortKey = 'name' | 'industry' | 'estimatedRevenue' | 'ebitdaMargin' | 'totalScore'

const COLORS = ['#1d4ed8', '#0ea5e9', '#6366f1', '#14b8a6', '#f59e0b', '#ec4899', '#334155']

const fmtMoney = (n: number) => `$${Math.round(n).toLocaleString()}`

export default function App() {
  const [industry, setIndustry] = useState('All')
  const [location, setLocation] = useState('All')
  const [risk, setRisk] = useState('All')
  const [minScore, setMinScore] = useState(0)
  const [revMin, setRevMin] = useState(0)
  const [revMax, setRevMax] = useState(7_000_000)
  const [sortKey, setSortKey] = useState<SortKey>('totalScore')
  const [selectedName, setSelectedName] = useState<string>(mockTargets[0].name)

  const enriched = useMemo(() => mockTargets.map((target) => ({ ...target, ...scoreTarget(target) })), [])
  const industries = useMemo(() => ['All', ...new Set(enriched.map((x) => x.industry))], [enriched])
  const locations = useMemo(() => ['All', ...new Set(enriched.map((x) => `${x.city}, ${x.state}`))], [enriched])

  const filtered = useMemo(() => enriched
    .filter((x) => industry === 'All' || x.industry === industry)
    .filter((x) => location === 'All' || `${x.city}, ${x.state}` === location)
    .filter((x) => x.totalScore >= minScore)
    .filter((x) => risk === 'All' || riskLevelFromScore(x.totalScore) === risk)
    .filter((x) => x.estimatedRevenue >= revMin && x.estimatedRevenue <= revMax)
    .sort((a, b) => (sortKey === 'name' || sortKey === 'industry')
      ? String(a[sortKey]).localeCompare(String(b[sortKey]))
      : b[sortKey] - a[sortKey]), [enriched, industry, location, minScore, revMin, revMax, risk, sortKey])

  const selected = filtered.find((x) => x.name === selectedName) ?? filtered[0] ?? enriched[0]

  const metrics = {
    total: filtered.length,
    avgScore: filtered.reduce((sum, x) => sum + x.totalScore, 0) / Math.max(filtered.length, 1),
    top: [...filtered].sort((a, b) => b.totalScore - a.totalScore)[0]?.name ?? 'N/A',
    avgRevenue: filtered.reduce((sum, x) => sum + x.estimatedRevenue, 0) / Math.max(filtered.length, 1),
    avgMargin: filtered.reduce((sum, x) => sum + x.ebitdaMargin, 0) / Math.max(filtered.length, 1),
    highPriority: filtered.filter((x) => priorityFromScore(x.totalScore) === 'High').length,
  }

  const industryMix = Object.entries(filtered.reduce((acc, x) => ({ ...acc, [x.industry]: (acc[x.industry] ?? 0) + 1 }), {} as Record<string, number>)).map(([name, value]) => ({ name, value }))
  const top10 = [...filtered].sort((a, b) => b.totalScore - a.totalScore).slice(0, 10)

  const memo = `Investment Thesis\n${selected.name} appears to be an actionable lower-middle-market target in ${selected.industry} with sufficient size (${fmtMoney(selected.estimatedRevenue)} revenue) and healthy profitability (${(selected.ebitdaMargin * 100).toFixed(1)}% EBITDA margin).\n\nWhy this target is attractive\nThe business has strong local customer proof points (${selected.googleRating}★ across ${selected.reviewCount} reviews) and operates in a fragmented market that can support tuck-in acquisitions and route density benefits. Current digital execution is adequate but not fully optimized, leaving room for lead-generation improvements.\n\nKey risks\nPrimary concerns include key-person concentration (owner dependency ${selected.ownerDependencyRisk}/100), process institutionalization, and execution risk during management transition. We should also validate margin durability under normalized labor and parts/input costs.\n\nValue creation opportunities\n1) Professionalize pricing governance and quote conversion cadence\n2) Upgrade digital funnel (SEO/paid search/landing-page conversion)
3) Centralize procurement and scheduling workflows\n4) Introduce KPI-driven branch management\n\nTop diligence questions\n1) What % of revenue is tied to top 10 customers?\n2) How much owner-sourced revenue can transfer post-close?\n3) Are margins stable by service line over last 24 months?\n4) What deferred maintenance/capex is required?\n5) What does labor retention look like for technicians/managers?\n\nSuggested next step\nProceed with a non-binding IOI and launch focused QoE + commercial diligence with an initial 100-day integration blueprint.`

  return <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50 text-slate-800">
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">SMB Acquisition Intelligence Dashboard</h1>
          <p className="text-sm text-slate-500">Target screening, scoring transparency, and analyst-style memo generation.</p>
        </div>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Portfolio Project</span>
      </div>
    </header>

    <main className="mx-auto max-w-7xl space-y-6 p-6">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[['Total targets analyzed', String(metrics.total)], ['Average acquisition score', metrics.avgScore.toFixed(1)], ['Highest scoring target', metrics.top], ['Average estimated revenue', fmtMoney(metrics.avgRevenue)], ['Average estimated EBITDA margin', `${(metrics.avgMargin * 100).toFixed(1)}%`], ['High-priority targets', String(metrics.highPriority)]].map(([k, v]) => <article key={k} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card"><p className="text-sm text-slate-500">{k}</p><p className="mt-2 text-xl font-semibold text-slate-900">{v}</p></article>)}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="h-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-card lg:col-span-2"><h2 className="mb-2 font-semibold">Top 10 Targets by Acquisition Score</h2><ResponsiveContainer width="100%" height="90%"><BarChart data={top10}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" hide /><YAxis /><Tooltip /><Bar dataKey="totalScore" radius={[6, 6, 0, 0]} fill="#1d4ed8" /></BarChart></ResponsiveContainer></article>
        <article className="h-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"><h2 className="mb-2 font-semibold">Industry Mix</h2><ResponsiveContainer width="100%" height="90%"><PieChart><Pie data={industryMix} dataKey="value" nameKey="name" innerRadius={44} outerRadius={84}>{industryMix.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></article>
      </section>

      <article className="h-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-card"><h2 className="mb-2 font-semibold">Estimated Revenue vs Acquisition Score</h2><ResponsiveContainer width="100%" height="90%"><ScatterChart><CartesianGrid /><XAxis dataKey="estimatedRevenue" name="Revenue" tickFormatter={(v) => `$${Math.round(v / 1000000)}M`} /><YAxis dataKey="totalScore" name="Score" /><Tooltip cursor={{ strokeDasharray: '3 3' }} /><Legend /><Scatter name="Targets" data={filtered} fill="#0ea5e9" /></ScatterChart></ResponsiveContainer></article>

      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <h2 className="font-semibold">Target Screener Table</h2>
        <div className="grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-7">
          <select className="rounded-lg border p-2" value={industry} onChange={(e) => setIndustry(e.target.value)}>{industries.map((x) => <option key={x}>{x}</option>)}</select>
          <select className="rounded-lg border p-2" value={location} onChange={(e) => setLocation(e.target.value)}>{locations.map((x) => <option key={x}>{x}</option>)}</select>
          <input className="rounded-lg border p-2" type="number" value={minScore} onChange={(e) => setMinScore(Number(e.target.value) || 0)} placeholder="Minimum score" />
          <select className="rounded-lg border p-2" value={risk} onChange={(e) => setRisk(e.target.value)}><option>All</option><option>Low</option><option>Medium</option><option>High</option></select>
          <input className="rounded-lg border p-2" type="number" value={revMin} onChange={(e) => setRevMin(Number(e.target.value) || 0)} placeholder="Min revenue" />
          <input className="rounded-lg border p-2" type="number" value={revMax} onChange={(e) => setRevMax(Number(e.target.value) || 0)} placeholder="Max revenue" />
          <select className="rounded-lg border p-2" value={sortKey} onChange={(e) => setSortKey(e.target.value as SortKey)}><option value="totalScore">Sort: Score</option><option value="estimatedRevenue">Sort: Revenue</option><option value="ebitdaMargin">Sort: Margin</option><option value="industry">Sort: Industry</option><option value="name">Sort: Name</option></select>
        </div>

        <div className="overflow-x-auto"><table className="min-w-full text-xs"><thead><tr className="bg-slate-100 text-left text-slate-600">{['Company','Industry','Location','Revenue','EBITDA','Rating','Reviews','Web score','Owner risk','Growth','Score','Risk','Priority'].map((h) => <th key={h} className="px-2 py-2">{h}</th>)}</tr></thead><tbody>{filtered.map((x) => <tr key={x.name} onClick={() => setSelectedName(x.name)} className="cursor-pointer border-b hover:bg-blue-50/40"><td className="px-2 py-2 font-medium text-slate-900">{x.name}</td><td>{x.industry}</td><td>{x.city}, {x.state}</td><td>{fmtMoney(x.estimatedRevenue)}</td><td>{(x.ebitdaMargin * 100).toFixed(1)}%</td><td>{x.googleRating.toFixed(1)}</td><td>{x.reviewCount}</td><td>{x.websiteQuality}</td><td>{x.ownerDependencyRisk}</td><td>{x.growthPotential}</td><td className="font-semibold">{x.totalScore.toFixed(1)}</td><td>{riskLevelFromScore(x.totalScore)}</td><td>{priorityFromScore(x.totalScore)}</td></tr>)}</tbody></table></div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
          <h2 className="font-semibold">Company Detail — {selected.name}</h2>
          <p className="mt-2 text-sm text-slate-600">{selected.notes}</p>
          <ul className="mt-3 space-y-2 text-sm">{(Object.keys(SCORE_WEIGHTS) as Array<keyof typeof SCORE_WEIGHTS>).map((k) => <li key={k} className="rounded-lg border border-slate-200 p-2"><div className="flex items-center justify-between"><span className="font-medium">{k}</span><span>{(selected[k] as number).toFixed(1)} ({Math.round(SCORE_WEIGHTS[k] * 100)}%)</span></div><p className="mt-1 text-xs text-slate-500">{SCORE_FACTOR_DESCRIPTIONS[k]}</p></li>)}</ul>
          <p className="mt-3 text-sm font-semibold">Overall acquisition score: {selected.totalScore.toFixed(1)}</p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card"><h2 className="font-semibold">Analyst Draft Memo</h2><pre className="mt-3 whitespace-pre-wrap text-xs leading-5 text-slate-700">{memo}</pre></article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
        <h2 className="font-semibold">Methodology</h2>
        <p className="mt-2 text-sm text-slate-700">The model prioritizes businesses that are financially durable, in attractive fragmented markets, and suitable for operational scaling under new ownership. We balance quality (margin/reputation) with value-creation optionality (digital and succession upside).</p>
        <p className="mt-2 text-sm text-slate-700">Limitations: estimates are synthetic, formula weights are static, and no time-series financials or customer-level churn is included. In production, this should be enhanced with accounting, CRM, call tracking, and geography-level demand data.</p>
      </section>
    </main>
  </div>
}

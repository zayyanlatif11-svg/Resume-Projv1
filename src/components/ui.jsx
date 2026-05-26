const navItems = ['Executive Summary', 'FP&A Dashboard', 'Credit Risk', 'AP / Close Tracker', 'About This Project']

export function Sidebar({ active, onChange }) {
  return (
    <aside className='w-full md:w-72 bg-slate-950 text-slate-100 md:min-h-screen border-r border-slate-800'>
      <div className='p-6 md:p-7'>
        <p className='text-xs uppercase tracking-[0.16em] text-slate-400'>Fintech Portfolio</p>
        <h1 className='mt-2 text-2xl font-semibold'>RiskLedger</h1>
        <p className='mt-2 text-sm text-slate-300'>FP&A, credit risk, and close operations dashboard.</p>
      </div>
      <nav className='px-4 pb-6 space-y-1'>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${active === item ? 'bg-slate-800 text-white font-medium' : 'text-slate-300 hover:bg-slate-900 hover:text-white'}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export const KpiCard = ({ label, value, sub }) => (
  <article className='bg-white rounded-xl border border-slate-200 p-4 shadow-sm'>
    <p className='text-sm font-medium text-slate-600'>{label}</p>
    <p className='mt-2 text-2xl font-semibold text-slate-900'>{value}</p>
    {sub ? <p className='mt-2 text-xs leading-5 text-slate-500'>{sub}</p> : null}
  </article>
)

export const Section = ({ title, children, subtitle }) => (
  <section className='bg-white rounded-xl border border-slate-200 shadow-sm p-4 md:p-5'>
    <h3 className='text-slate-900 text-base font-semibold'>{title}</h3>
    {subtitle ? <p className='mt-1 text-xs text-slate-500'>{subtitle}</p> : null}
    <div className='mt-4'>{children}</div>
  </section>
)

export const Badge = ({ text }) => {
  const danger = ['Over Budget', 'Blocked', 'Overdue', 'Very High Risk', 'High Risk']
  const success = ['Complete', 'Under Budget', 'Reconciled', 'Low Risk', 'Approved', 'Paid']
  const neutral = ['On Track', 'Pending', 'Needs Review', 'Medium Risk', 'Due Soon']

  let c = 'bg-slate-100 text-slate-700'
  if (danger.some((k) => text.includes(k))) c = 'bg-rose-100 text-rose-700'
  else if (success.some((k) => text.includes(k))) c = 'bg-emerald-100 text-emerald-700'
  else if (neutral.some((k) => text.includes(k))) c = 'bg-amber-100 text-amber-700'

  return <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${c}`}>{text}</span>
}

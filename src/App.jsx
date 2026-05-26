import { useMemo, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Sidebar, KpiCard, Section, Badge } from './components/ui'
import { borrowers } from './data/loanData'
import { budgetActuals, departmentSpend } from './data/financeData'
import { invoices, closeChecklist } from './data/accountingData'
import { average, fmtMoney, fmtPct, getVarianceStatus, pct, scoreBorrowerRisk, sum } from './utils/metrics'
import './index.css'

const colors = ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b']
const kpi = (label, value, sub) => ({ label, value, sub })

export default function App() {
  const [active, setActive] = useState('Executive Summary')
  const data = useMemo(() => borrowers.map((b) => ({ ...b, ...scoreBorrowerRisk(b) })), [])
  const pages = {
    'Executive Summary': <Executive data={data} />,
    'FP&A Dashboard': <Fpna />,
    'Credit Risk': <Credit data={data} />,
    'AP / Close Tracker': <Accounting />,
    'About This Project': <AboutPage />,
  }
  return <div className='md:flex bg-slate-100 min-h-screen'><Sidebar active={active} onChange={setActive} /><main className='flex-1 p-4 md:p-7 space-y-5'>{pages[active]}</main></div>
}

const Grid = ({ items }) => <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-3'>{items.map((x) => <KpiCard key={x.label} {...x} />)}</div>
const Table = ({ head, rows }) => <div className='overflow-x-auto'><table className='w-full text-sm'><thead className='text-slate-500 bg-slate-50'><tr>{head.map((h)=><th key={h} className='px-3 py-2 text-left font-medium'>{h}</th>)}</tr></thead><tbody>{rows}</tbody></table></div>

function Executive({ data }) {
  const approved = data.filter((b) => b.approval_status === 'Approved')
  const defaults = approved.filter((b) => b.default_status === 'Default')
  const latest = budgetActuals.at(-1)
  const closePct = pct(closeChecklist.filter((t) => t.status === 'Complete').length, closeChecklist.length)
  const cards = [kpi('Total Loan Portfolio', fmtMoney(sum(approved, 'loan_amount')), 'Approved loan principal outstanding.'), kpi('Default Rate', fmtPct(pct(defaults.length, approved.length)), 'Defaults ÷ approved loans.'), kpi('Net Loss Rate', fmtPct(pct(sum(defaults, 'charge_off_amount'), sum(approved, 'loan_amount'))), 'Charge-offs ÷ approved loan principal.'), kpi('Budget Variance %', fmtPct(pct(latest.revenueActual - latest.revenueBudget, latest.revenueBudget)), 'Latest month revenue variance vs plan.'), kpi('Cash Runway', `${(latest.cashBalance / latest.opexActual).toFixed(1)} months`, 'Cash balance ÷ monthly operating expense.'), kpi('Close Tasks Completed %', fmtPct(closePct), 'Completed close checklist tasks ÷ total tasks.')]

  return <div className='space-y-4'><Grid items={cards} />
  <div className='grid lg:grid-cols-2 gap-4'>
    <Section title='Portfolio Risk Trend by Month' subtitle='Synthetic trend to mirror portfolio monitoring.'><div className='h-72'><ResponsiveContainer><LineChart data={budgetActuals.map((m,i)=>({month:m.month,risk:5.2+Math.sin(i)*1.2+i*0.18}))}><CartesianGrid strokeDasharray='3 3'/><XAxis dataKey='month'/><YAxis/><Tooltip/><Line dataKey='risk' stroke='#0f172a' strokeWidth={2}/></LineChart></ResponsiveContainer></div></Section>
    <Section title='Budget vs Actual Revenue Trend'><div className='h-72'><ResponsiveContainer><BarChart data={budgetActuals}><CartesianGrid strokeDasharray='3 3'/><XAxis dataKey='month'/><YAxis/><Tooltip/><Bar dataKey='revenueBudget' fill='#94a3b8'/><Bar dataKey='revenueActual' fill='#1e293b'/></BarChart></ResponsiveContainer></div></Section>
  </div>
  <Section title='Analyst Insights'><ul className='list-disc pl-5 space-y-2 text-sm text-slate-700'><li>Default activity is concentrated in lower score bands with elevated DTI, supporting tighter underwriting for score bands below 620 and DTI above 40%.</li><li>December revenue is below budget while operating expense continues to trend higher, indicating near-term pressure on margins.</li><li>Overdue AP and blocked close tasks suggest month-end execution risk; prioritize invoice approvals and reconciliation blockers first.</li></ul></Section>
  </div>
}

function Fpna(){const k = budgetActuals.reduce((a,m)=>({rb:a.rb+m.revenueBudget,ra:a.ra+m.revenueActual,cb:a.cb+m.cogsBudget,ca:a.ca+m.cogsActual,ob:a.ob+m.opexBudget,oa:a.oa+m.opexActual}),{rb:0,ra:0,cb:0,ca:0,ob:0,oa:0}); const netIncome=k.ra-k.ca-k.oa; const burn=average(budgetActuals,'opexActual');
return <div className='space-y-4'><Grid items={[kpi('Revenue',fmtMoney(k.ra),'Annual actual revenue.'),kpi('Gross Margin',fmtPct(pct(k.ra-k.ca,k.ra)),'(Revenue - COGS) ÷ Revenue.'),kpi('Net Income / Loss',fmtMoney(netIncome),'Revenue - COGS - operating expenses.'),kpi('Budget Variance %',fmtPct(pct(k.ra-k.rb,k.rb)),'Revenue variance vs annual budget.'),kpi('Monthly Burn',fmtMoney(burn),'Average monthly operating expense.'),kpi('Cash Runway',`${(budgetActuals.at(-1).cashBalance/burn).toFixed(1)} months`,'Ending cash ÷ average monthly burn.')]}/>
<Section title='Department Spend'><Table head={['Department','Budget','Actual','Status']} rows={departmentSpend.map((d)=><tr key={d.department} className='border-b border-slate-100'><td className='px-3 py-2'>{d.department}</td><td className='px-3 py-2'>{fmtMoney(d.budget)}</td><td className='px-3 py-2'>{fmtMoney(d.actual)}</td><td className='px-3 py-2'><Badge text={getVarianceStatus(d.budget,d.actual)} /></td></tr>)}/></Section>
<Section title='FP&A Insights'><ul className='list-disc pl-5 space-y-2 text-sm text-slate-700'><li>Sales & Marketing and Compliance are over-budget by more than 10%, triggering variance flags for management review.</li><li>Gross margin remains stable, but higher operating spend reduces net income conversion.</li><li>Runway has shortened as monthly burn increased through the year, reinforcing need for expense controls.</li></ul></Section></div>}

function Credit({data}){const approved=data.filter(b=>b.approval_status==='Approved'); const d=approved.filter(b=>b.default_status==='Default');
return <div className='space-y-4'><Grid items={[kpi('Total Applications',data.length,'All loan applications in the sample.'),kpi('Approval Rate',fmtPct(pct(approved.length,data.length)),'Approved applications ÷ total applications.'),kpi('Default Rate',fmtPct(pct(d.length,approved.length)),'Defaults ÷ approved loans.'),kpi('Charge-Off Rate',fmtPct(pct(sum(d,'charge_off_amount'),sum(approved,'loan_amount'))),'Charge-off dollars ÷ approved principal.'),kpi('Avg Credit Score',average(data,'credit_score').toFixed(0),'Average FICO score of applicants.'),kpi('Expected Interest Revenue',fmtMoney(sum(approved,'loan_amount')*average(approved,'interest_rate')/100),'Principal × avg interest rate estimate.')]}/>
<Section title='Default Rate by Credit Score Band'><div className='h-72'><ResponsiveContainer><BarChart data={[['<580',540,579],['580-619',580,619],['620-659',620,659],['660-699',660,699],['700-739',700,739],['740+',740,850]].map(([label,min,max])=>{const seg=approved.filter(b=>b.credit_score>=min&&b.credit_score<=max);return {label,rate:pct(seg.filter(b=>b.default_status==='Default').length,seg.length)}})}><CartesianGrid strokeDasharray='3 3'/><XAxis dataKey='label'/><YAxis/><Tooltip/><Bar dataKey='rate' fill='#0f172a'/></BarChart></ResponsiveContainer></div></Section>
<Section title='Credit Risk Insights'><ul className='list-disc pl-5 space-y-2 text-sm text-slate-700'><li>Very High Risk and High Risk segments should receive decline/tighter terms recommendations due to elevated expected loss.</li><li>Medium Risk profiles are suitable for manual review with compensating factors (income stability or lower DTI).</li><li>Approval policy appears conservative in sub-580 high DTI applicants, which supports portfolio quality.</li></ul></Section></div>}

function Accounting(){const outstanding=invoices.filter(i=>i.payment_status!=='Paid'); const aging=[{name:'Current',v:invoices.filter(i=>i.days_past_due===0).length},{name:'1-30',v:invoices.filter(i=>i.days_past_due>=1&&i.days_past_due<=30).length},{name:'31-60',v:invoices.filter(i=>i.days_past_due>=31&&i.days_past_due<=60).length},{name:'61-90',v:invoices.filter(i=>i.days_past_due>=61&&i.days_past_due<=90).length},{name:'90+',v:invoices.filter(i=>i.days_past_due>90).length}]
return <div className='space-y-4'><Grid items={[kpi('Total AP Outstanding',fmtMoney(sum(outstanding,'amount')),'Unpaid invoices total amount.'),kpi('Overdue AP',fmtMoney(sum(invoices.filter(i=>i.days_past_due>0),'amount')),'Invoices past due date.'),kpi('Invoices Pending Approval',invoices.filter(i=>i.approval_status==='Pending').length,'Invoices waiting workflow approval.'),kpi('Missing Documentation',invoices.filter(i=>i.documentation_status==='Missing').length,'Invoices missing support files.'),kpi('Reconciled Items %',fmtPct(pct(invoices.filter(i=>i.reconciliation_status==='Reconciled').length,invoices.length)),'Reconciled invoices ÷ total invoices.'),kpi('Close Completion %',fmtPct(pct(closeChecklist.filter(t=>t.status==='Complete').length,closeChecklist.length)),'Completed close tasks ÷ checklist total.')]}/>
<Section title='AP Aging Buckets'><div className='h-72'><ResponsiveContainer><PieChart><Pie data={aging} dataKey='v' nameKey='name' outerRadius={95}>{colors.map((c,i)=><Cell key={i} fill={c}/> )}</Pie><Tooltip/></PieChart></ResponsiveContainer></div></Section>
<Section title='Accounting Ops Insights'><ul className='list-disc pl-5 space-y-2 text-sm text-slate-700'><li>Invoices over 60 days past due should be escalated first to reduce vendor relationship and service disruption risk.</li><li>Missing invoice documentation can delay close sign-off and should be resolved before financial package preparation.</li><li>Blocked close tasks indicate dependencies across AP and reconciliation; daily owner follow-up is recommended.</li></ul></Section></div>}

function AboutPage(){return <Section title='About This Project' subtitle='Portfolio project for fintech, FP&A, risk operations, accounting, and business analyst internship applications.'><div className='space-y-4 text-sm text-slate-700'><p>RiskLedger simulates how a finance team monitors portfolio risk, spending variance, and month-end close execution in one dashboard. The business problem is balancing growth, credit quality, and operational control.</p><p>The project demonstrates executive KPI reporting, FP&A budget-vs-actual analysis, consumer credit-risk segmentation, and AP close tracking with plain-English analyst insights.</p><p><strong>Target roles:</strong> Credit Analyst Intern, Risk Operations Intern, FP&A Intern, Accounting Operations Intern, Finance Operations Analyst, and Business Analyst.</p><div><h4 className='font-semibold text-slate-900 mb-2'>Skills Demonstrated</h4><ul className='list-disc pl-5 space-y-1'><li>Excel-style finance logic: margin, variance, burn, runway, and net income calculations.</li><li>Accounting operations: AP aging, reconciliation tracking, close checklist management.</li><li>Credit risk analysis: score bands, DTI segmentation, charge-off/default rate monitoring.</li><li>Statistics and dashboarding: segmentation, trend analysis, KPI rollups, chart communication.</li><li>React + Tailwind implementation for professional, recruiter-ready UI delivery.</li></ul></div></div></Section>}

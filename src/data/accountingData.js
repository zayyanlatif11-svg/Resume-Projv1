export const invoices = Array.from({ length: 36 }, (_, i) => {
  const amount = 1800 + ((i * 970) % 28000)
  const days_past_due = (i * 9) % 120
  const approval_status = i % 7 === 0 ? 'Pending' : i % 11 === 0 ? 'Needs Review' : 'Approved'
  const payment_status = days_past_due > 0 ? (days_past_due > 60 ? 'Overdue' : 'Due Soon') : 'Paid'
  const departments = ['Engineering', 'Operations', 'G&A', 'Compliance', 'Sales & Marketing', 'Customer Support']
  return {
    vendor_name: ['Stripe', 'AWS', 'Snowflake', 'Deloitte', 'HubSpot', 'Notion', 'Equifax'][i % 7],
    invoice_number: `INV-${2026}${String(i + 1001)}`,
    invoice_date: `2026-${String((i % 12) + 1).padStart(2, '0')}-05`,
    due_date: `2026-${String((i % 12) + 1).padStart(2, '0')}-25`,
    amount,
    department: departments[i % departments.length],
    approval_status,
    payment_status,
    documentation_status: i % 6 === 0 ? 'Missing' : 'Attached',
    days_past_due,
    reconciliation_status: i % 5 === 0 ? 'Pending' : 'Reconciled',
  }
})

export const closeChecklist = [
  'Bank reconciliation completed',
  'AP aging reviewed',
  'Vendor invoices matched',
  'Accruals posted',
  'Revenue reviewed',
  'Expense variance reviewed',
  'Supporting documentation attached',
  'Financial package prepared',
  'Intercompany balances confirmed',
  'Management sign-off obtained',
].map((task, i) => ({
  task,
  owner: ['Accounting Manager', 'AP Analyst', 'FP&A Analyst', 'Controller'][i % 4],
  status: i % 6 === 0 ? 'Blocked' : i % 4 === 0 ? 'Pending' : i % 3 === 0 ? 'Needs Review' : 'Complete',
}))

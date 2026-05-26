const purposes = ['Debt Consolidation', 'Auto', 'Home Improvement', 'Medical', 'Small Business', 'Education']
const employment = ['Full-time', 'Part-time', 'Self-employed', 'Contract']
const states = ['CA', 'TX', 'FL', 'NY', 'IL', 'GA', 'NC', 'WA']

export const borrowers = Array.from({ length: 130 }, (_, i) => {
  const credit_score = 540 + ((i * 17) % 260)
  const debt_to_income_ratio = 14 + ((i * 7) % 44)
  const income = 32000 + ((i * 2900) % 98000)
  const loan_amount = 3500 + ((i * 1300) % 36000)
  const interest_rate = Number((7 + (760 - credit_score) / 30 + debt_to_income_ratio / 25).toFixed(2))
  const monthly_payment = Number(((loan_amount * (1 + interest_rate / 100)) / 24).toFixed(2))
  const default_status = credit_score < 620 && debt_to_income_ratio > 38 ? 'Default' : i % 11 === 0 ? 'Default' : 'Current'
  const charge_off_amount = default_status === 'Default' ? Math.round(loan_amount * (0.45 + ((i % 4) * 0.08))) : 0
  const approval_status = credit_score < 580 && debt_to_income_ratio > 45 ? 'Declined' : i % 9 === 0 ? 'Pending' : 'Approved'

  return {
    borrower_id: `RL-${String(i + 1).padStart(4, '0')}`,
    loan_amount,
    interest_rate,
    credit_score,
    income,
    debt_to_income_ratio,
    loan_purpose: purposes[i % purposes.length],
    employment_status: employment[i % employment.length],
    state: states[i % states.length],
    approval_status,
    default_status,
    prior_default: i % 8 === 0,
    charge_off_amount,
    monthly_payment,
    origination_month: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i % 12],
  }
})

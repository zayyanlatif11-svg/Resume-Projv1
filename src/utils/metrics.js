export const sum = (arr, key) => arr.reduce((t, item) => t + item[key], 0)
export const average = (arr, key) => (arr.length ? sum(arr, key) / arr.length : 0)
export const pct = (num, den) => (den ? (num / den) * 100 : 0)
export const fmtMoney = (n) => `$${n.toLocaleString()}`
export const fmtPct = (n) => `${n.toFixed(1)}%`

export const getVarianceStatus = (budget, actual) => {
  const variancePct = ((actual - budget) / budget) * 100
  if (variancePct > 10) return 'Over Budget'
  if (variancePct < -10) return 'Under Budget'
  return 'On Track'
}

export const scoreBorrowerRisk = (b) => {
  let score = 50
  score += Math.max(0, (660 - b.credit_score) / 2)
  score += b.debt_to_income_ratio > 40 ? 20 : b.debt_to_income_ratio > 30 ? 10 : 0
  score += b.income < 45000 ? 10 : b.income > 90000 ? -8 : 0
  score += b.employment_status === 'Part-time' ? 8 : b.employment_status === 'Contract' ? 12 : 0
  score += b.loan_amount > 28000 ? 10 : 0
  score += b.prior_default ? 20 : 0
  score = Math.min(100, Math.max(1, Math.round(score)))
  const category = score < 35 ? 'Low Risk' : score < 55 ? 'Medium Risk' : score < 75 ? 'High Risk' : 'Very High Risk'
  return { score, category }
}

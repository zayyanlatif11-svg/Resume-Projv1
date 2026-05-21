export type TargetRecord = {
  name: string
  industry: string
  city: string
  state: string
  estimatedRevenue: number
  ebitdaMargin: number
  employeeCount: number
  googleRating: number
  reviewCount: number
  websiteQuality: number
  ownerDependencyRisk: number
  growthPotential: number
  operationalComplexity: number
  marketFragmentation: number
  notes: string
}

export type ScoreBreakdown = {
  financialAttractiveness: number
  marketAttractiveness: number
  digitalUpside: number
  successionOpportunity: number
  operationalSimplicity: number
  reviewReputationQuality: number
  totalScore: number
}

export const SCORE_WEIGHTS = {
  financialAttractiveness: 0.3,
  marketAttractiveness: 0.2,
  digitalUpside: 0.15,
  successionOpportunity: 0.15,
  operationalSimplicity: 0.1,
  reviewReputationQuality: 0.1,
} as const

export const SCORE_FACTOR_DESCRIPTIONS: Record<keyof typeof SCORE_WEIGHTS, string> = {
  financialAttractiveness:
    'Measures revenue scale and EBITDA margin quality. Higher recurring revenue and stronger margins are rewarded.',
  marketAttractiveness:
    'Measures industry fragmentation and local growth potential. Fragmented growing sectors are easier to consolidate.',
  digitalUpside:
    'Measures potential improvement from digital execution. Lower website quality plus high growth potential implies upside.',
  successionOpportunity:
    'Measures transition opportunity from current owner dependence with manageable systems handoff complexity.',
  operationalSimplicity:
    'Measures ease of execution post-close. Lower operational complexity and reduced key-person risk score better.',
  reviewReputationQuality:
    'Measures customer sentiment and review depth. Strong ratings and sufficient review volume improve confidence.',
}

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n))

/**
 * Transparent scoring model (100-point scale)
 *
 * Formula:
 * total = (financial * 30%) + (market * 20%) + (digital * 15%) +
 *         (succession * 15%) + (operational * 10%) + (review * 10%)
 */
export const scoreTarget = (target: TargetRecord): ScoreBreakdown => {
  // Financial attractiveness (30%): blend of scale and margin
  const revenueScore = clamp((target.estimatedRevenue / 7000000) * 100)
  const marginScore = clamp((target.ebitdaMargin / 0.35) * 100)
  const financialAttractiveness = clamp(revenueScore * 0.45 + marginScore * 0.55)

  // Market attractiveness (20%): fragmented + growing local market
  const marketAttractiveness = clamp(target.marketFragmentation * 0.55 + target.growthPotential * 0.45)

  // Digital upside (15%): lower website quality can indicate upside capture opportunity
  const digitalUpside = clamp((100 - target.websiteQuality) * 0.6 + target.growthPotential * 0.4)

  // Succession opportunity (15%): owner-dependence can unlock value if transition risk is manageable
  const successionOpportunity = clamp(target.ownerDependencyRisk * 0.7 + (100 - target.operationalComplexity) * 0.3)

  // Operational simplicity (10%): lower complexity and lower owner concentration are preferred
  const operationalSimplicity = clamp((100 - target.operationalComplexity) * 0.65 + (100 - target.ownerDependencyRisk) * 0.35)

  // Review/reputation quality (10%): rating quality + proof via review volume
  const reviewVolumeScore = clamp((target.reviewCount / 450) * 100)
  const reviewRatingScore = clamp((target.googleRating / 5) * 100)
  const reviewReputationQuality = clamp(reviewRatingScore * 0.7 + reviewVolumeScore * 0.3)

  const totalScore =
    financialAttractiveness * SCORE_WEIGHTS.financialAttractiveness +
    marketAttractiveness * SCORE_WEIGHTS.marketAttractiveness +
    digitalUpside * SCORE_WEIGHTS.digitalUpside +
    successionOpportunity * SCORE_WEIGHTS.successionOpportunity +
    operationalSimplicity * SCORE_WEIGHTS.operationalSimplicity +
    reviewReputationQuality * SCORE_WEIGHTS.reviewReputationQuality

  return {
    financialAttractiveness,
    marketAttractiveness,
    digitalUpside,
    successionOpportunity,
    operationalSimplicity,
    reviewReputationQuality,
    totalScore: clamp(totalScore),
  }
}

export const riskLevelFromScore = (score: number): 'Low' | 'Medium' | 'High' =>
  score >= 78 ? 'Low' : score >= 62 ? 'Medium' : 'High'

export const priorityFromScore = (score: number): 'High' | 'Medium' | 'Low' =>
  score >= 80 ? 'High' : score >= 65 ? 'Medium' : 'Low'

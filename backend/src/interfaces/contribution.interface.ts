export interface ContributionDay {
  color: string
  contributionCount: number
  date: string
  weekday: number
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

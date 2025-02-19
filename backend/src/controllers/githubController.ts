// src/controllers/githubController.ts
import { Request, Response } from 'express'
import * as githubService from '../services/GithubService/githubService'
import * as contribGraph from '../services/ImageGenerator/contribGraph'
import { ContributionWeek, ContributionDay } from '../interfaces/contribution.interface'

// Obtém insights do repositório
export const getRepoInsights = async (req: Request, res: Response): Promise<void> => {
  const { username, token } = req.params

  try {
    const weeks: ContributionWeek[] = await githubService.getContributions(username)
    const data = await contribGraph.generateContribGraph(weeks)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}

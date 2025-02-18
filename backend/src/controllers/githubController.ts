// src/controllers/githubController.ts
import { Request, Response } from 'express'
import * as githubService from '../services/githubService'

// Obtém insights do repositório
export const getRepoInsights = async (req: Request, res: Response): Promise<void> => {
  const { username, repo } = req.params

  try {
    const data = await githubService.fetchRepoData(username, repo)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}

// Gera um gráfico com base nos dados do repositório
export const generateChart = async (req: Request, res: Response): Promise<void> => {
  const { username, repo } = req.params

  try {
    const chartBuffer = await githubService.generateRepoChart(username, repo)
    res.setHeader('Content-Type', 'image/png')
    res.send(chartBuffer)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}

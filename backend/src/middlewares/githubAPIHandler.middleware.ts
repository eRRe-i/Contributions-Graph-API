import { Request, Response, NextFunction } from 'express'
import { config } from 'dotenv'
import * as GithubService from '../services/GithubService/githubService'
import { GetGithubRequest } from '../interfaces/githubreq.interface'

config()

export const handleGitHubAuth = (req: GetGithubRequest, res: Response, next: NextFunction) => {
  const { token } = req.headers as { token: string }
  const { githubName } = req.query

  // Lógica do middleware
  if (!token && githubName) {
    const defaultToken = process.env.GITHUB_TOKEN
    if (!defaultToken) {
      res.status(400).json({ error: 'GITHUB_TOKEN não definido' })
      return
    }
    req.token = defaultToken
    req.githubName = githubName as string
    return next()
  }

  if (token && !githubName) {
    GithubService.getAuthenticatedUserInfo(token)
      .then((authenticatedUser) => {
        if (!authenticatedUser) {
          res.status(401).json({ error: 'Falha na autenticação do usuário.' })
          return
        }
        req.githubName = authenticatedUser
        req.token = token as string
        return next()
      })
      .catch((error) => {
        console.error('Erro no middleware de autenticação:', error)
        res.status(500).json({ error: 'Erro interno no servidor.' })
        return
      })
    return
  }

  if (token && githubName) {
    req.token = token as string
    req.githubName = githubName as string
    return next()
  }

  res.status(400).json({ error: 'Parâmetros inválidos: forneça token ou githubName.' })
  return
}

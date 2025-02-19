// src/routes/githubRoutes.ts
import express from 'express'
import * as githubController from '../controllers/githubController'
import * as GithubMiddleware from '../middlewares/githubAPIHandler.middleware'

const router = express.Router()

// Rota para obter informações do repositório
router.get(
  '/repo/:username/:repo',
  GithubMiddleware.handleGitHubAuth,
  githubController.getRepoInsights,
)

export default router

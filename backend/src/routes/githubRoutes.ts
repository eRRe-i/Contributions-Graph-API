// src/routes/githubRoutes.ts
import express from 'express'
import * as githubController from '../controllers/githubController'

const router = express.Router()

// Rota para obter informações do repositório
router.get('/repo/:username/:repo', githubController.getRepoInsights)

// Rota para gerar gráficos
router.get('/repo/:username/:repo/chart', githubController.generateChart)

export default router

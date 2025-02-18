// src/app.ts
import express from 'express'
import cors from 'cors'

// Cria a instância do Express
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Rotas
import githubRoutes from './routes/githubRoutes'
app.use('/api/github', githubRoutes)

export default app

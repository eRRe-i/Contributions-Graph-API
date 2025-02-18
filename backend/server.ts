// server.ts
import express from 'express'
import dotenv from 'dotenv'

// Carrega variáveis de ambiente
dotenv.config()

// Importa a aplicação Express
import app from './src/app'

// Define a porta
const PORT: number = parseInt(process.env.PORT || '3000', 10)

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

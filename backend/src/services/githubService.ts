// src/services/githubService.ts
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
// Instância do Axios com autenticação
const githubClient = axios.create({
  baseURL: process.env.GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
})

// Interface para os dados do repositório
interface RepoData {
  stargazers_count: number
  forks_count: number
  subscribers_count: number
}

// Busca dados do repositório
export const fetchRepoData = async (username: string, repo: string): Promise<RepoData> => {
  const response = await githubClient.get(`/repos/${username}/${repo}`)
  return response.data
}

// Gera um gráfico com base nos dados do repositório
export const generateRepoChart = async (username: string, repo: string): Promise<Buffer> => {
  const repoData = await fetchRepoData(username, repo)

  // Dados para o gráfico
  const data = {
    labels: ['Stars', 'Forks', 'Watchers'],
    datasets: [
      {
        label: 'Repositório',
        data: [repoData.stargazers_count, repoData.forks_count, repoData.subscribers_count],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  // Configuração do gráfico
  const configuration = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `Insights do Repositório: ${repo}`,
        },
      },
    },
  }

  // Gera o gráfico como buffer
  // const chartJSNodeCanvas = new Canvas({ width: 800, height: 600 })
  // const buffer = await chartJSNodeCanvas.renderToBuffer(configuration)

  // return buffer
}

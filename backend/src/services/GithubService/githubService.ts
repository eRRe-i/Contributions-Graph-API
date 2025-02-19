import { ContributionDay, ContributionWeek } from '../../interfaces/contribution.interface'
import { config } from 'dotenv'

config()

async function getContributions(username: string) {
  const query = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                  }
                }
              }
            }
          }
        `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const data = await response.json()
  return data.data.user.contributionsCollection.contributionCalendar.weeks
}

async function getAuthenticatedUserInfo(token: string): Promise<string | null> {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
    }

    const userData = await response.json()
    return userData.login // Retorna o "githubName" (login) do usuário
  } catch (error) {
    console.error('Erro ao obter informações do usuário:', error)
    return null
  }
}

export { getContributions, getAuthenticatedUserInfo }

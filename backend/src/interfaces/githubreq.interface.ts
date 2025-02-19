import { Request } from 'express'

export interface GetGithubRequest extends Request {
  token: string
  githubName: string
}

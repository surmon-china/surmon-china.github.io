import { decode } from 'js-base64'
import { defineStore } from 'pinia'
import axios from '@/services/axios'
import * as CONFIG from '@/config'

const fetchGitHubProfileFileContent = <T>(filePath: string): Promise<T | null> => {
  const uid = CONFIG.GITHUB_UID
  const branch = `release`
  // for user client & GitHub Actions generate
  const raw = `https://raw.githubusercontent.com/${uid}/${uid}/${branch}/${filePath}`
  // for China user client & fallback
  const api = `https://api.github.com/repos/${uid}/${uid}/contents/${filePath}?ref=${branch}`
  return axios.get<never, T>(raw).catch(() => {
    return axios.get<never, { content: string; encoding: string }>(api).then((response) => {
      if (response.encoding === 'base64') {
        const decoded = decode(response.content)
        return filePath.endsWith('.json') ? JSON.parse(decoded) : decoded
      }
      return null
    })
  })
}

// https://github.com/surmon-china/surmon-china/blob/release/github.json
export interface GitHubAggregateData {
  userinfo: any
  repositories: Array<any>
  organizations: Array<any>
  statistics: any
}

// https://github.com/surmon-china/surmon-china/blob/release/npm.json
export interface NPMAggregateData {
  packages: Array<any>
  downloads: {
    [name: string]: number
  }
}

export const useGlobalStore = defineStore('global', {
  state: () => ({
    initialized: false,
    githubData: null as null | GitHubAggregateData,
    npmData: null as null | NPMAggregateData
  }),
  getters: {
    githubUserinfo: (state) => state.githubData?.userinfo,
    githubRepositories: (state) => state.githubData?.repositories || [],
    githubOrganizations: (state) => state.githubData?.organizations || [],
    npmPackages: (state) => state.npmData?.packages || [],
    npmPackagesDownloadsMap: (state) => {
      const downloads = state.npmData?.downloads || {}
      return new Map<string, number>(
        Object.keys(downloads).map((item) => [item, downloads[item]])
      )
    },
    githubOwnRepositories(): any[] {
      return this.githubRepositories
        .filter((repository: any) => !repository.fork)
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    },
    githubNPMRepositories(): any[] {
      return this.githubRepositories.filter((repository: any) => {
        return Boolean(this.getRepositoryNPMPackage(repository.name))
      })
    },
    getGitHubRepositoryDetail(): any {
      return (repositoryName: string) => {
        return this.githubRepositories.find(
          (repository) => repository.name === repositoryName
        )
      }
    },
    getRepositoryNPMPackage() {
      return (repositoryName: any): null | any => {
        const targetRepository = this.getGitHubRepositoryDetail(repositoryName)
        if (targetRepository) {
          return this.npmPackages.find((pkg) => {
            return (
              pkg.package.name === repositoryName ||
              pkg.package.links.repository === targetRepository.html_url
            )
          })
        }
      }
    }
  },
  actions: {
    fetchGitHubAggregateData() {
      return fetchGitHubProfileFileContent<GitHubAggregateData>('github.json').then(
        (data) => {
          this.githubData = data
        }
      )
    },
    fetchNPMAggregateData() {
      return fetchGitHubProfileFileContent<NPMAggregateData>('npm.json').then((data) => {
        this.npmData = data
      })
    },
    init() {
      return Promise.all([
        this.fetchGitHubAggregateData(),
        this.fetchNPMAggregateData()
      ]).finally(() => {
        this.initialized = true
      })
    }
  }
})

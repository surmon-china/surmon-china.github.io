import { decode } from 'js-base64'
import { defineStore } from 'pinia'
import { GITHUB_USERNAME } from '@/config'
import { GitHubAggregateData, GitHubRepository, NPMAggregateData } from './type'
import axios from '@/services/axios'

const fetchGitHubProfileFileContent = <T>(filePath: string): Promise<T | null> => {
  const user = GITHUB_USERNAME
  const branch = `release`
  // for user client & GitHub Actions generate
  const raw = `https://raw.githubusercontent.com/${user}/${user}/${branch}/${filePath}`
  // for China user client & fallback
  const api = `https://api.github.com/repos/${user}/${user}/contents/${filePath}?ref=${branch}`
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

export const useGlobalStore = defineStore('global', {
  state: () => ({
    initialized: false,
    githubData: null as null | GitHubAggregateData,
    npmData: null as null | NPMAggregateData
  }),
  getters: {
    // GitHub
    githubUserinfo: (state) => state.githubData?.userinfo,
    githubRepositories: (state) => state.githubData?.repositories ?? [],
    githubOrganizations: (state) => state.githubData?.organizations ?? [],
    githubOwnRepositories(): GitHubRepository[] {
      return this.githubRepositories
        .filter((repository) => !repository.fork)
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    },
    getGitHubRepositoryDetail() {
      return (repositoryName: string) => {
        return this.githubRepositories.find((repository) => repository.name === repositoryName)
      }
    },
    // NPM
    npmPackages: (state) => state.npmData?.packages ?? [],
    npmPackagesDownloadsMap: (state) => {
      const downloads = state.npmData?.downloads ?? {}
      return new Map<string, number>(Object.keys(downloads).map((item) => [item, downloads[item]]))
    },
    getNPMPackagesDownloadsTotal() {
      return (packages: string[]) => {
        return packages.reduce((total, pkg) => {
          const downloads = this.npmPackagesDownloadsMap.get(pkg) ?? 0
          return downloads + total
        }, 0)
      }
    }
  },
  actions: {
    fetchGitHubAggregateData() {
      // https://github.com/surmon-china/surmon-china/blob/release/github.json
      return fetchGitHubProfileFileContent<GitHubAggregateData>('github.json').then((data) => {
        this.githubData = data
      })
    },
    fetchNPMAggregateData() {
      // https://github.com/surmon-china/surmon-china/blob/release/npm.json
      return fetchGitHubProfileFileContent<NPMAggregateData>('npm.json').then((data) => {
        this.npmData = data
      })
    },
    init() {
      return Promise.all([this.fetchGitHubAggregateData(), this.fetchNPMAggregateData()]).finally(() => {
        this.initialized = true
      })
    }
  }
})

/**
 * @file HTTP service
 * @module service/http
 * @author Surmon <https://github.com/surmon-china>
 */

import axios from 'axios'
import CONFIG from '@/config'
import * as cache from './cache'

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Fetch failed:', error)
    return Promise.reject(error)
  }
)

const MIN_1 = 60 * 1000
const MIN_3 = MIN_1 * 3
const HOUR_1 = MIN_1 * 60
const DAY_1 = HOUR_1 * 24

export function getUserInfo(): Promise<$TODO> {
  return cache.promise({
    key: 'userInfo',
    ttl: MIN_3,
    promise() {
      return axios
        .get(`https://api.github.com/users/${CONFIG.GITHUB_UID}`)
        .then(response => response.data)
    }
  })
}

export function getUserDetail(): Promise<$TODO> {
  return cache.promise({
    key: `user-detail`,
    ttl: HOUR_1,
    promise() {
      return axios
        .post('https://api.github.com/graphql', {
          query: `
            query {
              user(login: "${CONFIG.GITHUB_UID}") {
                name,
                bio,
                sponsorshipsAsMaintainer(first: 0) {
                  nodes {
                    id,
                    sponsor {
                      name
                    }
                  },
                  totalCount
                }
              }
            }
          `
        })
        .then(response => response.data.objects)
    }
  })
}

export function getRepositories(): Promise<$TODO[]> {
  return cache.promise({
    key: 'repositories',
    ttl: MIN_3,
    promise() {
      return axios
        .get(`https://api.github.com/users/${CONFIG.GITHUB_UID}/repos?per_page=1000`)
        .then(response => response.data)
    }
  })
}

// 由于与 getRepositories 返回的数据始终一致，故基本不使用
export function getRepositorieDetail(repoName: string): Promise<$TODO[]> {
  return cache.promise({
    key: `repositorie-detail-${repoName}`,
    ttl: MIN_3,
    promise() {
      return axios
        .get(`https://api.github.com/repos/${CONFIG.GITHUB_UID}/${repoName}`)
        .then(response => response.data)
    }
  })
}

export function getOriginations(): Promise<$TODO[]> {
  return cache.promise({
    key: 'originations',
    ttl: MIN_3,
    promise() {
      return axios
        .get(`https://api.github.com/users/${CONFIG.GITHUB_UID}/orgs`)
        .then(response => response.data)
    }
  })
}

export function getFileContent(filePath: string): Promise<$TODO> {
  return cache.promise({
    key: `file-content-${filePath}`,
    ttl: MIN_3,
    promise() {
      return axios
        .get(`https://api.github.com/repos/${CONFIG.GITHUB_UID}/${CONFIG.PROJECT_NAME}/contents/${filePath}`)
        .then(response => response.data)
    }
  })
}

export function getNPMPackages(): Promise<$TODO> {
  return cache.promise({
    key: `npm-packages`,
    ttl: MIN_3,
    promise() {
      return axios
        .get(`https://registry.npmjs.com/-/v1/search?text=maintainer:${CONFIG.NPM_UID}`)
        .then(response => response.data.objects)
    }
  })
}

export function getNPMPackagesDownloads(repoName: string): Promise<$TODO> {
  const now = new Date()
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  return cache.promise({
    key: `npm-package-downloads-${today}-${repoName}`,
    ttl: DAY_1,
    promise() {
      return axios
        .get(`https://api.npmjs.org/downloads/point/2015-01-10:${today}/${repoName}`)
        .then(response => response.data)
    }
  })
}

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

export function getUserInfo(): Promise<$TODO> {
  return cache.promise({
    key: 'userInfo',
    ttl: 60 * 3 * 1000,
    promise() {
      return axios
        .get(`https://api.github.com/users/${CONFIG.GITHUB_UID}`)
        .then(response => response.data)
    }
  })
}

export function getRepositories(): Promise<$TODO[]> {
  return cache.promise({
    key: 'repositories',
    ttl: 60 * 3 * 1000,
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
    ttl: 60 * 3 * 1000,
    promise() {
      return axios
        .get(`https://api.github.com/repos/${CONFIG.GITHUB_UID}/${repoName}`)
        .then(response => response.data)
    }
  })
}

export function getOriginations(): Promise<$TODO[]> {
  return axios
    .get(`https://api.github.com/users/${CONFIG.GITHUB_UID}/orgs`)
    .then(response => response.data)
}

export function getFileContent(filePath: string): Promise<$TODO> {
  return cache.promise({
    key: `file-content-${filePath}`,
    ttl: 60 * 3 * 1000,
    promise() {
      return axios
        .get(`https://api.github.com/repos/${CONFIG.GITHUB_UID}/${CONFIG.PROJECT_NAME}/contents/${filePath}`)
        .then(response => response.data)
    }
  })
}
 
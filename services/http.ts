
import axios from 'axios'
import * as cache from './cache'

axios.interceptors.response.use(
  response => response,
  error => {
    console.error('Fetch failed:', error)
    return Promise.reject(error)
  }
)

export function getUserInfo(uid: string): Promise<$TODO> {
  return cache.promise({
    key: 'userInfo',
    ttl: 60 * 3 * 1000,
    promise() {
      return axios
        .get(`https://api.github.com/users/${uid}`)
        .then(response => response.data)
    }
  })
}

export function getRepositories(uid: string): Promise<$TODO[]> {
  return cache.promise({
    key: 'repositories',
    ttl: 60 * 3 * 1000,
    promise() {
      return axios
        .get(`https://api.github.com/users/${uid}/repos?per_page=1000`)
        .then(response => response.data)
    }
  })
}

export function getOriginations(uid: string): Promise<$TODO[]> {
  return axios
    .get(`https://api.github.com/users/${uid}/orgs`)
    .then(response => response.data)
}

export function getFileContent(uid: string, repoName: string, filePath: string): Promise<$TODO> {
  return axios
    .get(`https://api.github.com/repos/${uid}/${repoName}/contents/${filePath}`)
    .then(response => response.data)
}
 
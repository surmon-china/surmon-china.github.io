import { GITHUB_UID, V2_ONLINE_URL, V1_LEGACY_URL } from '@/config'

export const getPageURL = (route: string) => {
  return `${V2_ONLINE_URL}${route}`
}

export const getLegacyPageURL = (route: string) => {
  return `${V1_LEGACY_URL}${route}`
}

export function getNPMHomepageURL(packageName: string) {
  return `https://www.npmjs.com/package/${packageName}`
}

export function getGitHubRepositoryURL(repository: string) {
  return `https://github.com/${GITHUB_UID}/${repository}`
}

export function getGitHubFileSourceURL(repository: string, filepath: string) {
  return `https://github.com/${GITHUB_UID}/${repository}/tree/source${filepath}`
}

// https://stackoverflow.com/questions/68839829/how-can-i-get-the-open-graph-image-for-a-github-repository
export function getGitHubOpenGraphImageURL(repository: string, hash?: string) {
  const hashValue = hash ?? String(Date.now())
  return `https://opengraph.githubassets.com/${hashValue}/${GITHUB_UID}/${repository}`
}
import { GITHUB_UID } from '@/config'

export function getNPMHomepageURL(packageName: string) {
  return `https://www.npmjs.com/package/${packageName}`
}
export function getGitHubRepositoryURL(repository: string) {
  return `https://github.com/${GITHUB_UID}/${repository}`
}

export function getGitHubFileSourceURL(repository: string, filepath: string) {
  return `https://github.com/${GITHUB_UID}/${repository}/tree/source${filepath}`
}

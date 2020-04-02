/**
 * @file Url transformer
 * @author Surmon <https://github.com/surmon-china>
 */

export function getUserPageUrl(username: string) {
  return `https://github.com/${username}`
}

export function getFollowersUrl(username: string) {
  return `${getUserPageUrl(username)}?tab=followers`
}

export function getSponsorsUrl(username: string) {
  return `https://github.com/sponsors/${username}`
}

export function getRepositorieUrl(username: string, repositorieName: string) {
  return `https://github.com/${username}/${repositorieName}`
}

export function getOrganizationUrl(organizationName: string) {
  return `https://github.com/${organizationName}`
}

export function getGitFileSourceUrl(username: string, repositorieName: string, path: string) {
  return `https://github.com/${username}/${repositorieName}/tree/source/${path}`
}

export function getNPMUrl(repositorieName: string) {
  return `https://www.npmjs.com/package/${repositorieName}`
}

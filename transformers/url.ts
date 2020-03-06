
export function getUserPageUrl(username: string) {
  return `https://github.com/${username}`
}

export function getSponsorUrl(username: string) {
  return `https://github.com/sponsors/${username}`
}

export function getRepositorieUrl(username: string, repositorieName: string) {
  return `https://github.com/${username}/${repositorieName}`
}
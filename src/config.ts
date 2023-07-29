import PROJECTS_JSON from '../projects.json'

export const PROJECTS = PROJECTS_JSON
export const NPM_USERNAME = 'surmon'
export const TWITTER_USERNAME = 'surmon7788'
export const GITHUB_USERNAME = 'surmon-china'
export const GITHUB_PROJECT_NAME = 'surmon-china.github.io'
export const GITHUB_PAGES_ROOT_DOMAIN = 'surmon.me'
export const GITHUB_USER_URL = `https://github.com/${GITHUB_USERNAME}`
export const GITHUB_SPONSORS_URL = `https://github.com/sponsors/${GITHUB_USERNAME}`
export const IMAGE_AD = { image: '', url: '' }
export const SWIPER_ADS = [{ image: '', url: '' }]

// https://www.jsdelivr.com/github
export const CDN_URL_PREFIX = `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${GITHUB_PROJECT_NAME}@release/`
export const V1_LEGACY_URL = 'https://v1.github.surmon.me/'
export const V2_ONLINE_URL = 'https://github.surmon.me/'

export const GOOGLE_ADSENSE_CLIENT_ID = 'ca-pub-4710915636313788'

export const APP_META = {
  title: `Surmon's open-source projects`,
  description: `Surmon's GitHub repository pages.`,
  keywords: [GITHUB_USERNAME, ...Object.values(PROJECTS_JSON).map((p) => p.repository)].join(',')
}

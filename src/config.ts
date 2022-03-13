/**
 * @file App config
 * @module app.config
 * @author Surmon <https://github.com/surmon-china>
 */

import { RouteName } from './routes'
import packageJSON from '../package.json'

export const PROJECT_URL = packageJSON.homepage

export const NPM_UID = 'surmon'
export const GITHUB_UID = 'surmon-china'
export const GITHUB_PROJECT_NAME = 'surmon-china.github.io'
export const GITHUB_USER_URL = `https://github.com/${GITHUB_UID}`
export const GITHUB_FOLLOWERS_URL = `https://github.com/${GITHUB_UID}?tab=followers`
export const GITHUB_SPONSORS_URL = `https://github.com/sponsors/${GITHUB_UID}`
export const GITHUB_DATA_JSON_URL_PATH = `https://raw.githubusercontent.com/${GITHUB_UID}/${GITHUB_UID}/release`
export const GOOGLE_ADSENSE_CLIENT = 'ca-pub-4710915636313788'
export const IMAGE_AD = { image: '', url: '' }
export const SWIPER_ADS = [{ image: '', url: '' }]

export const V1_LEGACY_URL = 'https://v1.github.surmon.me/'

export const APP_META = {
  title: `Surmon's open-source projects`,
  description: `Surmon's GitHub repository pages.`,
  keywords: [GITHUB_UID, ...Object.values(RouteName)].join(',')
}

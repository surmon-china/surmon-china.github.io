
import { getSponsorUrl, getUserPageUrl } from './transformers/url'

export const GITHUB_UID = 'surmon-china'
export const GITHUB_HOMEPAGE_URL = getUserPageUrl(GITHUB_UID)
export const GITHUB_SPONSOR_URL = getSponsorUrl(GITHUB_UID)

export enum GitHubRepositorieIDs {
  Naivebayes = 'naivebayes',
  VueQuillEditor = 'vue-quill-editor',
  VueTouchRipple = 'vue-touch-ripple',
  NgxQuillEditor = 'ngx-quill-editor',
}

export const ALIYUN_PARTER_URL_1 = 'https://www.aliyun.com/minisite/goods?userCode=pu7fghvl'
export const ALIYUN_PARTER_URL_2 = 'https://www.aliyun.com/acts/hotsale?userCode=pu7fghvl'
export const ALIYUN_ADS = [
  {
    image: '/images/mammon/aliyun-banner-1.jpg',
    url: ALIYUN_PARTER_URL_1
  },
  {
    image: '/images/mammon/aliyun-banner-3.jpg',
    url: ALIYUN_PARTER_URL_2
  }
]

export default Object.freeze({
  GITHUB_UID,
  GITHUB_HOMEPAGE_URL,
  GITHUB_SPONSOR_URL,

  ALIYUN_PARTER_URL_1,
  ALIYUN_PARTER_URL_2,
  ALIYUN_ADS
})
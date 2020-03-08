/**
 * @file vue-google-adsense
 * @module plugins/vue-google-adsense
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue from 'vue'
import Ads from 'vue-google-adsense'

import Adsense1 from '@/components/mammon/adsense-responsive-1.vue'
import Adsense2 from '@/components/mammon/adsense-responsive-2.vue'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-4710915636313788' })

Vue.component(Adsense1.name, Adsense1)
Vue.component(Adsense2.name, Adsense2)

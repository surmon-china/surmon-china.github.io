/**
 * @file vue-google-adsense
 * @module plugins/vue-google-adsense
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue from 'vue'
import Ads from 'vue-google-adsense'
import { GOOGLE_ADSENSE_CLIENT } from '@/config'

import Adsense1 from '@/components/mammon/adsense-responsive-1.vue'
import Adsense2 from '@/components/mammon/adsense-responsive-2.vue'
import Adsense3 from '@/components/mammon/adsense-responsive-3.vue'

[Adsense1, Adsense2, Adsense3].forEach(ga => {
  Vue.component(ga.name, ga)
})

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
Vue.use(Ads.AutoAdsense, { adClient: GOOGLE_ADSENSE_CLIENT })

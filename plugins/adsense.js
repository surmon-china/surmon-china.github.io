import Vue from 'vue'
import Ads from 'vue-google-adsense'

import Adsense1 from '~/components/adsense/responsive-1'
import Adsense2 from '~/components/adsense/responsive-2'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.component(Adsense1.name, Adsense1)
Vue.component(Adsense2.name, Adsense2)
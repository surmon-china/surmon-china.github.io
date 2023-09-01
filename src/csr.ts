import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import highlight from './plugins/highlight'
import adsense from './composables/adsense'
import { Theme, getLocalTheme } from './composables/theme'
import { GOOGLE_ADSENSE_CLIENT_ID } from './config'
import { createUniversalApp } from './main'

import '@/styles/app.scss'

const { app, router, visitor } = createUniversalApp({
  // MARK: use `createApp`, not `createSSRApp`, to avoid hydrate
  appCreator: createApp,
  routerHistory: createWebHistory(),
  initTheme: getLocalTheme() ?? Theme.System,
  language: navigator.language,
  userAgent: navigator.userAgent
})

app.use(highlight)
app.use(adsense, { ID: GOOGLE_ADSENSE_CLIENT_ID, enabledAutoAD: false })
visitor.resetStateOnClient()

router.isReady().finally(() => {
  app.mount('#app', true).$nextTick(() => {
    console.log('App mounted:', app)
  })
})

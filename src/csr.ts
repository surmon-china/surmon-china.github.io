import { createApp, computed } from 'vue'
import { createWebHistory } from 'vue-router'
import highlight, { getHighlightThemeStyle } from './plugins/highlight'
import adsense from './composables/adsense'
import { getLocalTheme, Theme } from './composables/theme'
import { GOOGLE_ADSENSE_CLIENT } from './config'
import { createUniversalApp } from './main'

const { app, router, meta, theme, visitor } = createUniversalApp({
  // MARK: use `createApp`, not `createSSRApp`, to avoid hydrate
  appCreator: createApp,
  routerHistory: createWebHistory(),
  initTheme: getLocalTheme(),
  language: navigator.language,
  userAgent: navigator.userAgent
})

// highlight theme style
meta.addHeadObjs(
  computed(() => ({
    style: [
      {
        key: 'highlight',
        children: getHighlightThemeStyle(theme.theme.value === Theme.Dark)
      }
    ]
  }))
)

app.use(highlight)
app.use(adsense, { ID: GOOGLE_ADSENSE_CLIENT, enabledAutoAD: false })
visitor.resetStateOnClient()

router.isReady().finally(() => {
  app.mount('#app').$nextTick(() => {
    console.log('App mounted:', app)
  })
})

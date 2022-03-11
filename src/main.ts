import { createApp, computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import adsense from './composables/adsense'
import { createMeta } from './composables/meta'
import { createTheme, getLocalTheme, Theme } from './composables/theme'
import highlight, { getHighlightThemeStyle } from './plugins/highlight'
import { routes } from './routes'
import App from './app.vue'
import { GOOGLE_ADSENSE_CLIENT } from './config'

import './styles/app.scss'

const app = createApp(App)
const meta = createMeta()
const theme = createTheme(getLocalTheme())
const pinia = createPinia()
const router = createRouter({
  routes,
  strict: true,
  history: createWebHistory(),
  linkActiveClass: 'link-active',
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
})

meta.addHeadObjs(
  computed(() => ({
    style: [
      {
        key: 'markdown',
        children: getHighlightThemeStyle(theme.theme.value === Theme.Dark)
      }
    ]
  }))
)

app.use(meta)
app.use(theme)
app.use(pinia)
app.use(router)
app.use(highlight)
app.use(adsense, { ID: GOOGLE_ADSENSE_CLIENT, enabledAutoAD: false })
app.mount('#app')

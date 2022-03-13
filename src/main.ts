import { CreateAppFunction } from 'vue'
import { createRouter, RouterHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createMeta } from './composables/meta'
import { createVisitor } from './composables/visitor'
import { createTheme, Theme } from './composables/theme'
import { routes } from './routes'
import App from './app.vue'

export interface AppCreatorOptions {
  appCreator: CreateAppFunction<Element>
  routerHistory: RouterHistory
  initTheme: Theme
  language: string
  userAgent: string
}

export const createUniversalApp = (options: AppCreatorOptions) => {
  const app = options.appCreator(App)
  const pinia = createPinia()
  const meta = createMeta()
  const theme = createTheme(options.initTheme)
  const visitor = createVisitor({
    language: options.language,
    userAgent: options.userAgent
  })
  const router = createRouter({
    routes,
    strict: true,
    history: options.routerHistory,
    linkActiveClass: 'link-active',
    scrollBehavior: () => ({ top: 0, behavior: 'smooth' })
  })

  app.use(router)
  app.use(pinia)
  app.use(meta)
  app.use(theme)
  app.use(visitor)

  return {
    app,
    router,
    pinia,
    meta,
    theme,
    visitor
  }
}

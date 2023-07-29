import { CreateAppFunction } from 'vue'
import { createRouter, RouterHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import { createVisitor } from './composables/visitor'
import { createTheme, Theme } from './composables/theme'
import UlinkComponent from './components/common/ulink'
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
  const head = createHead()
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
  app.use(head)
  app.use(theme)
  app.use(visitor)
  app.component(UlinkComponent.name, UlinkComponent)

  return {
    app,
    router,
    pinia,
    head,
    theme,
    visitor
  }
}

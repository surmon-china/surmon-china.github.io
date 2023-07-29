import { createSSRApp } from 'vue'
import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { renderSSRHead } from '@unhead/ssr'
import { Theme } from './composables/theme'
import { useGlobalStore } from './store'
import { createUniversalApp } from './main'

export const render = async (url: string) => {
  // 1. app
  const { app, router, pinia, head } = createUniversalApp({
    appCreator: createSSRApp,
    routerHistory: createMemoryHistory(),
    initTheme: Theme.Dark,
    language: '',
    userAgent: ''
  })

  // 2. router
  router.push(url)
  await router.isReady()

  // 3. store
  const store = useGlobalStore(pinia)
  await store.init()

  // 4. render
  const ctx = {}
  const appHTML = await renderToString(app, ctx)

  const heads = await renderSSRHead(head)

  return { appHTML, heads }
}

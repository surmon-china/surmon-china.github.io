import { createSSRApp } from 'vue'
import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createHead, renderSSRHead } from '@unhead/vue/server'
import { Theme } from './composables/theme'
import { useGlobalStore } from './store'
import { createUniversalApp } from './main'

export const render = async (url: string, storeCache?: any) => {
  // 1. app
  const { app, router, pinia, head } = createUniversalApp({
    appCreator: createSSRApp,
    headCreator: createHead,
    routerHistory: createMemoryHistory(),
    initialTheme: Theme.Light,
    language: '',
    userAgent: ''
  })

  // 2. router
  router.push(url)
  await router.isReady()

  // 3. store
  const store = useGlobalStore(pinia)
  if (storeCache) {
    pinia.state.value = storeCache
  } else {
    await store.init()
  }

  // 4. render
  const appHTML = await renderToString(app)
  const heads = await renderSSRHead(head)

  return { appHTML, heads, storeCache: pinia.state.value }
}

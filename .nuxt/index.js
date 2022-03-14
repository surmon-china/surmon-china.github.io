import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_highlight_77f34940 from 'nuxt_plugin_highlight_77f34940' // Source: ../plugins/highlight (mode: 'all')
import nuxt_plugin_vuecompositionapi_5f72e288 from 'nuxt_plugin_vuecompositionapi_5f72e288' // Source: ../plugins/vue-composition-api (mode: 'all')
import nuxt_plugin_vuegoogleadsense_e34a941c from 'nuxt_plugin_vuegoogleadsense_e34a941c' // Source: ../plugins/vue-google-adsense (mode: 'client')
import nuxt_plugin_vuequilleditor_59693810 from 'nuxt_plugin_vuequilleditor_59693810' // Source: ../plugins/vue-quill-editor (mode: 'client')
import nuxt_plugin_vueawesomeswiper_0f4ed586 from 'nuxt_plugin_vueawesomeswiper_0f4ed586' // Source: ../plugins/vue-awesome-swiper (mode: 'client')
import nuxt_plugin_vuecodemirror_945ffcf2 from 'nuxt_plugin_vuecodemirror_945ffcf2' // Source: ../plugins/vue-codemirror (mode: 'client')
import nuxt_plugin_vuedragzone_0171cbaa from 'nuxt_plugin_vuedragzone_0171cbaa' // Source: ../plugins/vue-drag-zone (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"GitHub","titleTemplate":"%s | Surmon's projects","meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"http-equiv":"x-dns-prefetch-control","content":"on"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"},{"hid":"keywords","name":"keywords","content":"surmon-china,vue components example,vue swiper example,vue text editor"},{"hid":"description","name":"description","content":"Surmon's github repository pages."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (typeof nuxt_plugin_highlight_77f34940 === 'function') {
    await nuxt_plugin_highlight_77f34940(app.context, inject)
  }

  if (typeof nuxt_plugin_vuecompositionapi_5f72e288 === 'function') {
    await nuxt_plugin_vuecompositionapi_5f72e288(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuegoogleadsense_e34a941c === 'function') {
    await nuxt_plugin_vuegoogleadsense_e34a941c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuequilleditor_59693810 === 'function') {
    await nuxt_plugin_vuequilleditor_59693810(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomeswiper_0f4ed586 === 'function') {
    await nuxt_plugin_vueawesomeswiper_0f4ed586(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuecodemirror_945ffcf2 === 'function') {
    await nuxt_plugin_vuecodemirror_945ffcf2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuedragzone_0171cbaa === 'function') {
    await nuxt_plugin_vuedragzone_0171cbaa(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }

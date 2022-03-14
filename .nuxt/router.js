import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _419edfeb = () => interopDefault(import('../pages/naivebayes.vue' /* webpackChunkName: "pages/naivebayes" */))
const _7af743de = () => interopDefault(import('../pages/vue-awesome-swiper.vue' /* webpackChunkName: "pages/vue-awesome-swiper" */))
const _428c535b = () => interopDefault(import('../pages/vue-codemirror.vue' /* webpackChunkName: "pages/vue-codemirror" */))
const _5832d1f4 = () => interopDefault(import('../pages/vue-drag-zone.vue' /* webpackChunkName: "pages/vue-drag-zone" */))
const _29215e64 = () => interopDefault(import('../pages/vue-quill-editor.vue' /* webpackChunkName: "pages/vue-quill-editor" */))
const _1280992d = () => interopDefault(import('../pages/vue-touch-ripple.vue' /* webpackChunkName: "pages/vue-touch-ripple" */))
const _3066e0ba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/naivebayes",
    component: _419edfeb,
    name: "naivebayes"
  }, {
    path: "/vue-awesome-swiper",
    component: _7af743de,
    name: "vue-awesome-swiper"
  }, {
    path: "/vue-codemirror",
    component: _428c535b,
    name: "vue-codemirror"
  }, {
    path: "/vue-drag-zone",
    component: _5832d1f4,
    name: "vue-drag-zone"
  }, {
    path: "/vue-quill-editor",
    component: _29215e64,
    name: "vue-quill-editor"
  }, {
    path: "/vue-touch-ripple",
    component: _1280992d,
    name: "vue-touch-ripple"
  }, {
    path: "/",
    component: _3066e0ba,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

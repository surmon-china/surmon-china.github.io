import { RouteRecordRaw } from 'vue-router'

export enum RouteName {
  Readme = 'readme',
  Naivebayes = 'naivebayes',
  VueAwesomeSwiper = 'vue-awesome-swiper',
  VueQuillEditor = 'vue-quill-editor',
  VueVideoPlayer = 'vue-video-player',
  VueCodemirror = 'vue-codemirror',
  VueTouchRipple = 'vue-touch-ripple',
  VueDragZone = 'vue-drag-zone'
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: `/` + RouteName.Readme,
    name: RouteName.Readme,
    component: () => import('@/pages/readme.vue')
  },
  {
    path: `/` + RouteName.Naivebayes,
    name: RouteName.Naivebayes,
    component: () => import('@/pages/naivebayes.vue')
  },
  {
    path: `/` + RouteName.VueAwesomeSwiper,
    name: RouteName.VueAwesomeSwiper,
    component: () => import('@/pages/vue-awesome-swiper.vue')
  },
  {
    path: `/` + RouteName.VueCodemirror,
    name: RouteName.VueCodemirror,
    component: () => import('@/pages/vue-codemirror.vue')
  },
  {
    path: `/` + RouteName.VueDragZone,
    name: RouteName.VueDragZone,
    component: () => import('@/pages/vue-drag-zone.vue')
  },
  {
    path: `/` + RouteName.VueQuillEditor,
    name: RouteName.VueQuillEditor,
    component: () => import('@/pages/vue-quill-editor.vue')
  },
  {
    path: `/` + RouteName.VueTouchRipple,
    name: RouteName.VueTouchRipple,
    component: () => import('@/pages/vue-touch-ripple.vue')
  },
  {
    name: 'error',
    path: '/:error(.*)',
    component: () => import('@/pages/home.vue')
  }
]

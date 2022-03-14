import type { RouteRecordRaw } from 'vue-router'

export enum RouteRepoID {
  Readme = 'README.md',
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
    name: 'home',
    path: '/',
    component: () => import('@/pages/home.vue')
  },
  {
    name: RouteRepoID.Readme,
    path: `/readme-md`,
    component: () => import('@/pages/readme-md.vue')
  },
  {
    name: RouteRepoID.Naivebayes,
    path: `/naivebayes`,
    component: () => import('@/pages/naivebayes.vue')
  },
  {
    name: RouteRepoID.VueAwesomeSwiper,
    path: `/` + RouteRepoID.VueAwesomeSwiper,
    component: () => import('@/pages/vue-awesome-swiper.vue')
  },
  {
    name: RouteRepoID.VueCodemirror,
    path: `/` + RouteRepoID.VueCodemirror,
    component: () => import('@/pages/vue-codemirror.vue')
  },
  {
    name: RouteRepoID.VueDragZone,
    path: `/` + RouteRepoID.VueDragZone,
    component: () => import('@/pages/vue-drag-zone.vue')
  },
  {
    name: RouteRepoID.VueQuillEditor,
    path: `/` + RouteRepoID.VueQuillEditor,
    component: () => import('@/pages/vue-quill-editor.vue')
  },
  {
    name: RouteRepoID.VueTouchRipple,
    path: `/` + RouteRepoID.VueTouchRipple,
    component: () => import('@/pages/vue-touch-ripple.vue')
  },
  {
    name: 'error',
    path: '/:error(.*)',
    component: () => import('@/pages/home.vue')
  }
]

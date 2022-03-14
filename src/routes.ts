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
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue')
  },
  {
    path: `/readme-md`,
    name: RouteRepoID.Readme,
    component: () => import('@/pages/readme-md.vue')
  },
  {
    path: `/` + RouteRepoID.Naivebayes,
    name: RouteRepoID.Naivebayes,
    component: () => import('@/pages/naivebayes.vue')
  },
  {
    path: `/` + RouteRepoID.VueAwesomeSwiper,
    name: RouteRepoID.VueAwesomeSwiper,
    component: () => import('@/pages/vue-awesome-swiper.vue')
  },
  {
    path: `/` + RouteRepoID.VueCodemirror,
    name: RouteRepoID.VueCodemirror,
    component: () => import('@/pages/vue-codemirror.vue')
  },
  {
    path: `/` + RouteRepoID.VueDragZone,
    name: RouteRepoID.VueDragZone,
    component: () => import('@/pages/vue-drag-zone.vue')
  },
  {
    path: `/` + RouteRepoID.VueQuillEditor,
    name: RouteRepoID.VueQuillEditor,
    component: () => import('@/pages/vue-quill-editor.vue')
  },
  {
    path: `/` + RouteRepoID.VueTouchRipple,
    name: RouteRepoID.VueTouchRipple,
    component: () => import('@/pages/vue-touch-ripple.vue')
  },
  {
    name: 'error',
    path: '/:error(.*)',
    component: () => import('@/pages/home.vue')
  }
]

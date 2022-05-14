import type { RouteRecordRaw } from 'vue-router'
import { Repository } from './config'

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/home.vue')
  },
  {
    name: Repository.Readme,
    path: `/readme-md`,
    component: () => import('@/pages/readme-md.vue')
  },
  {
    name: Repository.NaiveBayes,
    path: `/naivebayes`,
    component: () => import('@/pages/naivebayes.vue')
  },
  {
    name: Repository.VueAwesomeSwiper,
    path: '/' + Repository.VueAwesomeSwiper,
    component: () => import('@/pages/vue-awesome-swiper.vue')
  },
  {
    name: Repository.VueCodemirror,
    path: '/' + Repository.VueCodemirror,
    component: () => import('@/pages/vue-codemirror.vue')
  },
  {
    name: Repository.VueDragZone,
    path: '/' + Repository.VueDragZone,
    component: () => import('@/pages/vue-drag-zone.vue')
  },
  {
    name: Repository.VueQuillEditor,
    path: '/' + Repository.VueQuillEditor,
    component: () => import('@/pages/vue-quill-editor.vue')
  },
  {
    name: Repository.VueTouchRipple,
    path: '/' + Repository.VueTouchRipple,
    component: () => import('@/pages/vue-touch-ripple.vue')
  },
  {
    name: 'error',
    path: '/:error(.*)',
    component: () => import('@/pages/home.vue')
  }
]

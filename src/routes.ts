import type { RouteRecordRaw } from 'vue-router'
import { PROJECTS } from './config'

const pageImporters = import.meta.glob<{ default: any }>('@/pages/*.vue')

const homeRoute: RouteRecordRaw = {
  name: 'home',
  path: '/',
  component: pageImporters['/src/pages/home.vue']
}

const errorRoute: RouteRecordRaw = {
  name: 'error',
  path: '/:error(.*)',
  component: pageImporters['/src/pages/home.vue']
}

const projectRoutes = Object.values(PROJECTS).map<RouteRecordRaw>((project) => ({
  name: project.route,
  path: '/' + project.route,
  component: pageImporters[`/src/pages/${project.route}.vue`]
}))

export const routes: RouteRecordRaw[] = [homeRoute, ...projectRoutes, errorRoute]

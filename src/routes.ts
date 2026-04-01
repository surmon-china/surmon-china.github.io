import type { RouteRecordRaw } from 'vue-router'
import { PROJECTS } from './config'

const pageModules = import.meta.glob<{ default: any }>('@/pages/*.vue')

const homeRoute: RouteRecordRaw = {
  name: 'home',
  path: '/',
  component: pageModules['/src/pages/home.vue']
}

const errorRoute: RouteRecordRaw = {
  name: 'error',
  path: '/:error(.*)',
  component: pageModules['/src/pages/home.vue']
}

const projectRoutes = Object.values(PROJECTS).map<RouteRecordRaw>((project) => ({
  name: project.route,
  path: '/' + project.route,
  component: pageModules[`/src/pages/${project.route}.vue`]
}))

export const routes: RouteRecordRaw[] = [homeRoute, ...projectRoutes, errorRoute]

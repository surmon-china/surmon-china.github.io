import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Example from './components/Example.vue'
import RouteView from './components/RouteView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/examples',
      name: 'examples',
      component: RouteView,
      children: [
        {
          path: 'vue-awesome-swiper',
          name: 'vue-awesome-swiper',
          component: () => import('./projects/vue-awesome-swiper'),
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

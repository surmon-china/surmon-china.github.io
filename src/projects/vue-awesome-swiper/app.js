
import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'
// import VueAwesomeSwiperSSR from '@components/vue-awesome-swiper/src/ssr.js'
// import VueAwesomeSwiper from '@components/vue-awesome-swiper/src/index.js'
import VueAwesomeSwiperSSR from '@components/vue-awesome-swiper/dist/ssr'
import VueAwesomeSwiper from '@components/vue-awesome-swiper/dist/vue-awesome-swiper.js'

import 'swiper/dist/css/swiper.css'
console.log('VueAwesomeSwiper', VueAwesomeSwiper)
Vue.use(VueAwesomeSwiper, defaultOptions)
Vue.use(VueAwesomeSwiperSSR, defaultOptions)

const defaultOptions = {}

buildApp(App)


import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'

import VueTouchRipple from '@components/vue-touch-ripple/dist/vue-touch-ripple.js'
import '@components/vue-touch-ripple/dist/vue-touch-ripple.css'
// import VueTouchRipple from '@components/vue-touch-ripple/src/index.js'

// import VueTouchRipple from 'vue-touch-ripple'
console.log('VueTouchRipple', VueTouchRipple)

const defaultOptions = {}

Vue.use(VueTouchRipple, defaultOptions)
buildApp(App)

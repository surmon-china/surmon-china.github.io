
import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'
import VueDragZone from '@components/vue-drag-zone/dist/vue-drag-zone.js'

console.log('VueDragZone', VueDragZone)
Vue.use(VueDragZone)

buildApp(App)

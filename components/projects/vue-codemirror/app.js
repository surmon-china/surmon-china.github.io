
import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'

// import VueCodemirror from '@components/vue-codemirror/dist/vue-codemirror.js'
import VueCodemirror from '@components/vue-codemirror/src/index.js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/merge/merge.css'

const globalConfig = {
  options: {}, // global codemirror options
  events: ['scroll'] // global codemirror events
}

console.log('VueCodemirror', VueCodemirror, globalConfig)
Vue.use(VueCodemirror, globalConfig)

buildApp(App)

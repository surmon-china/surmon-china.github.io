
import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'
import VueCodemirror from 'vue-codemirror'
Vue.use(VueCodemirror)
buildApp(App)


import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'
// import VueVideoPlayer from '@components/vue-video-player/dist/vue-video-player.js'
import VueVideoPlayer from '@components/vue-video-player/src/index.js'

import 'video.js/dist/video-js.css'
console.log('VueVideoPlayer', VueVideoPlayer)
Vue.use(VueVideoPlayer)

buildApp(App)

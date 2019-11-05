<template>
  <app-main name="Vue-Video-Player"
            desc="Video.js component for Vue"
            link="https://github.com/surmon-china/vue-video-player">
    <div slot="actions">
      <md-button href="https://github.com/surmon-china/vue-video-player" 
                 target="_blank" 
                 class="md-primary">View on GitHub</md-button>
      <md-button href="https://github.com/surmon-china/vue-video-player/issues" 
                 target="_blank" 
                 class="md-accent">Issues</md-button>
      <md-button href="https://github.com/surmon-china/vue-video-player/tree/master/examples" 
                 target="_blank" 
                 class="md-primary">Example Code</md-button>
      <md-button href="http://docs.videojs.com/tutorial-options.html" 
                 target="_blank" 
                 class="md-primary">DOCUMENTATION</md-button>
      <md-button>HI! Star~</md-button>
    </div>
    <div slot="content">
      <example></example>
      <!-- <test></test> -->
    </div>
  </app-main>
</template>

<script>

import Vue from 'vue'
import App from './App.vue'
import buildApp from '@/main.js'
// import VueVideoPlayer from '@components/vue-video-player/dist/vue-video-player.js'
import VueVideoPlayer from '@components/vue-video-player/src/index.js'

import 'video.js/dist/video-js.css'
console.log('VueVideoPlayer', VueVideoPlayer)
Vue.use(VueVideoPlayer)

buildApp(App)

  import AppMain from '@/main.vue'
  import Example from './Example.vue'
  // import Test from './Test.vue'
  export default {
    name: 'app',
    components: {
      AppMain,
      Example,
      // Test
    }
  }
</script>

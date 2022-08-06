<template>
  <video-player
    class="video-player vjs-theme-forest"
    poster="/images/example/3.jpg"
    src="/videos/sample-video.flv"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0.6"
    :height="320"
    :techOrder="['html5', 'flvjs']"
  />
</template>

<script lang="ts">
  import videojs from 'video.js'
  import { defineComponent } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import { FlvJsTech } from './06-flv-video-tech'
  import 'video.js/dist/video-js.css'
  import '@videojs/themes/dist/forest/index.css'

  videojs.registerTech('Flvjs', FlvJsTech)

  export default defineComponent({
    name: 'vue-flv-player-example',
    title: 'FLV player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .video-player {
    background-color: $black;
    width: 100%;
  }
</style>

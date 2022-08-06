<template>
  <video-player
    class="video-player vjs-theme-forest"
    poster="/images/example/1.jpg"
    src="https://dash.akamaized.net/dash264/TestCasesIOP33/adapatationSetSwitching/5/manifest.mpd"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0.6"
    :height="320"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  import '@videojs/themes/dist/forest/index.css'

  export default defineComponent({
    name: 'vue-dash-player-example',
    title: 'DASH player (Vue)',
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

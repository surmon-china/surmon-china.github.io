<template>
  <video-player
    class="video-player vjs-theme-forest"
    poster="/images/example/3.jpg"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0.6"
    :height="320"
    :techOrder="['html5', 'flvjs']"
    @mounted="handleMounted"
  />
</template>

<script lang="ts">
  import videojs, { VideoJsPlayer } from 'video.js'
  import { defineComponent } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  import '@videojs/themes/dist/forest/index.css'

  export default defineComponent({
    name: 'vue-flv-player-example',
    title: 'FLV player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const handleMounted = ({ player }: { player: VideoJsPlayer }) => {
        // flv.js runs only in the browser environment and does an asynchronous processing for SSR prerender.
        import('./06-flv-video-tech').then(({ FlvJsTech }) => {
          videojs.registerTech('Flvjs', FlvJsTech)
          player.src('/videos/sample-video.flv')
        })
      }

      return { handleMounted }
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

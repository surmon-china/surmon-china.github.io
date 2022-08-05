<template>
  <video-player
    class="video-player vjs-theme-forest"
    poster="/images/example/1.jpg"
    src="http://dash.akamaized.net/dash264/TestCases/5b/nomor/8.mpd"
    controls
    :volume="0.6"
    :height="320"
    @mounted="handleMounted"
  />
</template>

<script lang="ts">
  import { defineComponent, shallowRef } from 'vue'
  import { VideoJsPlayer } from 'video.js'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  import '@videojs/themes/dist/forest/index.css'

  export default defineComponent({
    name: 'vue-dash-player-example',
    title: 'Dash player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const player = shallowRef<VideoJsPlayer>()
      const handleMounted = (payload: any) => {
        player.value = payload.player
        console.log('Dash player mounted', payload)
      }

      return { handleMounted }
    }
  })
</script>

<style lang="scss" scoped>
  .video-player {
    width: 100%;
  }
</style>

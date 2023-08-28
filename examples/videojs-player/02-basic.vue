<template>
  <video-player
    class="video-player vjs-big-play-centered"
    src="https://vjs.zencdn.net/v/oceans.mp4"
    poster="/images/poster/oceans.png"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0.6"
    :height="320"
    :playback-rates="[0.7, 1.0, 1.5, 2.0]"
    @mounted="handleMounted"
    @ready="handleEvent($event)"
    @play="handleEvent($event)"
    @pause="handleEvent($event)"
    @ended="handleEvent($event)"
    @loadeddata="handleEvent($event)"
    @waiting="handleEvent($event)"
    @playing="handleEvent($event)"
    @canplay="handleEvent($event)"
    @canplaythrough="handleEvent($event)"
    @timeupdate="handleEvent(player?.currentTime())"
  />
</template>

<script lang="ts">
  import { defineComponent, shallowRef } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'

  type VideoJsPlayer = ReturnType<typeof videojs>

  export default defineComponent({
    name: 'vue-basic-player-example',
    title: 'Basic player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const player = shallowRef<VideoJsPlayer>()
      const handleMounted = (payload: any) => {
        player.value = payload.player
        console.log('Basic player mounted', payload)
      }

      const handleEvent = (log: any) => {
        console.log('Basic player event', log)
      }

      return { player, handleMounted, handleEvent }
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

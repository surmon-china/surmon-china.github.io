<template>
  <video-player
    class="video-player vjs-theme-forest"
    poster="/images/example/4.jpg"
    crossorigin="anonymous"
    playsinline
    controls
    liveui
    :sources="[videoSource]"
    :volume="0.6"
    :height="320"
    :control-bar="{
      progressControl: false,
      currentTimeDisplay: false,
      remainingTimeDisplay: false
    }"
    :html5="{
      vhs: {
        // https://github.com/videojs/http-streaming#options
        overrideNative: !isSafari,
        maxPlaylistRetries: Infinity
      },
      nativeAudioTracks: false,
      nativeVideoTracks: false
    }"
    @mounted="handleMounted"
    @ready="handleReady"
  />
</template>

<script lang="ts">
  import { defineComponent, shallowRef } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  import '@videojs/themes/dist/forest/index.css'

  type VideoJsPlayer = ReturnType<typeof videojs>

  export default defineComponent({
    name: 'vue-hls-player-example',
    title: 'HLS Live player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const videoSource = {
        src: 'https://amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=m3u8-aapl)',
        type: 'application/x-mpegURL'
      }

      const player = shallowRef<VideoJsPlayer>()
      const handleMounted = (payload: any) => {
        player.value = payload.player
        console.log('HLS Live player mounted', payload)
      }

      const handleReady = () => {
        // https://github.com/videojs/http-streaming#vhsxhr
        const { vhs } = player.value?.tech() as any
        vhs.xhr.beforeRequest = (options: any) => {
          // console.log('vhs.xhr.beforeRequest', options)
          // do something...
          return options
        }
      }

      return {
        isSafari: videojs.browser.IS_SAFARI,
        videoSource,
        handleMounted,
        handleReady
      }
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

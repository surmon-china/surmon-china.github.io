<template>
  <video-player
    class="video-player vjs-theme-forest"
    poster="/images/example/4.jpg"
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
      vhs: vhsOptions,
      nativeAudioTracks: false,
      nativeVideoTracks: false
    }"
    @mounted="handleMounted"
    @ready="handleReady"
  />
</template>

<script lang="ts">
  import { defineComponent, shallowRef } from 'vue'
  import { VideoJsPlayer } from 'video.js'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  import '@videojs/themes/dist/forest/index.css'

  export default defineComponent({
    name: 'vue-hls-player-example',
    title: 'HLS Live player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const videoSource = {
        src: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8',
        type: 'application/x-mpegURL'
      }

      // https://github.com/videojs/http-streaming#options
      const vhsOptions = {
        overrideNative: true,
        maxPlaylistRetries: Infinity
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

      return { videoSource, vhsOptions, handleMounted, handleReady }
    }
  })
</script>

<style lang="scss" scoped>
  .video-player {
    width: 100%;
  }
</style>

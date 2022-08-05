<template>
  <video-player
    id="CustomVideoPlayer"
    class="video-player vjs-theme-forest"
    controls
    :sources="videoSource.sources"
    :poster="videoSource.poster"
    :tracks="videoSource.tracks"
    :height="320"
    :volume="0.4"
    :children="[
      // custom Video.js children component
      // https://videojs.com/guides/options/#children
      'mediaLoader',
      'posterImage',
      'bigPlayButton',
      'loadingSpinner',
      'controlBar',
      'textTrackDisplay'
    ]"
    :control-bar="{
      // custom Video.js control bar component
      // https://videojs.com/guides/options/#componentname
      volumePanel: false
    }"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import 'video.js/dist/video-js.css'
  // custom Video.js CSS theme
  // https://github.com/videojs/themes
  import '@videojs/themes/dist/forest/index.css'

  export default defineComponent({
    name: 'vue-custom-player-example',
    title: 'Custom player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const videoSource = {
        poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
        sources: [
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
            type: 'video/mp4'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg',
            type: 'video/ogg'
          }
        ],
        tracks: [
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.en.vtt',
            kind: 'captions',
            srclang: 'en',
            label: 'English'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ar.vtt',
            kind: 'captions',
            srclang: 'ar',
            label: 'Arabic'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.sv.vtt',
            kind: 'captions',
            srclang: 'sv',
            label: 'Swedish'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ru.vtt',
            kind: 'captions',
            srclang: 'ru',
            label: 'Russian'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ja.vtt',
            kind: 'captions',
            srclang: 'ja',
            label: 'Japanese'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/descriptions.en.vtt',
            kind: 'descriptions',
            srclang: 'en',
            label: 'English'
          },
          {
            src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/chapters.en.vtt',
            kind: 'chapters',
            srclang: 'en',
            label: 'English'
          }
        ] as Array<any>
      }

      return { videoSource }
    }
  })
</script>

<style lang="scss" scoped>
  .video-player {
    width: 100%;
  }
</style>

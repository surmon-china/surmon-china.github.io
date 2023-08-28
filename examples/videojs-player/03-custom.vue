<template>
  <video-player
    id="CustomVideoPlayer"
    class="video-player vjs-theme-forest"
    crossorigin="anonymous"
    playsinline
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
        poster: '/images/poster/elephants-dream.jpg',
        sources: [
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
            type: 'video/mp4'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg',
            type: 'video/ogg'
          }
        ],
        tracks: [
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.en.vtt',
            kind: 'captions',
            srclang: 'en',
            label: 'English'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ar.vtt',
            kind: 'captions',
            srclang: 'ar',
            label: 'Arabic'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.sv.vtt',
            kind: 'captions',
            srclang: 'sv',
            label: 'Swedish'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ru.vtt',
            kind: 'captions',
            srclang: 'ru',
            label: 'Russian'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/captions.ja.vtt',
            kind: 'captions',
            srclang: 'ja',
            label: 'Japanese'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/descriptions.en.vtt',
            kind: 'descriptions',
            srclang: 'en',
            label: 'English'
          },
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/chapters.en.vtt',
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
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .video-player {
    background-color: $black;
    width: 100%;
  }
</style>

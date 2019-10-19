<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>测试用例</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/02-responsive.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <video-player ref="video"
                    :options="videoOptions"
                    :events="['fullscreenchange']"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @fullscreenchange="fullscreenchange($event)"
                    @ready="playerReadied"></video-player>
      <!-- <div class="vjs-custom-skin"
           :playsinline="true"
           customEventName="state"
           @play="onPlayerPlay($event)"
           @pause="onPlayerPause($event)"
           @ready="playerReadied"
           @statechanged="playerStateChanged($event)"
           v-video-player:myVideoPlayer="videoOptions"> -->
      </div>
    </md-card-media>
  </md-card>
</template>

<script>
  import 'videojs-flash'
  import videojs from 'video.js'
  import videojsPlaylist from 'videojs-playlist/dist/videojs-playlist.js'
  videojs.registerPlugin('playlist', videojsPlaylist)
  const Plugin = videojs.getPlugin('playlist')
  console.log('videojsPlaylist', Plugin);
  export default {
    data () {
      return {
        videoOptions: {
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // type: "rtmp/mp4",
            // src: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
          }],
          // techOrder: ['flash'],
          autoplay: true,
          controls: true
        }
      }
    },
    methods: {
      onPlayerPlay() {
        console.log('onPlayerPlay');
      },
      onPlayerPause() {
        console.log('onPlayerPause');
      },
      fullscreenchange() {
        console.log('fullscreenchange');
      },
      playerReadied(player) {
        this.$nextTick(() => {
          console.log('playerReadied', player);
        })
      },
      playerStateChanged(event) {
        console.log('playerStateChanged')
      },
    },
    mounted() {
      // console.log(this)
    }
  }
</script>

<style lang="scss">

  .video-player {
    width: 100%;

    > .video-js {
      width: 100%;
    }
  }
</style>

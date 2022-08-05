<template>
  <div class="example">
    <player-playlist
      class="playlist"
      :index="playMediaIndex"
      @update:index="handleMediaChange"
    />
    <div class="player-wrapper">
      <div class="top">
        <video-player
          class="video-player vjs-big-play-centered"
          :sources="mediaConfig.sources"
          :poster="mediaConfig.poster"
          :tracks="mediaConfig.tracks"
          :autoplay="config.autoplay"
          :playbackRates="config.playbackRates"
          :fluid="config.fluid"
          :loop="config.loop"
          :crossOrigin="config.crossOrigin"
          v-model:width="config.width"
          v-model:height="config.height"
          v-model:volume="config.volume"
          v-model:playbackRate="config.playbackRate"
          v-model:controls="config.controls"
          v-model:muted="config.muted"
          @mounted="handleMounted"
        >
          <template v-slot="{ player, state }">
            <div class="player-custom-controls" v-if="isEnabledCustomControls">
              <player-custom-controls :player="player" :state="state" :config="config" />
            </div>
          </template>
        </video-player>
        <div class="right" :style="{ height: config.height + 'px' }">
          <player-config
            :config="config"
            v-model:enabled-custom-controls="isEnabledCustomControls"
          />
        </div>
      </div>
      <div class="bottom">
        <player-state :state="state" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, shallowRef, shallowReactive, computed, nextTick } from 'vue'
  import { VideoPlayer, VideoPlayerProps, VideoPlayerState } from '@videojs-player/vue'
  import { VideoJsPlayer } from 'video.js'
  import 'video.js/dist/video-js.css'

  import PlayerConfig, { playbackRatesOptions } from './config.vue'
  import PlayerCustomControls from './advanced.vue'
  import PlayerPlaylist from './playlist.vue'
  import PlayerState from './state.vue'
  import { playlist } from './playlist'

  export default defineComponent({
    name: 'vue-advanced-player-example',
    title: 'Advanced player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer,
      PlayerCustomControls,
      PlayerPlaylist,
      PlayerConfig,
      PlayerState
    },
    setup: () => {
      const player = shallowRef<VideoJsPlayer>()
      const state = shallowRef<VideoPlayerState>()
      const isEnabledCustomControls = shallowRef(true)
      const config = shallowReactive<VideoPlayerProps>({
        autoplay: false,
        width: 680,
        height: 376,
        volume: 0.8,
        playbackRate: 1,
        playbackRates: playbackRatesOptions[0],
        controls: true,
        fluid: false,
        muted: false,
        loop: false,
        crossOrigin: 'anonymous'
      })

      const playMediaIndex = shallowRef(0)
      const mediaConfig = computed<VideoPlayerProps>(() => ({
        sources: playlist[playMediaIndex.value].sources,
        poster: playlist[playMediaIndex.value].poster,
        tracks: (playlist[playMediaIndex.value].textTracks as any) ?? []
      }))

      const handleMounted = (payload: any) => {
        console.log('Advanced player mounted', payload)
        state.value = payload.state
        player.value = payload.player
      }

      const handleMediaChange = (index: number) => {
        playMediaIndex.value = index
        nextTick(() => {
          player.value?.play()
        })
      }

      return {
        state,
        config,
        mediaConfig,
        isEnabledCustomControls,
        playMediaIndex,
        handleMounted,
        handleMediaChange
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .example {
    .playlist {
      border-bottom: 1px solid $border-color;
    }

    .player-wrapper {
      .top {
        display: flex;
        justify-content: space-between;

        .video-player {
          position: relative;

          .player-custom-controls {
            position: absolute;
            top: 0;
            width: 100%;
            display: block;
          }
        }

        .right {
          flex: 1;
          min-width: 18rem;
          border-left: 1px solid $border-color;
          overflow-x: hidden;
          overflow-y: scroll;
        }
      }

      .bottom {
        margin: 0;
        padding: 0;
        overflow: hidden;
        border-top: 1px solid $border-color;
      }
    }
  }
</style>
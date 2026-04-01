<template>
  <div class="example">
    <player-playlist class="playlist" :index="playMediaIndex" @update:index="handleMediaChange" />
    <div class="player-wrapper">
      <div class="top" :class="{ mobile: visitor.isMobileDevice }">
        <video-player
          playsinline
          crossorigin="anonymous"
          :class="['video-player', 'vjs-big-play-centered', { loading: !state }]"
          :width="680"
          :sources="mediaConfig.sources"
          :poster="mediaConfig.poster"
          :tracks="mediaConfig.tracks"
          :autoplay="config.autoplay"
          :playback-rates="config.playbackRates"
          :fluid="config.fluid"
          :loop="config.loop"
          v-model:height="config.height"
          v-model:volume="config.volume"
          v-model:playback-rate="config.playbackRate"
          v-model:controls="config.controls"
          v-model:muted="config.muted"
          @mounted="handleMounted"
        >
          <template #default="{ player, state }">
            <div class="player-custom-controls" v-if="isEnabledCustomControls">
              <player-custom-controls :player="player" :state="state" :config="config" />
            </div>
          </template>
        </video-player>
        <div class="right" :style="{ height: config.height + 'px' }">
          <player-config
            :config="config"
            :playback-rates-options="playbackRatesOptions"
            v-model:enabled-custom-controls="isEnabledCustomControls"
          />
        </div>
      </div>
      <div class="bottom" :class="{ mobile: visitor.isMobileDevice }">
        <player-state :state="state" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, shallowRef, shallowReactive, computed, nextTick } from 'vue'
  import { VideoPlayer, VideoPlayerProps, VideoPlayerState } from '@videojs-player/vue'
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'

  import { useVisitor } from '@/composables/visitor'
  import PlayerCustomControls from './advanced.vue'
  import PlayerPlaylist from './playlist.vue'
  import PlayerState from './state.vue'
  import PlayerConfig from './config.vue'
  import { playlist } from './playlist'

  type VideoJsPlayer = ReturnType<typeof videojs>

  const playbackRatesOptions = [
    [1, 2, 3],
    [0.5, 1.5, 2.5]
  ]

  export default defineComponent({
    name: 'vue-advanced-player-example',
    title: 'Advanced player (Vue)',
    components: {
      VideoPlayer,
      PlayerCustomControls,
      PlayerPlaylist,
      PlayerConfig,
      PlayerState
    },
    setup: () => {
      const visitor = useVisitor()
      const player = shallowRef<VideoJsPlayer>()
      const state = shallowRef<VideoPlayerState>()
      const isEnabledCustomControls = shallowRef(true)
      const config = shallowReactive<VideoPlayerProps>({
        autoplay: false,
        height: visitor.isMobileDevice ? 280 : 380,
        volume: 0.8,
        playbackRate: 1,
        playbackRates: playbackRatesOptions[0],
        controls: true,
        fluid: false,
        muted: false,
        loop: false
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
        visitor,
        state,
        config,
        mediaConfig,
        playbackRatesOptions,
        isEnabledCustomControls,
        playMediaIndex,
        handleMounted,
        handleMediaChange
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;

  .example {
    .playlist {
      border-bottom: 1px solid $border-color-secondary;
    }

    .player-wrapper {
      .top {
        display: flex;
        justify-content: space-between;
        &.mobile {
          flex-direction: column;
        }

        .video-player {
          position: relative;
          max-width: 100%;
          &.loading {
            min-width: 680px;
            background-color: $black;
          }

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
          border-left: 1px solid $border-color-secondary;
          overflow-x: hidden;
          overflow-y: scroll;
        }
      }

      .bottom {
        margin: 0;
        padding: 0;
        overflow: hidden;
        border-top: 1px solid $border-color-secondary;
        &.mobile {
          overflow-x: scroll;
        }
      }
    }
  }
</style>

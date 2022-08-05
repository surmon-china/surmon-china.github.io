<template>
  <ul class="state-detail">
    <li
      class="item"
      :class="`col-${col}`"
      :title="renderValue(key, state?.[key])"
      :key="key"
      v-for="(col, key) in stateKeyListMap"
    >
      <span class="key">{{ key }}</span>
      <code class="value">
        {{ renderValue(key, state?.[key]) }}
      </code>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { VideoPlayerState } from '@videojs-player/vue'

  const stateKeyListMap: Record<keyof VideoPlayerState, number> = {
    src: 6,
    currentSrc: 6,
    currentSource: 6,
    poster: 6,
    width: 1,
    height: 1,
    currentWidth: 1,
    currentHeight: 1,
    videoWidth: 1,
    videoHeight: 1,
    playing: 1,
    waiting: 1,
    seeking: 1,
    paused: 1,
    ended: 1,
    controls: 1,
    muted: 1,
    volume: 1,
    duration: 1,
    currentTime: 2,
    language: 1,
    playbackRates: 2,
    playbackRate: 1,
    isFullscreen: 1,
    isInPictureInPicture: 1,
    isLive: 1,
    readyState: 1,
    networkState: 1,
    error: 4,
    buffered: 2,
    seekable: 2,
    played: 2,
    bufferedPercent: 2,
    audioTracks: 1,
    videoTracks: 1,
    textTracks: 1,
    userActive: 1
  }

  export default defineComponent({
    props: {
      state: Object as PropType<VideoPlayerState>
    },
    setup() {
      const timeRangesToString = (timeRanges?: TimeRanges) => {
        if (!timeRanges) {
          return ''
        }
        const array = []
        for (let i = 0; i < timeRanges.length; i++) {
          const start = timeRanges.start(i).toFixed(2)
          const end = timeRanges.end(i).toFixed(2)
          array.push(`[${start}, ${end}]`)
        }
        return array.join(', ')
      }

      const renderValue = (key: string, value: any): string => {
        if (['buffered', 'seekable', 'played'].includes(key)) {
          return timeRangesToString(value)
        }
        if (['audioTracks', 'videoTracks', 'textTracks'].includes(key)) {
          return value?.length
        }
        if (value === '') {
          return '""'
        }
        return JSON.stringify(value) ?? ''
      }

      return {
        stateKeyListMap,
        renderValue
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .state-detail {
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: $border-color;

    .item.col-2 {
      grid-column: span 2;
    }
    .item.col-3 {
      grid-column: span 3;
    }
    .item.col-4 {
      grid-column: span 4;
    }
    .item.col-5 {
      grid-column: span 5;
    }
    .item.col-6 {
      grid-column: span 6;
    }

    .item {
      position: relative;
      padding: 0.8em;
      background-color: $banner-bg;
      display: flex;
      align-items: center;
      font-size: 12px;
      &:hover {
        background-color: $header-bg;
      }

      .key {
        color: $text-secondary;
        margin-right: 0.5rem;
      }

      .value {
        @include text-overflow();
      }
    }
  }
</style>

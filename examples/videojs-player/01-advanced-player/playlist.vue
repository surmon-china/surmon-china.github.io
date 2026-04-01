<template>
  <div class="playlist">
    <ul class="medias" :style="{ '--count': playlist.length }">
      <li
        class="item"
        :key="i"
        :title="media.description"
        :style="{ backgroundImage: `url(${media.poster})` }"
        :class="{ active: index === i }"
        v-for="(media, i) in playlist"
        @click="$emit('update:index', i)"
      >
        <span class="playing" v-if="index === i">
          <span class="dot"></span>
          Now Playing
        </span>
        <span class="duration" v-else-if="media.duration">{{ humanizeDuration(media.duration) }}</span>
        <span class="name">{{ media.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { playlist } from './playlist'

  export default defineComponent({
    props: {
      index: {
        type: Number,
        required: true
      }
    },
    emits: ['update:index'],
    setup() {
      const humanizeDuration = (seconds: number) => {
        const minutes = String(Math.trunc(seconds / 60)).padStart(2, '0')
        const remain = String(seconds & 60).padStart(2, '0')
        return `${minutes}:${remain}`
      }

      return { playlist, humanizeDuration }
    }
  })
</script>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;

  .medias {
    margin: 0;
    padding: 1rem;
    list-style: none;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(var(--count, 6), 1fr);
    grid-gap: 1rem;

    .item {
      height: 6rem;
      border-radius: $radius-sm;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-color: $header-bg;
      position: relative;
      user-select: none;
      cursor: pointer;
      opacity: 0.7;
      @include mix.visibility-transition();
      &:hover,
      &.active {
        opacity: 1;
        outline: 3px double $text-color;
      }

      .name {
        position: absolute;
        left: 1em;
        bottom: 0.8rem;
        display: inline-block;
        max-width: 86%;
        @include mix.text-overflow();
        color: $white;
        text-shadow:
          1px 1px 2px #000,
          -1px 1px 2px #000,
          1px -1px 2px #000,
          -1px -1px 2px #000;
      }

      .playing,
      .duration {
        position: absolute;
        top: 0.8em;
        left: 1em;
        height: 1.8em;
        display: flex;
        align-items: center;
        padding: 0 0.4rem;
        border-radius: $radius-xs;
        font-size: $font-size-small;
      }

      .duration {
        color: $black;
        background-color: $white;
        font-weight: 500;
      }

      .playing {
        color: $white;
        background-color: $black;

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 100%;
          display: inline-block;
          margin-right: $gap-xs;
          background-color: lawngreen;
        }
      }
    }
  }
</style>

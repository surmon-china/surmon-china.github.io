<template>
  <div class="config-controls">
    <div class="item">
      <span class="name">
        height (<code>{{ config.height }}</code
        >)
      </span>
      <input class="value" type="range" min="280" max="400" v-model.number="config.height" />
    </div>
    <div class="item">
      <span class="name">
        volume (<code>{{ config.volume }}</code
        >)
      </span>
      <input class="value" type="range" min="0" max="1" step="0.1" v-model.number="config.volume" />
    </div>
    <div class="item">
      <span class="name">
        playbackRate (<code>{{ config.playbackRate }}</code
        >)
      </span>
      <input class="value" type="range" min="0.5" max="3" step="0.25" v-model.number="config.playbackRate" />
    </div>
    <div class="item inline">
      <span class="name">playbackRates</span>
      <select class="value" v-model="config.playbackRates">
        <option :key="index" :value="option" v-for="(option, index) in playbackRatesOptions">
          {{ option }}
        </option>
      </select>
    </div>
    <label class="item inline">
      <span class="name">
        muted (<code>{{ config.muted }}</code
        >)
      </span>
      <input class="value" type="checkbox" v-model="config.muted" />
    </label>
    <label class="item inline">
      <span class="name">
        loop (<code>{{ config.loop }}</code
        >)
      </span>
      <input class="value" type="checkbox" v-model="config.loop" />
    </label>
    <label class="item inline">
      <span class="name">
        fluid (<code>{{ config.fluid }}</code
        >)
      </span>
      <input class="value" type="checkbox" v-model="config.fluid" />
    </label>
    <label class="item inline">
      <span class="name">
        controls (<code>{{ config.controls }}</code
        >)
      </span>
      <input class="value" type="checkbox" v-model="config.controls" />
    </label>
    <label class="item inline">
      <span class="name">
        custom controls (<code>{{ enabledCustomControls }}</code
        >)
      </span>
      <input
        class="value"
        type="checkbox"
        :checked="enabledCustomControls"
        @change="$emit('update:enabledCustomControls', ($event.target as HTMLInputElement)?.checked)"
      />
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import 'video.js/dist/video-js.css'

  export const playbackRatesOptions = [
    [1, 2, 3],
    [0.5, 1.5, 2.5]
  ]

  export default defineComponent({
    props: {
      config: {
        type: Object as PropType<any>,
        required: true
      },
      enabledCustomControls: {
        type: Boolean,
        required: true
      }
    },
    setup() {
      return {
        playbackRatesOptions
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .config-controls {
    padding: 1rem;

    label {
      cursor: pointer;
    }

    .item {
      width: 100%;
      font-size: 13px;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
      }

      &.inline {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &:not(.inline) {
        .name {
          display: block;
          width: 100%;
          margin-bottom: 1rem;
        }

        .value {
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>

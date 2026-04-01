<script lang="ts" setup>
  import 'video.js/dist/video-js.css'

  const config = defineModel<any>('config', { required: true })
  const enabledCustomControls = defineModel<any>('enabledCustomControls', { required: true })

  const props = defineProps<{
    playbackRatesOptions: number[][]
  }>()
</script>

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
      <span class="name"
        >custom controls (<code>{{ enabledCustomControls }}</code
        >)
      </span>
      <input class="value" type="checkbox" v-model="enabledCustomControls" />
    </label>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;

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

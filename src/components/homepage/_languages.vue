<script lang="ts" setup>
  import GH_LANG_COLORS from 'gh-lang-colors'
  import { computed } from 'vue'

  const props = defineProps<{
    languages: {
      [key: string]: number
    }
  }>()

  const languageList = computed(() => {
    const list = Object.entries(props.languages)
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => ({ key, value }))
    const total = list.reduce((acc, cur) => acc + cur.value, 0)
    return list.map((item) => ({
      ...item,
      percent: Math.round((item.value / total) * 100 * 10) / 10
    }))
  })
</script>

<template>
  <div class="languages">
    <div class="handle"></div>
    <ul class="percent-list">
      <li
        v-for="item in languageList"
        class="item"
        :key="item.key"
        :style="{
          backgroundColor: (GH_LANG_COLORS as any)[item.key],
          width: `${item.percent}%`
        }"
      ></li>
    </ul>
    <ul class="language-list">
      <li class="item" v-for="item in languageList" :key="item.key">
        <span class="color" :style="`background-color: ${(GH_LANG_COLORS as any)[item.key]}`" />
        <span class="name">{{ item.key }}</span>
        <span class="percent">{{ item.percent }}%</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .languages {
    position: relative;
    background-color: $banner-bg;

    .handle {
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      height: 26px;
      z-index: 1;
      background-color: transparent;
    }

    .percent-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      /* default: line */
      opacity: 0.6;
      height: 4px;
      transition:
        height $transition-time,
        opacity $transition-time;
    }

    .language-list {
      padding: 0;
      margin: 0 auto;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: $container-width;
      /* default: hidden */
      height: 0;
      visibility: hidden;
      transition: all $transition-time;

      .item {
        display: inline-flex;
        align-items: baseline;
        user-select: none;

        .color {
          display: inline-block;
          width: 14px;
          height: 10px;
          margin-right: $xs-gap;
          border-radius: $xs-radius;
        }

        .name {
          margin-right: $xs-gap;
          font-size: $font-size-small + 1;
          font-weight: bold;
          font-family:
            Consolas,
            Liberation Mono,
            Menlo,
            monospace;
        }

        .percent {
          color: $text-disabled;
          font-size: $font-size-small;
        }
      }
    }
  }

  @media screen and (min-width: $container-width) {
    .languages {
      &:hover {
        border-bottom: 1px solid $border-color;
        .percent-list {
          opacity: 1;
          height: 12px;
        }

        .language-list {
          height: auto;
          padding: 2rem 0;
          visibility: visible;
        }
      }
    }
  }

  @media screen and (max-width: $container-width) {
    .languages {
      .percent-list {
        opacity: 0.8;
        height: 2px;
      }
    }
  }
</style>

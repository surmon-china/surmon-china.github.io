<script lang="ts" setup>
  import { computed } from 'vue'
  import { countToK } from '@/transforms/unit'

  const props = defineProps<{
    link: string
    icon: string
    text?: string
    count?: number
    countIcon?: string
    countText?: string
    countLink?: string
  }>()

  const hasCount = computed(() => Number.isFinite(props.count as number) || props.countText)
  const countContent = computed(() => {
    if (props.countText) {
      return props.countText
    }

    return hasCount ? countToK(props.count as number) : null
  })
</script>

<template>
  <span class="homepage-button">
    <ulink :href="link" class="item button" :class="{ 'has-count': hasCount }">
      <i class="iconfont" :class="icon"></i>
      <span class="text" v-if="text">{{ text }}</span>
      <slot></slot>
    </ulink>
    <ulink v-if="hasCount" class="item count" :href="countLink || link">
      <i v-if="countIcon" class="iconfont" :class="countIcon"></i>
      <transition name="module" mode="out-in">
        <span :key="countContent || 'null'">{{ countContent }}</span>
      </transition>
    </ulink>
  </span>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .homepage-button {
    display: inline-flex;
    height: 2.3em;
    border-radius: $sm-radius;
    font-weight: bold;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;

    .item {
      cursor: pointer;
      text-decoration: none;
      .iconfont {
        margin-right: $xs-gap;
        font-weight: normal;
      }

      &.button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $sm-gap;
        background-color: $header-bg;
        border: 1px solid $text-divider;
        transition: all $transition-time;
        &.has-count {
          border-right-width: 0px;
        }
        &:hover {
          background-color: $body-bg;
        }
      }

      &.count {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $sm-gap;
        border: 1px solid $text-divider;
        transition: all $transition-time;
        &:hover {
          color: $link-color;
          border-color: $text-disabled;
        }
      }
    }
  }
</style>

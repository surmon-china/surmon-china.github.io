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
    if (props.countText) return props.countText
    return hasCount.value ? countToK(props.count as number) : null
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
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;

  .homepage-button {
    $radius-size: $radius-xs;
    display: inline-flex;
    height: 2.4rem;
    border-radius: $radius-size;
    font-weight: 500;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;

    .item {
      cursor: pointer;
      text-decoration: none;

      .iconfont {
        margin-right: $gap-xs;
        font-weight: normal;
      }

      &:first-child {
        border-top-left-radius: $radius-size;
        border-bottom-left-radius: $radius-size;
      }

      &:last-child {
        border-top-right-radius: $radius-size;
        border-bottom-right-radius: $radius-size;
      }

      &.button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $gap-sm;
        border: 1px solid $text-divider;
        transition: all $motion-duration;
        background-color: $header-bg;
        &:hover {
          background-color: $body-bg;
        }

        &.has-count {
          border-right-width: 0px;
        }
      }

      &.count {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $gap-sm;
        border: 1px solid $text-divider;
        transition: all $motion-duration;

        &:hover {
          color: $link-color;
          border-color: $text-disabled;
        }
      }
    }
  }
</style>

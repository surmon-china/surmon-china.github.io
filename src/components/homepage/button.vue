<template>
  <span class="homepage-button">
    <ulink :href="link" class="item button">
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

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { countToK } from '@/transforms/unit'

  export default defineComponent({
    name: 'homepage-button',
    props: {
      link: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: false
      },
      count: {
        type: Number,
        required: false
      },
      countIcon: {
        type: String,
        required: false
      },
      countText: {
        type: String,
        required: false
      },
      countLink: {
        type: String,
        required: false
      }
    },
    setup(props) {
      const hasCount = computed(
        () => Number.isFinite(props.count as number) || props.countText
      )

      const countContent = computed(() => {
        if (props.countText) {
          return props.countText
        }
        return hasCount ? countToK(props.count as number) : null
      })

      return {
        hasCount,
        countContent
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

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
        border-right-width: 0px;
        transition: all $transition-time;
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

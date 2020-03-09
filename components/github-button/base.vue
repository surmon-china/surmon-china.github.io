<template>
  <span class="github-button">
    <a
      :href="link"
      class="button"
      target="_blank"
    >
      <i class="iconfont" :class="icon" :style="{ color: iconColor }"></i>
      <span class="text" v-if="text">{{ text }}</span>
      <slot></slot>
    </a>
    <a
      v-if="hasCount"
      :href="countLink || link"
      target="_blank"
      class="count"
    >
      <i v-if="countIcon" class="iconfont" :class="countIcon"></i>
      <transition name="module" mode="out-in">
        <span :key="countContent">{{ countContent }}</span>
      </transition>
    </a>
  </span>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { createComponent, computed } from '@vue/composition-api'
  import { countToK } from '@/transformers/unit'
  export default createComponent({
    name: 'github-button-base',
    props: {
      link: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      iconColor: {
        type: String,
        required: false
      },
      text: {
        type: String,
        required: false
      },
      isLoading: {
        type: Boolean,
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
    setup(props, context) {
      const hasCount = computed(() => (
        Number.isFinite(props.count as number) ||
        props.countText
      ))

      const countContent = computed(() => {
        if (props.countText) {
          return props.countText
        }
        return hasCount
          ? countToK(props.count as number)
          : null
      })

      return {
        hasCount,
        countContent
      }
    }
  })
</script>

<style lang="scss" scoped>
  .github-button {
    display: inline-flex;
    height: 2.2rem;
    border-radius: $radius;
    font-size: $font-size-base;
    font-weight: bold;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;

    a {
      cursor: pointer;
      text-decoration: none;

      .iconfont {
        margin-right: 2px;
        font-weight: normal;
      }

      &.button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $sm-gap;
        background-color: $module-bg-darken;
        @include background-transition();
        &:hover {
          background-color: $body-bg;
        }
      }

      &.count {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $sm-gap;
        background-color: $module-bg;
        border-left: 1px solid $body-bg;
        @include background-transition();
        &:hover {
          background-color: $module-bg-darken;
        }
      }
    }
  }
</style>

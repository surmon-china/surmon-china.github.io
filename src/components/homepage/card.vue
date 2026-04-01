<script lang="ts" setup>
  defineProps<{
    title?: string
    titleLink?: string
    contentClass?: string
  }>()
</script>

<template>
  <div class="homepage-card">
    <div class="header" v-if="title">
      <ulink v-if="titleLink" :href="titleLink" class="link">
        <span class="text">{{ title }}</span>
        <i class="iconfont icon-link-external"></i>
      </ulink>
      <span class="text" v-else>{{ title }}</span>
      <slot name="actions"></slot>
    </div>
    <div class="content" :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;

  .homepage-card {
    margin-top: 2rem;
    width: 100%;
    height: auto;
    border: none;
    overflow: hidden;
    border-radius: $radius-sm;
    background-color: $banner-bg;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3rem;
      border-bottom: 1px solid $border-color-secondary;
      padding: 0 $gap-lg;

      .text {
        font-weight: 400;
      }

      .link {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }

        .iconfont {
          font-size: $font-size-small;
          margin-left: $gap-xs;
        }
      }
    }

    .content {
      overflow: hidden;
    }
  }
</style>

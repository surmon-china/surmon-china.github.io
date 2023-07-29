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
        <span>{{ title }}</span>
        <i class="iconfont icon-link-external"></i>
      </ulink>
      <span v-else>{{ title }}</span>
      <slot name="actions"></slot>
    </div>
    <div class="content" :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .homepage-card {
    margin-top: 2rem;
    width: 100%;
    height: auto;
    border: none;
    overflow: hidden;
    border-radius: $sm-radius;
    background-color: $banner-bg;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.2rem;
      border-bottom: 1px solid $border-color;
      background-color: $header-bg;
      padding: 0 $lg-gap;

      .link {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }

        .iconfont {
          font-size: $font-size-small;
          margin-left: $xs-gap;
        }
      }
    }

    .content {
      background-color: $banner-bg;
      overflow: hidden;
    }
  }
</style>

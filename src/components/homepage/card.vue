<template>
  <div class="homepage-card">
    <div class="header" v-if="title">
      <a v-if="titleLink" :href="titleLink" target="_blank" class="link">
        <span>{{ title }}</span>
        <i class="iconfont icon-link-external"></i>
      </a>
      <span v-else>{{ title }}</span>
      <slot name="actions"></slot>
    </div>
    <div class="content" :class="contentClass">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'homepage-card',
    props: {
      title: String,
      titleLink: String,
      contentClass: {
        type: String,
        required: false,
        default: ''
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

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
        }
      }
    }

    .content {
      background-color: $banner-bg;
      overflow: hidden;
    }
  }
</style>

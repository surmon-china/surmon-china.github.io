<template>
  <div class="homepage-card">
    <div slot="header" class="header" v-if="title">
      <a
        v-if="titleLink"
        :href="titleLink"
        target="_blank"
        class="link"
      >
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
  import { createComponent } from '@vue/composition-api'
  export default createComponent({
    name: 'homepage-basic-card',
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
  .homepage-card {
    margin-top: 2rem;
    width: 100%;
    height: auto;
    border: none;
    border-radius: $radius;
    background-color: $module-bg;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.2rem;
      border-bottom: 1px solid $body-bg;
      background-color: $module-bg-darken;
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
      background-color: $module-bg;
      overflow: hidden;
    }
  }
</style>

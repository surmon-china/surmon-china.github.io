<script lang="ts" setup>
  import { useMeta } from '@/composables/meta'
  import { RouteName } from '@/routes'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import Navbar from '@/components/common/navbar.vue'
  const id = RouteName.Readme

  useMeta({
    title: getMetaTitle(id),
    keywords: [getMetaKeywords(id), `How to use Swiper on vue3?`].join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <div class="page">
    <navbar :repository="id" />
    <div class="content">
      <span class="todo">README.md</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .page {
    background-color: $banner-bg;

    .content {
      width: 100%;
      height: calc(100vh - $navbar-height);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .todo {
        font-size: $font-size-huge;
        color: $text-disabled;
      }
    }
  }
</style>

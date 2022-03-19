<script lang="ts" setup>
  import { useMeta } from '@/composables/meta'
  import { RouteRepoID } from '@/routes'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import Navbar from '@/components/layout/navbar.vue'
  import Footbar from '@/components/layout/footbar.vue'
  const id = RouteRepoID.Readme

  useMeta({
    title: getMetaTitle(id),
    keywords: getMetaKeywords(id).join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <div class="page">
    <navbar :repository="id" />
    <div class="content">
      <span class="todo">README.md homepage is coming soon</span>
    </div>
    <footbar :repository="id" />
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .page {
    .content {
      width: 100%;
      height: calc(100vh - $navbar-height - $footbar-height);
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

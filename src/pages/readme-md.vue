<script lang="ts" setup>
  import { useMeta } from '@/composables/meta'
  import { Repository } from '@/config'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'

  const id = Repository.Readme

  useMeta({
    title: getMetaTitle(id),
    keywords: getMetaKeywords(id).join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <vue-renderer class="page" :repository="id" :toolbox="false">
    <div class="page-content">README.md homepage is coming soon</div>
  </vue-renderer>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .page {
    .page-content {
      width: 100%;
      height: calc(100vh - $navbar-height - $footbar-height);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: $font-size-huge;
      color: $text-disabled;
    }
  }
</style>

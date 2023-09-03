<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useSeoMeta } from '@unhead/vue'
  import { getPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription, normalizeSeoMetaObject } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'

  const { repository, route } = PROJECTS.Readme

  useSeoMeta(
    normalizeSeoMetaObject({
      title: getMetaTitle(repository),
      keywords: getMetaKeywords(repository).join(','),
      description: getMetaDescription(repository),
      ogUrl: getPageURL(route),
      ogImage: getGitHubOpenGraphImageURL(repository),
      ogImageWidth: 1200,
      ogImageHeight: 600
    })
  )
</script>

<template>
  <vue-renderer class="page" :repository="repository" :toolbox="false">
    <div class="page-content">README.vue homepage is coming soon</div>
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

<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useMeta } from '@/composables/meta'
  import {
    getPageURL,
    getLegacyPageURL,
    getGitHubOpenGraphImageURL
  } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import IframeRenderer from '@/components/renderer/iframe.vue'

  const { repository, route } = PROJECTS.VueDragZone

  useMeta({
    title: getMetaTitle(repository),
    keywords: getMetaKeywords(repository).join(','),
    description: getMetaDescription(repository),
    ogImage: getGitHubOpenGraphImageURL(repository),
    ogUrl: getPageURL(route)
  })
</script>

<template>
  <iframe-renderer :repository="repository" :src="getLegacyPageURL(repository)" legacy />
</template>

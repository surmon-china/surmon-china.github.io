<script lang="ts" setup>
  import { PROJECTS, getLegacyURL } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import IframeRenderer from '@/components/renderer/iframe.vue'

  const { repository } = PROJECTS.VueQuillEditor

  useMeta({
    title: getMetaTitle(repository),
    keywords: getMetaKeywords(repository).join(','),
    description: getMetaDescription(repository)
  })
</script>

<template>
  <iframe-renderer :repository="repository" :src="getLegacyURL(repository)" legacy />
</template>

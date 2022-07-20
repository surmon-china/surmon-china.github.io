<script lang="ts" setup>
  import { Repository, getLegacyURL } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import IframeRenderer from '@/components/renderer/iframe.vue'

  const id = Repository.VueDragZone
  const src = getLegacyURL(id)

  useMeta({
    title: getMetaTitle(id),
    keywords: getMetaKeywords(id).join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <iframe-renderer :repository="id" :src="src" legacy />
</template>

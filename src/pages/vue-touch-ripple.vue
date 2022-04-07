<script lang="ts" setup>
  import { Repository } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import IframeRenderer from '@/components/renderer/iframe.vue'
  const id = Repository.VueTouchRipple

  useMeta({
    title: getMetaTitle(id),
    keywords: getMetaKeywords(id).join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <iframe-renderer class="iframe" :id="id" />
</template>

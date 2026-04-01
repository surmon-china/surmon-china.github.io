<script lang="ts" setup>
  import { onBeforeMount } from 'vue'
  import { useGlobalStore } from '@/store'
  import { useTheme } from '@/composables/theme'
  import { useHead } from '@/composables/head'

  const store = useGlobalStore()
  const theme = useTheme()

  useHead({
    htmlAttrs: {
      lang: 'en',
      'data-theme': () => theme.theme.value
    },
    meta: [
      {
        key: 'twitter-new-widgets',
        name: 'twitter:widgets:new-embed-design',
        content: 'on'
      }
    ]
  })

  onBeforeMount(() => store.init())
</script>

<template>
  <router-view />
</template>

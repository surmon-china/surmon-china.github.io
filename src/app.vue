<script lang="ts" setup>
  import { onBeforeMount } from 'vue'
  import { useHead } from '@unhead/vue'
  import { useGlobalStore } from '@/store'
  import { useTheme } from '@/composables/theme'

  const store = useGlobalStore()
  const theme = useTheme()

  useHead(() => ({
    htmlAttrs: {
      theme: theme.theme.value
    },
    meta: [
      {
        key: 'twitter-new-widgets',
        name: 'twitter:widgets:new-embed-design',
        content: 'on'
      },
      {
        key: 'color-scheme',
        name: 'color-scheme',
        content: 'light dark'
      }
    ]
  }))

  onBeforeMount(() => store.init())
</script>

<template>
  <router-view />
</template>

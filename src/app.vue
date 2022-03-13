<script lang="ts" setup>
  import { onBeforeMount } from 'vue'
  import { useGlobalStore } from '@/store'
  import { useMeta } from '@/composables/meta'
  import { useTheme } from '@/composables/theme'

  const store = useGlobalStore()
  const theme = useTheme()

  useMeta(() => ({
    htmlAttrs: {
      theme: theme.theme.value
    }
  }))

  onBeforeMount(() => store.init())
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss" src="@/styles/app.scss"></style>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount } from 'vue'
  import { useGlobalStore } from '@/store'
  import { useMeta } from '@/composables/meta'
  import { useTheme } from '@/composables/theme'

  export default defineComponent({
    name: 'app',
    setup() {
      const store = useGlobalStore()
      const theme = useTheme()

      useMeta(() => ({
        htmlAttrs: {
          theme: theme.theme.value
        }
      }))

      onBeforeMount(() => store.init())
    }
  })
</script>

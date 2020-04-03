<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<script lang="ts">
  import { createComponent, onBeforeMount } from '@vue/composition-api'
  import { isBrowser } from '@/environment'
  import { StoreNames } from '@/store'

  export default createComponent({
    name: 'app',
    setup(_, { root }) {
      onBeforeMount(() => {
        if (isBrowser) {
          root.$store.dispatch(StoreNames.Init)
        }
      })
    }
  })
</script>

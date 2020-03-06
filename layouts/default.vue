<template>
  <div id="app">
    <nuxt />
    <!-- <el-backtop /> -->
  </div>
</template>

<script lang="ts">
  import { createComponent, onMounted } from '@vue/composition-api'
  import { isBrowser } from '@/environment'
  import { StoreNames } from '@/store'
  import CONFIG from '@/config'

  export default createComponent({
    name: 'app',
    setup(_, { root }) {
      onMounted(() => {
        if (isBrowser) {
          root.$store.dispatch(StoreNames.Init)
        }
      })
    }
  })
</script>
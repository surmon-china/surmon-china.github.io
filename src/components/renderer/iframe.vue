<template>
  <div>
    <navbar class="legacy-header" :repository="id" />
    <iframe class="legacy-iframe" :src="src || legacyUrl" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { V2_LEGACY_URL } from '@/config'
  import { useMeta } from '@/composables/meta'
  import Navbar from '@/components/common/navbar.vue'

  export default defineComponent({
    name: 'legacy-iframe',
    components: { Navbar },
    props: {
      src: String,
      id: {
        type: String,
        required: true
      }
    },
    setup(props) {
      useMeta({
        bodyAttrs: {
          style: 'overflow: hidden;'
        }
      })
      return {
        legacyUrl: `${V2_LEGACY_URL}${props.id}`
      }
    }
  })
</script>

<style scoped>
  .legacy-iframe {
    width: 100vw;
    height: 100vh;
    border: none;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>

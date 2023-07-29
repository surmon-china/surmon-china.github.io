<script lang="ts" setup>
  import { GOOGLE_ADSENSE_CLIENT_ID } from '@/config'
  const props = defineProps({
    rootClass: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <Adsense
    :class="`g-a-mammon ${rootClass}`"
    :data-ad-client="GOOGLE_ADSENSE_CLIENT_ID"
    :data-full-width-responsive="true"
    data-ad-format="auto"
    data-ad-slot="5885388786"
  ></Adsense>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  .g-a-mammon {
    width: 100%;
    height: 10rem;
  }
</style>

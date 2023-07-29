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
    :is-non-personalized-ads="false"
    data-ad-format="auto"
    data-ad-slot="7455679385"
  ></Adsense>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  .g-a-mammon {
    width: 100%;
    min-height: 6rem;
    height: auto;
  }
</style>

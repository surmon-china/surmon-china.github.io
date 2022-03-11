<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { GOOGLE_ADSENSE_CLIENT } from '@/config'
  const props = defineProps({
    rootClass: String
  })
</script>

<template>
  <Adsense
    :root-class="`g-a-mammon ${rootClass}`"
    :data-ad-client="GOOGLE_ADSENSE_CLIENT"
    :data-full-width-responsive="true"
    :is-non-personalized-ads="false"
    data-ad-slot="7455679385"
  ></Adsense>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';
  .g-a-mammon {
    width: 100%;
    min-height: 6rem;
    height: auto;
  }
</style>

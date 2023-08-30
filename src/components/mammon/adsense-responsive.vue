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
    ins-style="display:inline-block;width:960px;height:240px"
    :data-ad-client="GOOGLE_ADSENSE_CLIENT_ID"
    data-ad-slot="5885388786"
  ></Adsense>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  .g-a-mammon {
    width: 100%;
    height: 240px;
  }
</style>

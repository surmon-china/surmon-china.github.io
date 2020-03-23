<template>
  <client-only>
    <Adsense
      :root-class="`mammon g-a ${rootClass}`"
      :data-ad-client="GOOGLE_ADSENSE_CLIENT"
      :data-full-width-responsive="true"
      :is-non-personalized-ads="false"
      data-ad-slot="7455679385"
    >
    </Adsense>
  </client-only>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { createComponent } from '@vue/composition-api'
  import { GOOGLE_ADSENSE_CLIENT } from '@/config'
  export default createComponent({
    name: 'AdsenseResponsiveAd2',
    props: {
      rootClass: String
    },
    setup() {
      return {
        GOOGLE_ADSENSE_CLIENT
      }
    }
  })
</script>

<template>
  <client-only>
    <Adsense
      :root-class="`mammon g-a ${rootClass}`"
      data-ad-client="ca-pub-4710915636313788"
      data-ad-slot="8733527061"
      :data-full-width-responsive="true"
    >
    </Adsense>
  </client-only>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { createComponent } from '@vue/composition-api'
  export default createComponent({
    name: 'AdsenseResponsiveAd1',
    props: {
      rootClass: String
    }
  })
</script>

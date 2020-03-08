<template>
  <client-only>
    <Adsense
      :root-class="`mammon g-a ${rootClass}`"
      data-ad-client="ca-pub-4710915636313788"
      data-ad-slot="7455679385"
      :data-full-width-responsive="true"
    >
    </Adsense>
  </client-only>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { createComponent } from '@vue/composition-api'
  export default createComponent({
    name: 'AdsenseResponsiveAd2',
    props: {
      rootClass: String
    }
  })
</script>

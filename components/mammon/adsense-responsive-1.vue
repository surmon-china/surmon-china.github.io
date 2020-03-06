<template>
  <div class="mammon card">
    <client-only>
      <Adsense
        data-ad-client="ca-pub-4710915636313788"
        data-ad-slot="8733527061"
        :data-full-width-responsive="true"
      >
      </Adsense>
    </client-only>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { createComponent } from '@vue/composition-api'
  export default createComponent({
    name: 'AdsenseResponsiveAd1'
  })
</script>

<style lang="scss">
  .mammon {
    &.card {
      min-height: 8rem;
    }
  }
</style>

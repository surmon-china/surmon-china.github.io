<template>
  <div class="homepage-ad-card">
    <homepage-basic-card>
      <!-- China user -> random Aliyun/ADSense -->
      <!-- Other user -> ADSense -->
      <!-- IF exixt Aliyun -> ADSense -->
      <aliyun-swiper-ad />
    </homepage-basic-card>
  </div>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { isChinaGuest } from '@/environment'
  import AliyunSwiperAd from '@/components/mammon/aliyun-swiper.vue'
  import HomepageBasicCard from './card-basic.vue'
  import CONFIG from '@/config'

  export enum MammonProvider {
    Aliyun = 'Aliyun',
    GoogleAdSense = 'GoogleAdSense'
  }

  export default createComponent({
    props: {
      name: {
        type: String,
        default: MammonProvider.GoogleAdSense
      },
    },
    name: 'homepage-mammon-card',
    components: {
      HomepageBasicCard,
      AliyunSwiperAd
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-ad-card {
  }
</style>

<template>
  <aliyun-swiper-ad key="aliyun" v-if="isEnabledAd(MammonProvider.Aliyun)" />
  <adsense-responsive-ad-1 key="gad1" v-else-if="isEnabledAd(MammonProvider.GoogleAdSense1)" />
  <adsense-responsive-ad-2 key="gad2" v-else-if="isEnabledAd(MammonProvider.GoogleAdSense2)" />
  <adsense-responsive-ad-3 key="gad2" v-else-if="isEnabledAd(MammonProvider.GoogleAdSense3)" />
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  import AliyunSwiperAd from '@/components/mammon/aliyun-swiper.vue'
  import CONFIG from '@/config'

  export enum MammonProvider {
    Aliyun = 'Aliyun',
    GoogleAdSense1 = 'GoogleAdSense1',
    GoogleAdSense2 = 'GoogleAdSense2',
    GoogleAdSense3 = 'GoogleAdSense3'
  }

  export const cnMammonProviders = [
    MammonProvider.Aliyun
  ]
  export const gaMammonProviders = [
    MammonProvider.GoogleAdSense1,
    MammonProvider.GoogleAdSense2,
    MammonProvider.GoogleAdSense3
  ]

  export default createComponent({
    name: 'mammon',
    components: {
      AliyunSwiperAd
    },
    props: {
      provider: {
        type: String,
        default: MammonProvider.GoogleAdSense1
      },
    },
    setup(props) {
      return {
        MammonProvider,
        isEnabledAd(provider: MammonProvider) {
          return props.provider === provider
        }
      }
    }
  })
</script>

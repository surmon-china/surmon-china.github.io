<template>
  <aliyun-swiper-ad key="aliyun" v-if="isEnabledAliyun" />
  <adsense-responsive-ad-1 key="gad1" v-else-if="isEnabledGA1" />
  <adsense-responsive-ad-2 key="gad2" v-else-if="isEnabledGA2" />
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  import AliyunSwiperAd from '@/components/mammon/aliyun-swiper.vue'
  import CONFIG from '@/config'

  export enum MammonProvider {
    Aliyun = 'Aliyun',
    GoogleAdSense1 = 'GoogleAdSense1',
    GoogleAdSense2 = 'GoogleAdSense2'
  }

  export const cnMammonProviders = [
    MammonProvider.Aliyun
  ]
  export const gaMammonProviders = [
    MammonProvider.GoogleAdSense1,
    MammonProvider.GoogleAdSense2
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
        isEnabledAliyun: computed(() => props.provider === MammonProvider.Aliyun),
        isEnabledGA1: computed(() => props.provider === MammonProvider.GoogleAdSense1),
        isEnabledGA2: computed(() => props.provider === MammonProvider.GoogleAdSense2),
      }
    }
  })
</script>

<template>
  <aliyun-swiper-ad key="aliyun" v-if="isEnabledAliyun" />
  <adsense-responsive-ad-1 key="gad1" v-else />
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  import AliyunSwiperAd from '@/components/mammon/aliyun-swiper.vue'
  import CONFIG from '@/config'

  export enum MammonProvider {
    Aliyun = 'Aliyun',
    GoogleAdSense = 'GoogleAdSense'
  }

  export default createComponent({
    name: 'mammon',
    components: {
      AliyunSwiperAd
    },
    props: {
      provider: {
        type: String,
        default: MammonProvider.GoogleAdSense
      },
    },
    setup(props) {
      return {
        isEnabledAliyun: computed(() => props.provider === MammonProvider.Aliyun)
      }
    }
  })
</script>

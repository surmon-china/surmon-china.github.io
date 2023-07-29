import { defineComponent, PropType, h } from 'vue'
import GoogleAdSense from './adsense-responsive.vue'
import GoogleAdSense1 from './adsense-responsive-1.vue'
import GoogleAdSense2 from './adsense-responsive-2.vue'
import GoogleAdSense3 from './adsense-responsive-3.vue'
import SwiperAd from './swiper.vue'
import ImageAd from './image.vue'

export enum MammonProvider {
  Image = 'Image',
  Swiper = 'Swiper',
  GoogleAdSense = 'GoogleAdSense',
  GoogleAdSense1 = 'GoogleAdSense1',
  GoogleAdSense2 = 'GoogleAdSense2',
  GoogleAdSense3 = 'GoogleAdSense3'
}

export const customMammonProviders = [MammonProvider.Swiper, MammonProvider.Image]
export const unionMammonProviders = [
  MammonProvider.GoogleAdSense1,
  MammonProvider.GoogleAdSense2,
  MammonProvider.GoogleAdSense3
]

export default defineComponent({
  name: 'mammon',
  props: {
    provider: {
      type: String as PropType<MammonProvider>,
      default: MammonProvider.GoogleAdSense1
    }
  },
  setup(props) {
    return () => {
      if (props.provider === MammonProvider.Image) {
        return h(ImageAd)
      }
      if (props.provider === MammonProvider.Swiper) {
        return h(SwiperAd)
      }
      if (props.provider === MammonProvider.GoogleAdSense) {
        return h(GoogleAdSense)
      }
      if (props.provider === MammonProvider.GoogleAdSense1) {
        return h(GoogleAdSense1)
      }
      if (props.provider === MammonProvider.GoogleAdSense2) {
        return h(GoogleAdSense2)
      }
      if (props.provider === MammonProvider.GoogleAdSense3) {
        return h(GoogleAdSense3)
      }

      return null
    }
  }
})

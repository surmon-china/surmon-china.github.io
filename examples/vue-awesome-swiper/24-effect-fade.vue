<template>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide class="slide" v-for="index in 5" :key="index">
      <img :src="`/images/example/${index}.jpg`" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Navigation, EffectFade } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import 'swiper/css/effect-fade'

  export default defineComponent({
    name: 'swiper-example-fade-effect',
    title: 'Fade effect',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, EffectFade]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;
  @use './mixins.scss' as swiperMix;

  .swiper {
    @include swiperMix.swiper-wrapper($height: 360px);

    .slide {
      @include swiperMix.swiper-slide();

      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>

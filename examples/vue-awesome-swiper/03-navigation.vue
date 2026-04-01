<template>
  <swiper class="swiper" :modules="modules" navigation>
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
    <swiper-slide class="slide">Slide 6</swiper-slide>
    <swiper-slide class="slide">Slide 7</swiper-slide>
    <swiper-slide class="slide">Slide 8</swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Navigation } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-navigation',
    title: 'Navigation',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Navigation]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;
  @use './mixins.scss' as swiperMix;

  .swiper {
    @include swiperMix.swiper-wrapper();
  }

  .slide {
    @include swiperMix.swiper-slide();
  }
</style>

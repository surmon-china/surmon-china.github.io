<template>
  <swiper class="swiper" :modules="modules" :navigation="true" :pagination="{ clickable: true }" dir="rtl">
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
  import { Pagination, Navigation } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-rtl',
    title: 'RTL layout',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation]
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

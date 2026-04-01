<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="3"
    :grid="{ rows: 2 }"
    :space-between="30"
    :pagination="{ clickable: true }"
  >
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
    <swiper-slide class="slide">Slide 6</swiper-slide>
    <swiper-slide class="slide">Slide 7</swiper-slide>
    <swiper-slide class="slide">Slide 8</swiper-slide>
    <swiper-slide class="slide">Slide 9</swiper-slide>
    <swiper-slide class="slide">Slide 10</swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Grid } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/grid'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-slides-per-column',
    title: 'Multi row slides layout',
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Grid]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;
  @use './mixins.scss' as swiperMix;

  .swiper {
    @include swiperMix.swiper-wrapper($height: 430px);
  }

  .slide {
    @include swiperMix.swiper-slide();
    height: 200px;
  }
</style>

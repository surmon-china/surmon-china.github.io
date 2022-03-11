<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    :keyboard="{ enabled: true }"
    :pagination="{ clickable: true }"
    :navigation="true"
  >
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
  import { Pagination, Navigation, Keyboard } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-keyboard-control',
    title: 'Keyboard control',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Keyboard]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper();
  }

  .slide {
    @include swiper-slide();
  }
</style>

<template>
  <swiper class="swiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
  </swiper>
</template>

<script>
  // TODO: 4.0
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-default',
    title: 'Default use @composition-api & TypeScript (important)',
    components: {
      Swiper,
      SwiperSlide
    },
    directive: {
      swiper: directive
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss'
</style>

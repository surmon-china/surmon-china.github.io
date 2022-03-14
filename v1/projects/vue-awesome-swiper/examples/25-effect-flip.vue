<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="slide-1"></swiper-slide>
    <swiper-slide class="slide-2"></swiper-slide>
    <swiper-slide class="slide-3"></swiper-slide>
    <swiper-slide class="slide-4"></swiper-slide>
    <swiper-slide class="slide-5"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-3d-flip',
    title: '3D Flip effect',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'flip',
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .swiper {
    width: 300px;
    padding: 50px;
    background-color: $module-bg;

    .swiper-slide {
      background-position: 50%;
      background-size: cover;
      width: 100%;

      &.slide-1 {
        background-image:url('/images/example/5.jpg');
      }
      &.slide-2 {
        background-image:url('/images/example/6.jpg');
      }
      &.slide-3 {
        background-image:url('/images/example/7.jpg');
      }
      &.slide-4 {
        background-image:url('/images/example/8.jpg');
      }
      &.slide-5 {
        background-image:url('/images/example/9.jpg');
      }
    }
  }
</style>

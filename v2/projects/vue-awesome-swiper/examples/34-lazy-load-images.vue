<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <img data-src="/images/example/1.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="/images/example/2.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="/images/example/3.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="/images/example/4.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="/images/example/5.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <swiper-slide>
      <img data-src="/images/example/6.jpg" class="swiper-lazy">
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-lazy-loading-image',
    title: 'Lazy loading images',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          // Enable lazy loading
          lazy: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
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

  .swiper-slide {
    text-align: center;
    background: #444 !important;

    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      transform: translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
</style>

<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="/images/example/4.jpg">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="/images/example/7.jpg">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="/images/example/8.jpg">
      </div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-zoom',
    title: 'Zoom',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          zoom: true,
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
    height: 400px;

    .swiper-slide {
      background: #444;
    }
  }
</style>

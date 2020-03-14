<template>
  <swiper class="swiper" :options="swiperOptionh">
    <swiper-slide>Horizontal Slide 1</swiper-slide>
    <swiper-slide>
      <swiper class="swiper vertical" :options="swiperOptionv">
        <swiper-slide>Vertical Slide 1</swiper-slide>
        <swiper-slide>Vertical Slide 2</swiper-slide>
        <swiper-slide>Vertical Slide 3</swiper-slide>
        <swiper-slide>Vertical Slide 4</swiper-slide>
        <swiper-slide>Vertical Slide 5</swiper-slide>
        <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
      </swiper>
    </swiper-slide>
    <swiper-slide>Horizontal Slide 1</swiper-slide>
    <swiper-slide>Horizontal Slide 2</swiper-slide>
    <swiper-slide>Horizontal Slide 3</swiper-slide>
    <swiper-slide>Horizontal Slide 4</swiper-slide>
    <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-nested',
    title: 'Nested swipers',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOptionh: {
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination-h',
            clickable: true
          }
        },
        swiperOptionv: {
          direction: 'vertical',
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination-v',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .swiper.vertical {
    background-color: beige;
  }
</style>

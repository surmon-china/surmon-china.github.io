<template>
  <swiper class="swiper" :options="swiperOption">
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
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-pagination-custom',
    title: 'Custom Pagination',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: $font-size-huge * 2;
      background-color: $white;
    }

    /deep/ .swiper-pagination-bullet-custom {
      $size: 20px;
      width: $size !important;
      height: $size !important;
      line-height: $size !important;
      text-align: center;
      color: $text-color;
      opacity: 0.7;
      background: rgba($text-color, 0.2);
      transition: all $transition-time-normal;

      &:hover {
        opacity: 1;
      }

      &.swiper-pagination-bullet-active {
        opacity: 1;
        color: $white;
        background: #007aff;
      }
    }
  }
</style>

<style lang="scss">
</style>

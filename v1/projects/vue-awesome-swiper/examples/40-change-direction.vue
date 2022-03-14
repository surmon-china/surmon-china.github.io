<template>
  <swiper class="swiper" ref="swiper" :options="swiperOption">
    <swiper-slide>Resize me 1</swiper-slide>
    <swiper-slide>Resize me 2</swiper-slide>
    <swiper-slide>Resize me 3</swiper-slide>
    <swiper-slide>Resize me 4</swiper-slide>
    <swiper-slide>Resize me 5</swiper-slide>
    <swiper-slide>Resize me 6</swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-change-direction',
    title: 'Change direction',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            resize: () => {
              this.$refs.swiper.$swiper.changeDirection(
                window.innerWidth <= 960
                  ? 'vertical'
                  : 'horizontal'
              )
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  @media (max-width: $container-width) {
    .swiper-button-next {
      right: 20px;
      transform: rotate(90deg);
    }

    .swiper-button-prev {
      left: 20px;
      transform: rotate(90deg);
    }
  }
</style>

<template>
  <div class="example">
    <div class="toolbar">
      <button @click="toSlide(0)">To Slide 1</button>
      <button @click="toSlide(249)">To Slide 250</button>
      <button @click="toSlide(499)">To Slide 500</button>
    </div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-virtual-slides',
    title: 'Virtual slides',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          virtual: {
            slides: Array(600)
              .fill('Slide')
              .map((item, index) => `${item} ${index + 1}`)
          }
        }
      }
    },
    methods: {
      toSlide(index) {
        this.$refs.mySwiper.$swiper.slideTo(index, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .example {
    height: auto;

    .swiper {
      height: 300px;
      width: 100%;

      /deep/ .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: $font-size-huge * 2;
        background-color: $white;
      }
    }

    .toolbar {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 2rem;
      border-bottom: 1px solid $body-bg;
      margin-bottom: $gap;

      button {
        flex: 1;
        padding: 0;
        margin: 0;
        border: none;
        border-right: 1px solid $body-bg;
        background-color: $module-bg;
        cursor: pointer;
        &:last-child {
          border: none;
        }

        &:hover {
          background-color: $module-bg-darken;
        }
      }
    }
  }
</style>

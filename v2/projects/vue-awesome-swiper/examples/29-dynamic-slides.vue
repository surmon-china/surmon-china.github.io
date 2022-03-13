<template>
  <div class="example">
    <div class="toolbar">
      <button @click="prependSlide">Prepend slide</button>
      <button @click="appendSlide">Append slide</button>
      <button @click="popSlide">Pop slide</button>
      <button @click="shiftSlide">Shift slide</button>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="slide in swiperSlides"
        :key="slide"
      >Slide {{ slide }}</swiper-slide>
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
    name: 'swiper-example-dynamic-slides',
    title: 'Dynamic slides',
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
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      appendSlide() {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      },
      prependSlide() {
        this.swiperSlides.unshift(this.swiperSlides[0] - 1)
      },
      popSlide() {
        this.swiperSlides.pop()
      },
      shiftSlide() {
        this.swiperSlides.shift()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';

  .example {
    height: auto;

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

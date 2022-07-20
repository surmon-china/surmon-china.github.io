<template>
  <div class="tip">→ Resize the browser window ←</div>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :pagination="{ clickable: true }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50
      }
    }"
  >
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
    <swiper-slide class="slide">Slide 6</swiper-slide>
    <swiper-slide class="slide">Slide 7</swiper-slide>
    <swiper-slide class="slide">Slide 8</swiper-slide>
    <swiper-slide class="slide">Slide 9</swiper-slide>
    <swiper-slide class="slide">Slide 10</swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-responsive-breakpoints',
    title: 'Responsive breakpoints',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .tip {
    width: 100%;
    line-height: 3em;
    text-align: center;
    border-bottom: 1px solid $border-color;
  }

  .swiper {
    @include swiper-wrapper();
  }

  .slide {
    @include swiper-slide();
  }
</style>

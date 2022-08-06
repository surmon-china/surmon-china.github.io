<template>
  <swiper
    class="swiper"
    :modules="modules"
    direction="horizontal"
    :slides-per-view="3"
    :space-between="30"
    :navigation="true"
    @swiper="setSwiperRef"
    @resize="handleResize"
  >
    <swiper-slide class="slide">Slide 1</swiper-slide>
    <swiper-slide class="slide">Slide 2</swiper-slide>
    <swiper-slide class="slide">Slide 3</swiper-slide>
    <swiper-slide class="slide">Slide 4</swiper-slide>
    <swiper-slide class="slide">Slide 5</swiper-slide>
    <swiper-slide class="slide">Slide 6</swiper-slide>
    <swiper-slide class="slide">Slide 7</swiper-slide>
    <swiper-slide class="slide">Slide 8</swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SwiperClass, { Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-change-direction',
    title: 'Change direction',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      let swiperRef: SwiperClass | null = null
      const setSwiperRef = (swiper: SwiperClass) => {
        swiperRef = swiper
      }

      const handleResize = () => {
        swiperRef?.changeDirection(window.innerWidth <= 960 ? 'vertical' : 'horizontal')
      }

      return {
        modules: [Navigation],
        setSwiperRef,
        handleResize
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper();

    &.swiper-vertical {
      ::v-deep(.swiper-button-next) {
        right: 20px;
        transform: rotate(90deg);
      }
      ::v-deep(.swiper-button-prev) {
        left: 20px;
        transform: rotate(90deg);
      }
    }
  }

  .slide {
    @include swiper-slide();
  }
</style>

<template>
  <swiper class="swiper swiper-h" :modules="modules" :space-between="50" :pagination="{ clickable: true }">
    <swiper-slide class="slide">Horizontal Slide 1</swiper-slide>
    <swiper-slide class="slide">
      <swiper
        class="swiper-v"
        :modules="modules"
        direction="vertical"
        :spaceBetween="50"
        :pagination="{ clickable: true }"
      >
        <swiper-slide class="slide">Vertical Slide 1</swiper-slide>
        <swiper-slide class="slide">Vertical Slide 2</swiper-slide>
        <swiper-slide class="slide">Vertical Slide 3</swiper-slide>
        <swiper-slide class="slide">Vertical Slide 4</swiper-slide>
        <swiper-slide class="slide">Vertical Slide 5</swiper-slide>
      </swiper>
    </swiper-slide>
    <swiper-slide class="slide">Horizontal Slide 3</swiper-slide>
    <swiper-slide class="slide">Horizontal Slide 4</swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'

  export default defineComponent({
    name: 'swiper-example-nested',
    title: 'Nested swipers',
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
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;
  @use './mixins.scss' as swiperMix;

  .swiper {
    @include swiperMix.swiper-wrapper();
  }

  .slide {
    @include swiperMix.swiper-slide();
  }

  .swiper-v {
    background-color: rgb(22 27 34 / 80%);
  }
</style>

<template>
  <swiper
    class="swiper"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :modules="modules"
    :lazy="true"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="slide in 8" :key="slide" class="slide" :lazy="true">
      <img :src="`/images/example/${slide}.jpg`" loading="lazy" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Navigation } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-lazy-loading-image',
    title: 'Lazy loading images',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation]
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
    background-color: black;
  }

  .slide {
    text-align: center;

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

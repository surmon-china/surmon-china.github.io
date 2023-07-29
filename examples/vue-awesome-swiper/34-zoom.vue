<template>
  <swiper
    class="swiper"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :modules="modules"
    :zoom="true"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="slide in 8" :key="slide" class="slide">
      <div class="swiper-zoom-container">
        <img :src="`/images/example/${slide}.jpg`" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Navigation, Zoom } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/zoom'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-zoom',
    title: 'Zoom',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Zoom]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper($height: 400px);
  }

  .slide {
    @include swiper-slide();
    overflow: hidden;
  }
</style>

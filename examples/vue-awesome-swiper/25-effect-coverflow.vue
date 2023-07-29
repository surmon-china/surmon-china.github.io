<template>
  <div class="coverflow-example">
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="true"
      :effect="'coverflow'"
      :grab-cursor="true"
      :centered-slides="true"
      :slides-per-view="'auto'"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
    >
      <swiper-slide class="slide" v-for="index in 8" :key="index">
        <img :src="`/images/example/${index}.jpg`" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, EffectCoverflow } from 'swiper/modules'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-coverflow'

  export default defineComponent({
    name: 'swiper-example-3d-coverflow',
    title: '3D Coverflow effect',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, EffectCoverflow]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .coverflow-example {
    @include swiper-wrapper($height: 380px);
    position: relative;
  }

  .swiper {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .slide {
      width: 300px;
      height: 300px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>

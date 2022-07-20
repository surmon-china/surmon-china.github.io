<template>
  <div class="cube-example">
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="true"
      :effect="'cube'"
      :grab-cursor="true"
      :cube-effect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }"
    >
      <swiper-slide class="slide" v-for="index in 5" :key="index">
        <img :src="`/images/example/${index}.jpg`" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, EffectCube } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-cube'

  export default defineComponent({
    name: 'swiper-example-3d-cube',
    title: '3D Cube effect',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, EffectCube]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .cube-example {
    @include swiper-wrapper($height: 380px);
    position: relative;
  }

  .swiper {
    width: 300px !important;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;

    .slide {
      @include swiper-slide();

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>

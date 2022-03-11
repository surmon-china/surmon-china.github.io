<template>
  <div class="flip-example">
    <swiper
      class="swiper"
      :modules="modules"
      :effect="'flip'"
      :grab-cursor="true"
      :pagination="true"
      :navigation="true"
    >
      <swiper-slide class="slide">
        <img src="/images/example/1.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/2.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/3.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/4.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/5.jpg" />
      </swiper-slide>
      <swiper-slide class="slide">
        <img src="/images/example/6.jpg" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Navigation, EffectFlip } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import 'swiper/css/effect-flip'

  export default defineComponent({
    name: 'swiper-example-3d-flip',
    title: '3D Flip effect',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, EffectFlip]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';
  @import './style.scss';

  .flip-example {
    position: relative;
  }

  .swiper {
    width: 300px;
    height: 300px;
    padding: 50px;
    box-sizing: content-box;

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

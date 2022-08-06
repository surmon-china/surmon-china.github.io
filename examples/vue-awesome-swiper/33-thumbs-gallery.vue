<template>
  <div class="thumb-example">
    <swiper
      class="top-swiper"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
      }"
      :modules="modules"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide class="slide" v-for="index in 8" :key="index">
        <img :src="`/images/example/${index}.jpg`" />
      </swiper-slide>
    </swiper>
    <swiper
      class="thumbs-swiper"
      :modules="modules"
      :space-between="10"
      :slides-per-view="4"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide class="slide" v-for="index in 8" :key="index">
        <img :src="`/images/example/${index}.jpg`" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import SwiperClass, { Navigation, Thumbs } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/thumbs'

  export default defineComponent({
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const thumbsSwiper = ref<SwiperClass>()
      const setThumbsSwiper = (swiper: SwiperClass) => {
        thumbsSwiper.value = swiper
      }

      return {
        modules: [Navigation, Thumbs],
        setThumbsSwiper,
        thumbsSwiper
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';
  @import './style.scss';

  .thumb-example {
    height: 480px;
    background-color: $black;
  }

  .top-swiper,
  .thumbs-swiper {
    .slide {
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .top-swiper {
    height: 80%;
    width: 100%;
  }

  .thumbs-swiper {
    height: 20%;
    box-sizing: border-box;
    padding: $gap 0;

    .slide {
      width: 25%;
      height: 100%;
      opacity: 1;
      &:not(.swiper-slide-thumb-active) {
        opacity: 0.4;
      }
    }
  }
</style>

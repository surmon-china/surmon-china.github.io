<script lang="ts" setup>
  import { defineComponent } from 'vue'
  import { Pagination, Mousewheel } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { SWIPER_ADS } from '@/config'

  import 'swiper/css'
  import 'swiper/css/pagination'
</script>

<template>
  <swiper
    class="swiper-mammon"
    direction="vertical"
    :css-mode="true"
    :modules="[Pagination, Mousewheel]"
    :autoHeight="true"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 2600,
      disableOnInteraction: false
    }"
  >
    <swiper-slide class="slide" :key="index" v-for="(ad, index) in SWIPER_ADS">
      <a :href="ad.url" class="link" target="_blank">
        <div :style="{ backgroundImage: `url(${ad.image})` }" class="image"></div>
      </a>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .swiper-mammon {
    height: 9rem;

    .slide {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .link {
        width: 100%;
        height: 100%;
        cursor: pointer;

        .image {
          width: 100%;
          height: 100%;
          cursor: pointer;
          background-size: cover;
          opacity: 0.9;
          transition: opacity $transition-time;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
</style>

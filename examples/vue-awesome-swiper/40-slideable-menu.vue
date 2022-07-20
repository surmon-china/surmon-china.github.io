<template>
  <swiper
    class="swiper"
    slides-per-view="auto"
    :initial-slide="1"
    :resistance-ratio="0"
    @swiper="setSwiperRef"
    @slide-change="handleSlideChange"
  >
    <swiper-slide class="menu">Menu slide</swiper-slide>
    <swiper-slide class="content">
      <div class="menu-button" :class="{ opened: menuOpened }" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div>Content slide</div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import SwiperClass from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'

  export default defineComponent({
    name: 'swiper-example-slideable-navigation-drawer',
    title: 'Slideable navigation drawer',
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

      const menuOpened = ref(false)
      const toggleMenu = () => {
        menuOpened.value ? swiperRef?.slideNext() : swiperRef?.slidePrev()
      }

      const handleSlideChange = () => {
        menuOpened.value = swiperRef?.activeIndex === 0
      }

      return {
        menuOpened,
        toggleMenu,
        setSwiperRef,
        handleSlideChange
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

    .menu,
    .content {
      @include swiper-slide();
    }

    .menu {
      width: 320px;
      background-color: #2c8dfb !important;
      color: #fff;
    }

    .menu-button {
      position: absolute;
      top: 0px;
      left: 0px;
      padding: 15px;
      cursor: pointer;
      transition: 0.3s;
      background-color: #2c8dfb;

      .bar {
        position: relative;
        display: block;
        width: 50px;
        height: 5px;
        margin: 10px auto;
        background-color: #fff;
        border-radius: 10px;
        transition: 0.3s;

        &:nth-of-type(1) {
          margin-top: 0px;
        }
        &:nth-of-type(3) {
          margin-bottom: 0px;
        }
      }

      &:hover {
        .bar:nth-of-type(1) {
          transform: translateY(1.5px) rotate(-4.5deg);
        }
        .bar:nth-of-type(2) {
          opacity: 0.9;
        }
        .bar:nth-of-type(3) {
          transform: translateY(-1.5px) rotate(4.5deg);
        }
      }

      &.opened {
        .bar:nth-of-type(1) {
          transform: translateY(15px) rotate(-45deg);
        }
        .bar:nth-of-type(2) {
          opacity: 0;
        }
        .bar:nth-of-type(3) {
          transform: translateY(-15px) rotate(45deg);
        }

        &:hover {
          .bar:nth-of-type(1) {
            transform: translateY(13.5px) rotate(-40.5deg);
          }
          .bar:nth-of-type(2) {
            opacity: 0.1;
          }
          .bar:nth-of-type(3) {
            transform: translateY(-13.5px) rotate(40.5deg);
          }
        }
      }
    }
  }
</style>

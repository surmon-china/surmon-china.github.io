<template>
  <swiper class="swiper" :options="swiperOption" ref="swiper">
    <swiper-slide class="menu">Menu slide</swiper-slide>
    <swiper-slide class="content">
      <div
        class="menu-button"
        :class="{ 'opened': menuOpened }"
        @click="toggleMenu($event)"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      Content slide
    </swiper-slide>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-slideable-navigation-drawer',
    title: 'Slideable navigation drawer',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        menuOpened: false,
        swiperOption: {
          initialSlide: 1,
          resistanceRatio: 0,
          slidesPerView: 'auto',
          on: {
            slideChange: () => {
              this.menuOpened = this.swiper.activeIndex === 0
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.swiper.$swiper
      }
    },
    methods: {
      toggleMenu(event) {
        this.menuOpened
          ? this.swiper.slideNext()
          : this.swiper.slidePrev()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './base.scss';
  .swiper {
    .menu {
      min-width: 100px;
      width: 70%;
      max-width: 320px;
      background-color: #2C8DFB!important;
      color: #fff;
    }

    .content {
      width: 100%;
    }

    .menu-button {
      position: absolute;
      top: 0px;
      left: 0px;
      padding: 15px;
      cursor: pointer;
      transition: .3s;
      background-color: #2C8DFB;

      .bar {
        position: relative;
        display: block;
        width: 50px;
        height: 5px;
        margin: 10px auto;
        background-color: #fff;
        border-radius: 10px;
        transition: .3s;

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
          opacity: .9;
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
            opacity: .1;
          }
          .bar:nth-of-type(3) {
            transform: translateY(-13.5px) rotate(40.5deg);
          }
        }
      }
    }
  }
</style>

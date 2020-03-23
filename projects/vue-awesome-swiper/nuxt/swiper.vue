<template>
  <div class="example">
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
    <!-- directive: render origin html on server & render Swiper on browser -->
    <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
    <div
      class="swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'swiper-nuxt',
    data () {
      return {
        swiperOptions: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .example {
    height: auto;

    .swiper {
      height: 300px;
      width: 100%;

      .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .swiper-pagination {
        > .swiper-pagination-bullet {
          background-color: red;
        }
      }
    }
  }
</style>

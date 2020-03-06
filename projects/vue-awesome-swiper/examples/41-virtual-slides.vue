<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Virtual Slides</span>
        <span>（</span>
        <span>虚拟 Slides</span>
        <span>）</span>
      </div>
      <div>
        <md-button @click.native="toSlide(0)">To Slide 1</md-button>
        <md-button @click.native="toSlide(249)">To Slide 250</md-button>
        <md-button @click.native="toSlide(499)">To Slide 500</md-button>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/41-virtual-slides.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'swiper-example-03',
    components: {
      swiper,
      swiperSlide
    },
    exampleData: {
      name: 'Pagination'
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          virtual: {
            slides: (function () {
              const slides = [];
              for (let i = 0; i < 600; i += 1) {
                slides.push('Slide ' + (i + 1))
              }
              return slides
            }())
          }
        }
      }
    },
    methods: {
      toSlide(i) {
        this.$refs.mySwiper.swiper.slideTo(i, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: $font-size-huge * 2;
      background-color: $white;
    }
  }
</style>

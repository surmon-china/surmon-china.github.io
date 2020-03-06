<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Dynamic Slides</span>
        <span>（</span>
        <span>动态加载 Slides</span>
        <span>）</span>
      </div>
      <div>
        <md-button @click.native="prependSlide">Prepend Slide</md-button>
        <md-button @click.native="appendSlide">Append Slide</md-button>
        <md-button @click.native="popSlide">Pop Slide</md-button>
        <md-button @click.native="shiftSlide">Shift Slide</md-button>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/29-dynamic-slides.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides" :key="slide">Slide {{ slide }}</swiper-slide>
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
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      appendSlide() {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      },
      prependSlide() {
        this.swiperSlides.unshift(this.swiperSlides[0] - 1)
      },
      popSlide() {
        this.swiperSlides.pop()
      },
      shiftSlide() {
        this.swiperSlides.shift()
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

<style scoped>
  .append-buttons {
    text-align: center;
    margin-top: 20px;
  }
  .append-buttons a {
    display: inline-block;
    margin: 0 10px;
  }
</style>

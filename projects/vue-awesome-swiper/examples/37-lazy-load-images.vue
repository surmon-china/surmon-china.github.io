<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Lazy Loading Images</span>
        <span>（</span>
        <span>图片延迟加载</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/37-lazy-load-images.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img data-src="/static/images/surmon-1.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>
        <swiper-slide>
            <img data-src="/static/images/surmon-2.jpg" class="swiper-lazy">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="/static/images/surmon-3.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="/static/images/surmon-4.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="/static/images/surmon-5.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="/static/images/surmon-6.jpg" class="swiper-lazy">
          <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
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
          // Enable lazy loading
          lazy: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
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
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444!important;
  }
  .swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
</style>

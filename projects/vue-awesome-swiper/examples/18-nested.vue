<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Nested Swipers</span>
        <span>（</span>
        <span>Swipers 嵌套</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/18-nested.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper class="swiper" :options="swiperOptionh">
        <swiper-slide>Horizontal Slide 1</swiper-slide>
        <swiper-slide>
          <swiper class="swiper" :options="swiperOptionv">
            <swiper-slide>Vertical Slide 1</swiper-slide>
            <swiper-slide>Vertical Slide 2</swiper-slide>
            <swiper-slide>Vertical Slide 3</swiper-slide>
            <swiper-slide>Vertical Slide 4</swiper-slide>
            <swiper-slide>Vertical Slide 5</swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>Horizontal Slide 1</swiper-slide>
        <swiper-slide>Horizontal Slide 2</swiper-slide>
        <swiper-slide>Horizontal Slide 3</swiper-slide>
        <swiper-slide>Horizontal Slide 4</swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
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
        swiperOptionh: {
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination-h',
            clickable: true
          }
        },
        swiperOptionv: {
          direction: 'vertical',
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination-v',
            clickable: true
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
  .swiper-container-v {
    background: #eee;
  }
</style>

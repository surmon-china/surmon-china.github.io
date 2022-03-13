<template>
  <div>
    <swiper
      ref="mySwiper"
      class="swiper my-swiper"
      :options="swiperOption" 
      @setTranslate="onSlideChange"
      @ready="swiperReady"
    >
      <!-- slides -->
      <swiper-slide v-for="slide in slides" :key="slide">I'm Slide {{ slide }}</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  import lazyImage from './Image'
  export default {
    name: 'carrousel',
    components: {
      lazyImage
    },
    data() {
      const imgs = [
        'http://localhost:8080/static/images/author.jpg',
        'http://localhost:8080/static/images/author-2.jpg',
        'http://localhost:8080/static/images/author-3.jpg'
      ]
      const self = this
      return {
        slides: [1,2,3,4,5,6],
        imgs,
        swiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // observer: true
          /*
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          // paginationHide: false,
          // direction: 'vertical',
          // height: '300',
          effect: 'coverflow',
          speed: 666,
          lazyLoading: true,
          autoplay: 1000,
          slidesPerView: 1,
          autoplayStopOnLast: false,
          // loop: true,
          setWrapperSize: true,
          autoplayDisableOnInteraction: true,
          pagination: {
            el: '.swiper-pagination'
          },
          paginationBulletRender: function (swiper, index, className) {
            return `<span class="${className}" index="${index}">${index + 1}</span>`;
          }
          */
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log(this.swiper.activeIndex)
      setTimeout(() => {
        this.slides = [2]
        // console.log('setTimeout', this.slides)
        // this.$nextTick(() => {
          // console.log('$nextTick', this.swiper)
          // this.swiper.pagination.render(true)
          // this.swiper.navigation.update(true)
        // })
        // setTimeout(() => {
        //   console.log('setTimeout')
        //   this.slides = [3,4,5]
        // }, 1000)
      },2000)
      // this.$set(this, 'list', [1,2,3]);
      // setTimeout(() => {
      //   console.log('更新图片')
      //   this.imgs = [
      //     'http://localhost:8080/static/images/author-4.jpg',
      //     'http://localhost:8080/static/images/author-5.jpg',
      //   ]
      //   console.log('this is current swiper instance object', this.swiper.update)
      // }, 3000)
      // this.list.push(3)
      // this.list.push(4)
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      onSlideChange(a, b, c, d) {
        console.log('onSlideChange', a, b, c, d)
      },
      swiperReady(swiper) {
        console.log('swiperReady', swiper)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-swiper {
    height: 20rem;
    width: 100%;

    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;

      &.swiper-footer {
        height: 30%;
      }

      img {
        // height: 100%;
        width: 100%;
      }
    }

    .swiper-pagination {

      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>

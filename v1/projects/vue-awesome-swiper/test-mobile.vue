<template>
  <div class="mobile">
    <swiper class="swiper" :options="swiperOption" class="my-swiper" ref="mySwiper">
      <swiper-slide
        v-for="(banner, index) in banners" 
        :class="{ 
          'swiper-footer': Object.is(index, 3) 
        }">
        <!-- <span>{{ index }}</span> -->
        <img :src="banner.image" :class="{ 'swiper-no-swiping': Object.is(index, 3) }">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-test',
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      const img = {
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504281020&di=de7cca8acc97c2d9d710022b78051e09&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'
      }
      return {
        img,
        swiperOption: {
          pagination: '.swiper-pagination', 
          direction: 'vertical', 
          slidesPerView: 1, 
          spaceBetween: 0, 
          mousewheelControl: true, 
          keyboardControl: true, 
          speed: 800, 
          autoHeight: true,
          // noSwiping: true,
          // height : window.innerHeight,
          // autoplay: 5000,
          // notNextTick: true,
          // initialSlide: 1,
          // direction : 'vertical',
          // loop: true,
          // pagination: '.swiper-pagination',
          onSlideChangeEnd: (swiper) => {
            console.log('onSlideChangeEnd', swiper.realIndex);
          },
          onTap: (swiper) => {
            console.log('onTap', swiper.realIndex);
          }
        },
        banners: [img, img, img, img]
      }
    },
    mounted() {
      // const img = this.img
      // this.banners = [img, img, img]
      // setTimeout(() => {
        // this.banners.push(img)
        // console.log(this.banners.length, this.$refs.mySwiper.swiper.slides.length)
        // console.log(Date())
      // }, 500)
      // setInterval(() => {
      //   this.banners.push(img)
      //   console.log(this.banners.length, this.$refs.mySwiper.swiper.slides.length)
      //   console.log(Date())
      // }, 1000)
    },
    updated() {
      this.$nextTick(() => {
        // console.log(this.banners.length, this.$refs.mySwiper.swiper.slides.length)
        // console.log(Date())
      })
    },
    methods: {
      routerTo(i) {
        console.log(this, 'clicka', i + 1);
      }
    }
  }
</script>

<style lang="scss" scoped>

.mobile {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .my-swiper {
    height: 100%;
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
}
</style>

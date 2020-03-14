<template>
  <div class="important-example">
    <!-- <client-only>
      <swiper
        class="swiper component"
        :options="swiperComponentOption"
        @click.native="handleSwiperComponentClick($event)"
      >
        <swiper-slide>
          <pre>{{ '&lt;' }}client-only{{ '>' }}</pre>
          <span>&nbsp;&nbsp;</span>
          <span>component</span>
        </swiper-slide>
        <swiper-slide>just render in client.</swiper-slide>
        <swiper-slide>
          <a target="_blank" href="https://nuxtjs.org/api/components-client-only/">Learn more on Nuxt.js</a>
        </swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
    <swiper class="swiper directive" :options="swiperdDrectiveOption">
      <swiper-slide>Directive render with ssr (HTML).</swiper-slide>
      <swiper-slide>Because directive doesn't render Swiper on server.</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
  </div>
</template>

<script lang="ts">
  // Vue3 API
  import Vue from 'vue'
  import { CombinedVueInstance } from 'vue/types/vue'
  import { createComponent, ref, computed, onMounted } from '@vue/composition-api'
  // vue-awesome-swiper 4.0
  import SwiperClass, { SwiperOptions } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  // import SwiperSlideType from 'vue-awesome-swiper/types/swiper.vue'
  // import 'swiper/css/swiper.css'


  export const title = '@composition-api & TypeScript (important)'
  export default createComponent({
    name: 'swiper-example-typescript-composition-api',
    components: {
      Swiper,
      SwiperSlide
    },
    // directives: {
    //   swiper: directive
    // }
    setup() {
      const swiperComponentRef = ref<any>(null)
      // const swiperComponentinstance = computed(
      //   () => swiperComponentRef.value?.swiper as SwiperClass
      // )

      const swiperComponentOption: SwiperOptions = {
        loop: true,
        loopAdditionalSlides: 0,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          click(){
            console.log('你点了Swiper;');
          }
        }
      }

      const swiperdDrectiveOption: SwiperOptions = {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 18,
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination'
        }
      }

      onMounted(() => {
        // console.log('swiperComponentRef', swiperComponentRef)
      })

      return {
        swiperComponentRef,
        swiperComponentOption,
        swiperdDrectiveOption,
        handleSwiperComponentClick(event: MouseEvent) {
          // console.log(
          //   'handleSwiperComponentClick',
          //   event,
          //   swiperComponentinstance.value?.activeIndex
          // )
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  .important-example {
    height: auto;
    background-color: $module-bg-darken;

    .swiper {
      &.component {
        margin-bottom: $gap;
      }

      .swiper-slide {
        font-size: $font-size-huge;
      }
    }
  }

  @import './base.scss'
</style>

<template>
  <swiper
    class="swiper"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :modules="modules"
    :speed="600"
    :parallax="true"
    :navigation="true"
    :pagination="{ clickable: true }"
  >
    <template #container-start>
      <div
        class="parallax-bg"
        data-swiper-parallax="-23%"
        :style="{ backgroundImage: 'url(/images/example/1.jpg)' }"
      ></div>
    </template>
    <swiper-slide class="slide">
      <h1 class="title" data-swiper-parallax="-300">Slide 1</h1>
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <h1 class="title" data-swiper-parallax="-300">Slide 2</h1>
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide">
      <h1 class="title" data-swiper-parallax="-300">Slide 3</h1>
      <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis
          velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor
          porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac
          laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Parallax, Pagination, Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  export default defineComponent({
    name: 'swiper-example-parallax',
    title: 'Parallax',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Parallax, Pagination, Navigation]
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';
  @import './style.scss';

  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .swiper {
    @include swiper-wrapper($height: 380px);

    .slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: $white;
      box-sizing: border-box;
      padding: 0 100px;
      background-color: transparent;

      .title {
        margin-top: 0;
        margin-bottom: $lg-gap;
      }

      .subtitle {
        margin-top: 0;
        margin-bottom: $gap;
      }

      .text {
        max-width: 430px;
        line-height: 1.32;
      }
    }
  }
</style>

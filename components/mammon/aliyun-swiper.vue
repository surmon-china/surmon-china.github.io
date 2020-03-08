<template>
  <div class="mammon aliyun">
    <client-only>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide" :key="index" v-for="(ad, index) in aliyunAds">
          <a :href="ad.url" class="link" target="_blank">
            <div :style="{ backgroundImage: `url(${ad.image})` }" class="image"></div>
          </a>
        </swiper-slide>
        <div class="swiper-pagination aliyun-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import CONFIG from '@/config'

  export default createComponent({
    name: 'AliyunSwiperAd',
    setup() {
      return {
        aliyunAds: CONFIG.ALIYUN_ADS,
        swiperOption: {
          mousewheel: true,
          autoHeight: true,
          loop: true,
          direction: 'vertical',
          autoplay: {
            delay: 2600,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  })
</script>

<style lang="scss">
  .aliyun-pagination {
    .swiper-pagination-bullet {
      &.swiper-pagination-bullet-active {
        background-color: $body-bg;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .aliyun {
    height: 9rem;

    .swiper {
      height: 100%;

      .slide {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .link {
          width: 100%;
          height: 100%;
          cursor: pointer;

          .image {
            width: 100%;
            height: 100%;
            cursor: pointer;
            background-size: cover;
            opacity: .9;
            transition: opacity $transition-time-fast;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>


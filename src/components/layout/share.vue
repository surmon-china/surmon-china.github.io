<template>
  <div id="share">
    <button class="share-button" title="Share to Twitter" @click="handleShare">
      <i class="iconfont icon-twitter"></i>
      <span class="text">Tweet</span>
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { openWindow } from '@/services/opener'
  import { APP_META } from '@/config'
  export default defineComponent({
    name: 'share',
    props: {
      repository: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const handleShare = () => {
        const url = window.location.href
        const title = document.title || APP_META.title
        const tweetURL = `https://twitter.com/share?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`
        openWindow(tweetURL, { name: `Share: ${props.repository}` })
      }

      return {
        handleShare
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  @media screen and (max-width: $container-width) {
    #share {
      display: none !important;
    }
  }

  #share {
    position: fixed;
    z-index: 9;
    left: 0;
    bottom: 10rem;

    .share-button {
      width: 28px;
      height: auto;
      margin: 0;
      padding: $sm-gap 0;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      border: 1px solid $body-bg;
      border-top: 2px solid $twitter-primary;
      border-left: none;
      border-top-right-radius: $lg-radius;
      border-bottom-right-radius: $lg-radius;
      color: $twitter-primary;
      background-color: $banner-bg;
      transition: background-color $transition-time, color $transition-time;
      &:hover {
        color: $white;
        background-color: $twitter-primary;
      }

      .iconfont {
        font-size: $font-size-base;
        margin-bottom: $xs-gap;
      }

      .text {
        font-size: $font-size-small - 2;
        letter-spacing: 2.8px;
        font-weight: bold;
        writing-mode: vertical-lr;
        text-transform: uppercase;
      }
    }
  }
</style>

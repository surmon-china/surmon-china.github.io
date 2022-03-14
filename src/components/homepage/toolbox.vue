<template>
  <div id="toolbox">
    <div class="container">
      <div class="tools">
        <ulink class="item github" title="to GitHub homepage" :href="repoURL">
          <i class="iconfont icon-github"></i>
        </ulink>
        <button class="item to-top" @click="handleToPageTop">
          <i class="iconfont icon-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { getGitHubRepositoryURL } from '@/transforms/url'
  export default defineComponent({
    name: 'homepage-toolbox',
    props: {
      repository: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const repoURL = getGitHubRepositoryURL(props.repository)
      const handleToPageTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      return {
        repoURL,
        handleToPageTop
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  @media screen and (max-width: $container-width) {
    #toolbox {
      display: none !important;
    }
  }

  #toolbox {
    position: fixed;
    z-index: 9;
    width: 100%;
    bottom: 20rem;

    .container {
      $width: $lg-gap * 2.6;
      $height: $width * 0.9;
      position: relative;

      .tools {
        position: absolute;
        right: -10rem;
        width: $width;
        overflow: hidden;

        .item {
          border: none;
          width: 100%;
          height: $height;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          background-color: $banner-bg;
          color: $text-color;
          cursor: pointer;
          &:hover {
            background-color: $header-bg;
            color: $link-color;
          }

          &:not(last-child) {
            border-bottom: 1px solid $body-bg;
          }

          &:first-child {
            border-top-left-radius: $sm-radius;
            border-top-right-radius: $sm-radius;
          }
          &:last-child {
            border-bottom-left-radius: $sm-radius;
            border-bottom-right-radius: $sm-radius;
          }
        }
      }
    }
  }
</style>

<script lang="ts" setup>
  import { getGitHubRepositoryURL } from '@/transforms/url'
  import * as CONFIG from '@/config'

  const props = defineProps<{
    repository: string
  }>()

  const emit = defineEmits<{
    (e: 'toTop'): void
  }>()

  const repoURL = getGitHubRepositoryURL(props.repository)
</script>

<template>
  <div id="toolbox">
    <div class="container">
      <div class="tools">
        <ulink class="item sponsor" :href="CONFIG.GITHUB_SPONSORS_URL">
          <i class="iconfont icon-heart" />
          <i class="iconfont icon-heart-fill" />
        </ulink>
        <ulink class="item github" title="to GitHub homepage" :href="repoURL">
          <i class="iconfont icon-github"></i>
        </ulink>
        <button class="item to-top" @click="emit('toTop')">
          <i class="iconfont icon-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;

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
      position: relative;

      .tools {
        $width: 3.6rem;
        $height: $width * 0.8;
        $radius-size: $radius-sm;

        position: absolute;
        right: -12rem;
        width: $width;
        overflow: hidden;
        border: 1px solid $body-bg;
        border-radius: $radius-size;

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
          &:not(:last-child) {
            border-bottom: 1px solid $body-bg;
          }
          &:first-child {
            border-top-left-radius: $radius-size;
            border-top-right-radius: $radius-size;
          }
          &:last-child {
            border-bottom-left-radius: $radius-size;
            border-bottom-right-radius: $radius-size;
          }

          .iconfont {
            font-size: $font-size-large;
          }

          &.sponsor {
            color: $github-sponsor-primary;
            .icon-heart-fill {
              display: none;
            }
            &:hover {
              .icon-heart {
                display: none;
              }
              .icon-heart-fill {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>

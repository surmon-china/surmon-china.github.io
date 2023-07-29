<script lang="ts" setup>
  import { getGitHubRepositoryURL } from '@/transforms/url'
  import * as CONFIG from '@/config'

  const props = defineProps<{
    repository: string
  }>()
</script>

<template>
  <footer class="footbar">
    <div class="container">
      <span class="footer-content">
        <ulink :href="getGitHubRepositoryURL(repository)">{{ repository }}</ulink>
        <span> is maintained by </span>
        <ulink :href="CONFIG.GITHUB_USER_URL">@{{ CONFIG.GITHUB_USERNAME }}</ulink>
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .footbar {
    height: $footbar-height;
    line-height: $footbar-height;
    background-color: $banner-bg;
    color: $text-secondary;
    text-align: center;
    text-transform: uppercase;

    a {
      color: $text-color;
      text-decoration: none;
      &:hover {
        color: $link-color;
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: $container-width) {
    .footbar {
      .container {
        width: 100%;
      }
      .footer-content {
        font-size: $font-size-small;
      }
    }
  }
</style>

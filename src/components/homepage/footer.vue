<template>
  <footer class="footer">
    <div class="container">
      <span class="footer-content">
        <ulink :href="getGitHubRepositoryURL(repository)">{{ repository }}</ulink>
        <span> is maintained by </span>
        <ulink :href="CONFIG.GITHUB_USER_URL">@{{ CONFIG.GITHUB_UID }}</ulink>
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { getGitHubRepositoryURL } from '@/transforms/url'
  import * as CONFIG from '@/config'

  export default defineComponent({
    name: 'homepage-footer',
    props: {
      repository: {
        type: String,
        required: true
      }
    },
    setup() {
      return {
        CONFIG,
        getGitHubRepositoryURL
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .footer {
    height: 4rem;
    line-height: 4rem;
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
</style>

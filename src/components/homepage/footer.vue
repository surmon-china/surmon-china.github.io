<template>
  <footer class="footer">
    <div class="container">
      <span class="footer-content">
        <a :href="getGitHubRepositoryURL(repository)" target="_blank">{{ repository }}</a>
        <span> is maintained by </span>
        <a :href="CONFIG.GITHUB_USER_URL" target="_blank">@{{ CONFIG.GITHUB_UID }}</a>
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

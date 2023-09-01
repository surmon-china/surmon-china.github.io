<script lang="ts" setup>
  import { reactive, onBeforeMount } from 'vue'
  import { useSeoMeta } from '@unhead/vue'
  import { APP_META, GITHUB_USER_URL } from '@/config'

  const meta = reactive({ ...APP_META })
  useSeoMeta(() => meta)
  onBeforeMount(() => {
    meta.title = `Redirect to GitHub ...`
    location.href = GITHUB_USER_URL
  })
</script>

<template>
  <div class="index-page">
    <div class="logo">
      <i class="iconfont icon-github"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .index-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $banner-bg;

    .logo {
      $size: 8rem;
      width: $size;
      height: $size;
      line-height: $size;
      text-align: center;
      color: $text-color;

      .iconfont {
        font-size: $font-size-huge * 4;
      }
    }
  }
</style>

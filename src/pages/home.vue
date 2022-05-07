<script lang="ts" setup>
  import { reactive, onBeforeMount } from 'vue'
  import { useMeta } from '@/composables/meta'
  import { APP_META, GITHUB_USER_URL } from '@/config'

  const meta = reactive({ ...APP_META })
  useMeta(() => meta)
  onBeforeMount(() => {
    meta.title = `Redirect to Surmon's GitHub ...`
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
    background-color: $github-dimmed;

    .logo {
      $size: 8rem;
      width: $size;
      height: $size;
      line-height: $size;
      text-align: center;
      color: rgba($white, 0.7);

      .iconfont {
        font-size: $font-size-huge * 4;
      }
    }
  }
</style>

<template>
  <div class="loading">
    <i class="iconfont icon-clock"></i>
    <span>Loading...</span>
  </div>
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  export default createComponent({
    name: 'loading'
  })
</script>

<style lang="scss" scoped>
  .loading {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $text-secondary;

    .iconfont {
      color: $text-secondary;
      margin-right: $xs-gap;
    }
  }
</style>

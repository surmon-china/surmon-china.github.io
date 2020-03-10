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
    user-select: none;
    font-size: $font-size-huge;
    opacity: .6;

    .iconfont {
      color: $text-secondary;
      font-size: $font-size-huge;
      margin-right: $xs-gap;
    }
  }
</style>

<script lang="ts" setup>
  import { IMAGE_AD } from '@/config'
</script>

<template>
  <div class="image-mammon">
    <a :href="IMAGE_AD.url" class="link" target="_blank">
      <div :style="{ backgroundImage: `url(${IMAGE_AD.image})` }" class="image"></div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .image-mammon {
    width: 100%;
    height: 9rem;

    .link {
      width: 100%;
      height: 100%;
      cursor: pointer;

      .image {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-size: cover;
        opacity: 0.9;
        transition: opacity $transition-time;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>

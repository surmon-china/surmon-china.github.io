<script lang="ts" setup>
  import { useMeta } from '@/composables/meta'
  import { RouteName } from '@/routes'
  import { getExampleComponent } from '@/transforms/example'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import exampleComponents from '@examples/vue-awesome-swiper'
  const id = RouteName.ReadMe
  const examples = exampleComponents.map(getExampleComponent)

  useMeta({
    title: getMetaTitle(id),
    keywords: [getMetaKeywords(id), `How to use Swiper on vue3?`].join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <div class="page">
    <span class="text">README.md</span>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
      font-size: $font-size-huge * 2;
    }
  }
</style>

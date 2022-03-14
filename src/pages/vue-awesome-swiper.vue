<script lang="ts" setup>
  import { useMeta } from '@/composables/meta'
  import { RouteRepoID } from '@/routes'
  import { getExampleComponent } from '@/transforms/example'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/vue-awesome-swiper'
  const id = RouteRepoID.VueAwesomeSwiper
  const examples = exampleComponents.map(getExampleComponent)

  useMeta({
    title: getMetaTitle(id),
    keywords: [getMetaKeywords(id), `How to use Swiper on vue3?`].join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <div class="page">
    <homepage :repository="id">
      <template #actions>
        <homepage-link
          icon="doc"
          text="Swiper API Document"
          href="https://swiperjs.com/swiper-api"
        />
        <homepage-link
          icon="doc"
          text="Swiper Vue component"
          href="https://swiperjs.com/vue"
        />
        <homepage-link
          icon="doc"
          text="Original Swiper Demos"
          href="https://swiperjs.com/demos"
        />
        <homepage-link
          icon="discussions"
          text="Swiper discussions"
          href="https://github.com/nolimits4web/swiper/discussions"
        />
      </template>
      <template #content>
        <homepage-examples :examples="examples">
          <template #component="payload">
            <div class="swiper-example">
              <component :is="payload.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .swiper-example {
    width: 100%;
    background-color: $header-bg;
  }
</style>

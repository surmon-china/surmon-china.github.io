<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useSeoMeta } from '@unhead/vue'
  import { getExampleComponent } from '@/transforms/example'
  import { getPageURL, getLegacyPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription, normalizeSeoMetaObject } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/vue-awesome-swiper'

  const { repository, route, packages } = PROJECTS.VueAwesomeSwiper
  const examples = exampleComponents.map(getExampleComponent)

  useSeoMeta(
    normalizeSeoMetaObject({
      title: getMetaTitle(repository),
      keywords: [getMetaKeywords(repository), `How to use Swiper on vue3?`].join(','),
      description: getMetaDescription(repository),
      ogImage: getGitHubOpenGraphImageURL(repository),
      ogUrl: getPageURL(route)
    })
  )
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages">
      <template #actions>
        <homepage-link icon="doc" text="Vue(2) Examples" :href="getLegacyPageURL(repository)" />
        <homepage-link icon="doc" text="Swiper API Documentation" href="https://swiperjs.com/swiper-api" />
        <homepage-link icon="doc" text="Swiper Vue(3) Component" href="https://swiperjs.com/vue" />
        <homepage-link
          icon="discussions"
          text="Swiper Discussions"
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
  </vue-renderer>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .swiper-example {
    width: 100%;
    background-color: $header-bg;
  }
</style>

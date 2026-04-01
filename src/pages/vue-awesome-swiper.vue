<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { usePageSeo } from '@/composables/head'
  import { normalizeExample } from '@/transforms/example'
  import { getPageURL, getLegacyPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import { MammonProvider } from '@/components/mammon'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/vue-awesome-swiper'

  const { repository, route, packages } = PROJECTS.VueAwesomeSwiper
  const examples = exampleComponents.map(normalizeExample)

  usePageSeo({
    title: getMetaTitle(repository),
    keywords: [getMetaKeywords(repository), `How to use Swiper on vue3?`].join(','),
    description: getMetaDescription(repository),
    ogUrl: getPageURL(route),
    ogImage: getGitHubOpenGraphImageURL(repository),
    ogImageWidth: 1200,
    ogImageHeight: 600
  })
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages" :header-ad-provider="MammonProvider.GoogleAdSense">
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
  @use '@/styles/variables.scss' as *;
  @use '@/styles/mixins.scss' as mix;

  .swiper-example {
    width: 100%;
    background-color: $header-bg;
  }
</style>

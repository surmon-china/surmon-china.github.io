<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { usePageSeo } from '@/composables/head'
  import { normalizeExample } from '@/transforms/example'
  import { getPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageCard from '@/components/homepage/card.vue'
  import exampleComponent from '@examples/naivebayes/index.vue'

  const { repository, route, packages } = PROJECTS.NaiveBayes
  const example = normalizeExample({
    component: exampleComponent,
    raw: '',
    language: 'vue',
    path: 'examples/naivebayes/index.vue'
  })

  usePageSeo({
    title: getMetaTitle(repository),
    keywords: getMetaKeywords(repository).join(','),
    description: getMetaDescription(repository),
    ogUrl: getPageURL(route),
    ogImage: getGitHubOpenGraphImageURL(repository),
    ogImageWidth: 1200,
    ogImageHeight: 600
  })
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages">
      <template #content>
        <homepage-card :title="example.title || example.name" :title-link="example.url">
          <component :is="example.component" />
        </homepage-card>
      </template>
    </homepage>
  </vue-renderer>
</template>

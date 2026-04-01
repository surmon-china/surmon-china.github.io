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
  import HomepageCard from '@/components/homepage/card.vue'
  import exampleComponent from '@examples/vue-codemirror/index.vue'

  const { repository, route, packages } = PROJECTS.VueCodemirror
  const example = normalizeExample({
    component: exampleComponent,
    raw: '',
    language: 'vue',
    path: 'examples/vue-codemirror/index.vue'
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
    <homepage :repository="repository" :packages="packages" :header-ad-provider="MammonProvider.GoogleAdSense">
      <template #actions>
        <homepage-link text="Vue(2) Legacy Examples" :href="getLegacyPageURL(repository)" />
        <homepage-link text="CodeMirror(6) Guide" href="https://codemirror.net/docs/guide/" />
        <homepage-link text="CodeMirror Forum" href="https://discuss.codemirror.net/" />
        <homepage-link icon="discord" text="Discord Discussions" href="https://discord.gg/nzHEydUvPH" />
      </template>
      <template #content>
        <homepage-card :title="example.title || example.name" :title-link="example.url">
          <component :is="example.component" />
        </homepage-card>
      </template>
    </homepage>
  </vue-renderer>
</template>

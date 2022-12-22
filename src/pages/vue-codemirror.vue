<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getExampleComponent } from '@/transforms/example'
  import {
    getPageURL,
    getLegacyPageURL,
    getGitHubOpenGraphImageURL
  } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageCard from '@/components/homepage/card.vue'
  import exampleComponent from '@examples/vue-codemirror/index.vue'

  const { repository, route, packages } = PROJECTS.VueCodemirror
  const example = getExampleComponent({
    component: exampleComponent,
    raw: '',
    language: 'vue'
  })

  useMeta({
    title: getMetaTitle(repository),
    keywords: getMetaKeywords(repository).join(','),
    description: getMetaDescription(repository),
    ogImage: getGitHubOpenGraphImageURL(repository),
    ogUrl: getPageURL(route)
  })
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages">
      <template #actions>
        <homepage-link
          icon="doc"
          text="Vue(2) Examples"
          :href="getLegacyPageURL(repository)"
        />
        <homepage-link
          icon="doc"
          text="CodeMirror(6) Guide"
          href="https://codemirror.net/docs/guide/"
        />
        <homepage-link
          icon="discussions"
          text="CodeMirror Forum"
          href="https://discuss.codemirror.net/"
        />
        <homepage-link
          icon="discord"
          text="Discord Discussions"
          href="https://discord.gg/nzHEydUvPH"
        />
      </template>
      <template #content>
        <homepage-card :title="example.title || example.name" :title-link="example.url">
          <template #actions>❤︎</template>
          <component :is="example.component" />
        </homepage-card>
      </template>
    </homepage>
  </vue-renderer>
</template>

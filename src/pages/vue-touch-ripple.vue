<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { usePageSeo } from '@/composables/head'
  import { getPageURL, getLegacyPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import { normalizeExample } from '@/transforms/example'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/vue-touch-ripple'

  const { repository, route, packages } = PROJECTS.VueTouchRipple
  const examples = exampleComponents.map(normalizeExample)

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
      <template #actions>
        <homepage-link text="Vue(2) Legacy Examples" :href="getLegacyPageURL(repository)" />
        <homepage-link text="Component Props" href="https://github.com/surmon-china/vue-touch-ripple#component-props" />
        <homepage-link
          text="Component Events"
          href="https://github.com/surmon-china/vue-touch-ripple#component-events"
        />
        <homepage-link icon="discord" text="Discord Discussions" href="https://discord.gg/QF8zwF3vPv" />
      </template>
      <template #content>
        <homepage-examples :examples="examples" :disabled-auto-ad="true">
          <template #component="example">
            <div class="touch-ripple-example">
              <component :is="example.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </vue-renderer>
</template>

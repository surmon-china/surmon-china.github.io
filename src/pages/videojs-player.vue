<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useSeoMeta } from '@unhead/vue'
  import { getExampleComponent } from '@/transforms/example'
  import { getPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription, normalizeSeoMetaObject } from '@/transforms/meta'
  import { MammonProvider } from '@/components/mammon'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/videojs-player'

  const { repository, route, packages } = PROJECTS.VideoJsPlayer
  const examples = exampleComponents.map(getExampleComponent)

  useSeoMeta(
    normalizeSeoMetaObject({
      title: getMetaTitle(repository),
      keywords: getMetaKeywords(repository).join(','),
      description: getMetaDescription(repository),
      ogUrl: getPageURL(route),
      ogImage: getGitHubOpenGraphImageURL(repository),
      ogImageWidth: 1200,
      ogImageHeight: 600
    })
  )
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages" :header-ad-provider="MammonProvider.GoogleAdSense">
      <template #actions>
        <homepage-link icon="doc" text="Video.js Guides" href="https://videojs.com/guides" />
        <homepage-link icon="doc" text="Video.js API Documentation" href="https://docs.videojs.com/" />
        <homepage-link icon="doc" text="Video.js Plugins and Skins" href="https://videojs.com/plugins/" />
        <homepage-link icon="discord" text="Discord Discussions" href="https://discord.gg/5w5cPWWEJ7" />
      </template>
      <template #content>
        <homepage-examples :examples="examples" :disabled-auto-ad="true">
          <template #component="payload">
            <div class="video-player-example">
              <component :is="payload.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </vue-renderer>
</template>

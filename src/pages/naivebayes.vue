<script lang="ts" setup>
  import { PROJECTS } from '@/config'
  import { useSeoMeta } from '@unhead/vue'
  import { getExampleComponent } from '@/transforms/example'
  import { getPageURL, getGitHubOpenGraphImageURL } from '@/transforms/url'
  import { getMetaTitle, getMetaKeywords, getMetaDescription, normalizeSeoMetaObject } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponent from '@examples/naivebayes/index.vue'
  import exampleComponentString from '@examples/naivebayes/index.vue?raw'

  const { repository, route, packages } = PROJECTS.NaiveBayes
  const example = getExampleComponent({
    component: exampleComponent,
    raw: exampleComponentString,
    language: 'vue'
  })

  useSeoMeta(
    normalizeSeoMetaObject({
      title: getMetaTitle(repository),
      keywords: getMetaKeywords(repository).join(','),
      description: getMetaDescription(repository),
      ogImage: getGitHubOpenGraphImageURL(repository),
      ogUrl: getPageURL(route)
    })
  )
</script>

<template>
  <vue-renderer :repository="repository">
    <homepage :repository="repository" :packages="packages">
      <template #content>
        <homepage-examples :examples="[example]" :disabled-auto-ad="true">
          <template #component="payload">
            <div class="naivebayes-example">
              <component :is="payload.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </vue-renderer>
</template>

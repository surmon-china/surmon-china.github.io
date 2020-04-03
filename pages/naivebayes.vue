<template>
  <homepage
    :class="repositorieId"
    :repositorie-id="repositorieId"
    :footer-ad-provider="adProvider"
  >
    <client-only slot="content">
      <component
        :is="example.name"
        v-for="example in examples"
        :key="example.name"
        :path="example.path"
        :title="example.title || example.name"
      />
    </client-only>
  </homepage>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/page-meta'
  import { GitHubRepositorieIDs } from '@/config'
  import { isBrowser } from '@/environment'
  import { MammonProvider } from '@/components/mammon/index.vue'
  import { IExample } from '@/components/homepage/examples.vue'
  import HomepageExampleCard from '@/components/homepage/card-example.vue'
  import Homepage from '@/components/homepage/index.vue'

  const repositorieId = GitHubRepositorieIDs.Naivebayes
  const examples: IExample[] = []
  const components = {
    Homepage,
    HomepageExampleCard
  }

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/naivebayes'))
      .forEach(({ component, fileName, ...others }) => {
        examples.push({
          ...others,
          path: fileName && `projects/${repositorieId}/${fileName}`
        })
        Object.assign(components, {
          [component.name]: component
        })
      })
  }

  export default createComponent({
    name: `page-${repositorieId}`,
    components,
    head: getHomePageHeadMeta(repositorieId),
    setup() {
      return {
        repositorieId,
        examples,
        adProvider: MammonProvider.GoogleAdSense1
      }
    }
  })
</script>

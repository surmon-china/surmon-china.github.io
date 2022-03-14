<template>
  <homepage :repositorie-id="repositorieId" :class="repositorieId">
    <homepage-examples :examples="examples" slot="content" />
  </homepage>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/page-meta'
  import { GitHubRepositorieIDs } from '@/config'
  import { isBrowser } from '@/environment'
  import HomepageExamples, { IExample } from '@/components/homepage/examples.vue'
  import Homepage from '@/components/homepage/index.vue'

  const repositorieId = GitHubRepositorieIDs.VueDragZone
  const examples: IExample[] = []

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-drag-zone/examples'))
      .forEach(({ component, fileName, ...others }) => {
        examples.push({
          ...others,
          path: fileName && `projects/${repositorieId}/examples/${fileName}`
        })
        Object.assign(HomepageExamples.components, {
          [component.name]: component
        })
      })
  }

  export default createComponent({
    name: `page-${repositorieId}`,
    components: {
      Homepage,
      HomepageExamples
    },
    head: getHomePageHeadMeta(repositorieId),
    setup() {
      return {
        repositorieId,
        examples
      }
    }
  })
</script>

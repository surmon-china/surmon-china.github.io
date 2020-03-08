<template>
  <homepage
    :repositorie-id="repositorieId"
    :class="repositorieId"
  >
    <template slot="content">
      <client-only>
        <homepage-example-card
          :key="example.name"
          :path="example.path"
          :title="example.title || example.name"
          v-for="example in examples"
        >
          <component :is="example.name" />
        </homepage-example-card>
      </client-only>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageExampleCard from '@/components/homepage/card-example.vue'
  import { GitHubRepositorieIDs } from '@/config'
  import { isBrowser } from '@/environment'
  import { StoreNames } from '@/store'

  const data = {
    repositorieId: GitHubRepositorieIDs.VueDragZone,
    examples: [] as $TODO[],
  }
  const components = {
    Homepage,
    HomepageExampleCard
  }

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-drag-zone/examples').default)
      .forEach(({ component, fileName, ...others }) => {
        data.examples.push({
          ...others,
          fileName,
          path: fileName && `projects/${data.repositorieId}/examples/${fileName}`
        })
        Object.assign(components, {
          [component.name]: component
        })
      })
  }

  export default createComponent({
    name: data.repositorieId,
    components,
    head: getHomePageHeadMeta(data.repositorieId),
    setup() {
      return data
    }
  })
</script>

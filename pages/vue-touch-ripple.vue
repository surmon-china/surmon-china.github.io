<template>
  <homepage
    :repositorie-id="repoId"
    class="vue-touch-ripple"
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
    repoId: GitHubRepositorieIDs.VueTouchRipple,
    examples: [] as $TODO[],
  }
  const components = {
    Homepage,
    HomepageExampleCard
  }

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-touch-ripple/examples').default)
      .forEach(({ component, ...others }) => {
        data.examples.push(others)
        Object.assign(components, {
          [component.name]: component
        })
      })
  }

  export default createComponent({
    name: data.repoId,
    components,
    head: getHomePageHeadMeta(data.repoId),
    setup() {
      return data
    }
  })
</script>

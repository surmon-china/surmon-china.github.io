<template>
  <homepage
    :name="repoID"
    :repo-id="repoID"
    :description="description"
    class="vue-touch-ripple"
  >
    <template slot="content">
      <client-only>
        <homepage-example-card
          :key="example.name"
          :title="example.name"
          :path="example.path"
          v-for="example in examples"
        >
          <component :is="example.name" />
        </homepage-example-card>
      </client-only>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { isBrowser } from '@/environment'
  import { createComponent } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageExampleCard from '@/components/homepage/card-example.vue'

  const repoID = 'vue-touch-ripple'
  const description = 'Touch ripple component for Vue'
  const data = {
    repoID,
    description,
    examples: [] as $TODO[],
  }
  const components = {
    Homepage,
    HomepageExampleCard
  }

  if (isBrowser) {
    getComponentExampleMeta(
      require('@/projects/vue-touch-ripple/examples').default
    ).forEach(({ component, ...others }) => {
      data.examples.push(others)
      Object.assign(components, {
        [component.name]: component
      })
    })
  }

  export default createComponent({
    name: repoID,
    components,
    head: getHomePageHeadMeta(repoID, description),
    setup() {
      return data
    }
  })
</script>

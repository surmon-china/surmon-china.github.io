<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="naivebayes"
  >
    <template slot="content">
      <component
        :is="example.name"
        :data="example"
        :key="example.name"
        :title="example.name"
        v-for="example in examples"
      />
    </template>
  </homepage>
</template>

<script lang="ts">
  import { isBrowser } from '@/environment'
  import { createComponent } from '@vue/composition-api'
  import { transformComponentsToNormalMaterial, getHomePageHeadMeta } from '@/transforms/example'
  import Homepage from '@/components/homepage/index.vue'

  const repoId = 'naivebayes'
  const description = 'NaiveBayes classifier for node.js'
  const data: $TODO = {
    repoId,
    description,
    examples: []
  }
  const components = {
    Homepage
  }

  if (isBrowser) {
    const { components: exComponents, examples } = transformComponentsToNormalMaterial(
      require('@/projects/naivebayes/examples').default
    )
    data.examples = examples
    Object.assign(components, exComponents)
  }

  export default createComponent({
    name: repoId,
    components,
    head: getHomePageHeadMeta(repoId, description),
    setup() {
      return data
    }
  })
</script>

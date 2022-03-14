<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="vue-video-player"
  >
    <template slot="actions">
      <homepage-link
        icon="doc"
        text="Video.js Documentation"
        href="https://docs.videojs.com/"
      />
    </template>
    <template slot="content">
      <homepage-example-card
        :data="example"
        :key="example.name"
        :title="example.name"
        v-for="example in examples" 
      >
        <component :is="example.name" />
      </homepage-example-card>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { isBrowser } from '@/environment'
  import { createComponent } from '@vue/composition-api'
  import { transformComponentsToNormalMaterial, getHomePageHeadMeta } from '@/transforms/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExampleCard from '@/components/homepage/cards/example.vue'

  const repoId = 'vue-video-player'
  const description = 'Video.js component for Vue'
  const data: $TODO = {
    repoId,
    description,
    examples: [],
  }
  const components = {
    Homepage,
    HomepageLink,
    HomepageExampleCard,
  }

  if (isBrowser) {
    const { components: exComponents, examples } = transformComponentsToNormalMaterial(
      require('@/projects/vue-video-player/examples').default
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

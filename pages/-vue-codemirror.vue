<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="vue-codemirror"
  >
    <template slot="actions">
      <homepage-link
        icon="doc"
        text="CodeMirror User manual"
        href="https://codemirror.net/doc/manual.html#config"
      />
      <homepage-link
        icon="doc"
        text="CodeMirror themes"
        href="https://codemirror.net/demo/theme.html"
      />
      <homepage-link
        icon="doc"
        text="CodeMirror Language modes"
        href="https://codemirror.net/mode/"
      />
    </template>
    <template slot="content">
      <homepage-example-card
        :data="example"
        :key="example.name"
        :title="example.name"
        v-for="example in examples" 
      >
        <component class="codemirror-example" :is="example.name" />
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

  const repoId = 'vue-codemirror'
  const description = 'CodeMirror component for Vue'
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
      require('@/projects/vue-codemirror/examples').default
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

<style lang="scss" scoped>
  .vue-codemirror {
    .codemirror-example {
      height: 350px;
    }
  }
</style>

<style lang="scss">
  .codemirror-example {
    .CodeMirror,
    .CodeMirror-merge {
      height: 350px !important;
    }
  }
</style>

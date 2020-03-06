<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="vue-quill-editor"
  >
    <template slot="actions">
      <homepage-link
        icon="doc"
        text="Quill Quickstart"
        href="https://quilljs.com/docs/quickstart/"
      />
      <homepage-link
        icon="doc"
        text="Quill API"
        href="https://quilljs.com/docs/api/"
      />
      <homepage-link
        icon="doc"
        text="Quill Modules"
        href="https://quilljs.com/docs/modules/"
      />
      <homepage-link
        icon="doc"
        text="Quill Delta format"
        href="https://quilljs.com/docs/delta/"
      />
    </template>
    <template slot="content">
      <homepage-example-card
        :data="example"
        :key="example.name"
        :title="example.name"
        v-for="example in examples" 
      >
        <component class="quill-example" :is="example.name" />
      </homepage-example-card>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { isBrowser } from '@/environment'
  import { createComponent } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExampleCard from '@/components/homepage/card-example.vue'

  const repoId = 'vue-quill-editor'
  const description = 'Quill editor component for Vue'
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
    getComponentExampleMeta(
      require('@/projects/vue-quill-editor/examples').default
    ).forEach(({ component, ...others }) => {
      data.examples.push(others)
      Object.assign(components, {
        [component.name]: component
      })
    })
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
  .vue-quill-editor {
    .quill-example {
      background-color: $module-bg;
    }
  }
</style>

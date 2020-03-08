<template>
  <homepage
    :repositorie-id="repositorieId"
    :class="repositorieId"
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
      <client-only>
        <homepage-example-card
          :key="example.name"
          :path="example.path"
          :title="example.title || example.name"
          v-for="example in examples"
        >
          <component class="quill-example" :is="example.name" />
        </homepage-example-card>
      </client-only>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExampleCard from '@/components/homepage/card-example.vue'
  import { GitHubRepositorieIDs } from '@/config'
  import { isBrowser } from '@/environment'
  import { StoreNames } from '@/store'

  const data = {
    repositorieId: GitHubRepositorieIDs.VueQuillEditor,
    examples: [] as $TODO[],
  }
  const components = {
    Homepage,
    HomepageLink,
    HomepageExampleCard
  }

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-quill-editor/examples').default)
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

<style lang="scss" scoped>
  .vue-quill-editor {
    .quill-example {
      background-color: $module-bg;
    }
  }
</style>

<template>
  <homepage :repositorie-id="repositorieId" :class="repositorieId">
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
      <homepage-link
        icon="doc"
        text="Nuxt.js example"
        href="https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-quill-editor/nuxt"
      />
    </template>
    <template slot="content">
      <homepage-examples
        example-class="quill-example"
        content-class="quill-example-content"
        :examples="examples"
      />
    </template>
  </homepage>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { getComponentExampleMeta, getHomePageHeadMeta } from '@/transformers/page-meta'
  import { GitHubRepositorieIDs } from '@/config'
  import { isBrowser } from '@/environment'
  import HomepageExamples, { IExample } from '@/components/homepage/examples.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import Homepage from '@/components/homepage/index.vue'

  const repositorieId = GitHubRepositorieIDs.VueQuillEditor
  const examples: IExample[] = []

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-quill-editor/examples'))
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
      HomepageLink,
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

<style lang="scss">
  .quill-example-content {
    overflow: initial !important;
  }
</style>

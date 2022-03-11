<template>
  <homepage :repositorie-id="repositorieId" :class="repositorieId">
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
      <homepage-examples example-class="codemirror-example" :examples="examples" />
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

  const repositorieId = GitHubRepositorieIDs.VueCodemirror
  const examples: IExample[] = []

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-codemirror/examples'))
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
  .codemirror-example {
    height: 350px !important;

    .CodeMirror,
    .CodeMirror-merge {
      height: 350px !important;
    }
  }
</style>

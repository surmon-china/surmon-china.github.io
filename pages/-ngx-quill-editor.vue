<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="ngx-quill-editor"
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
      <homepage-example-card :data="{ title: 'example' }">
        <iframe class="iframe" src="https://coder.example.com/ngx-quill-editor" frameborder="0"></iframe>
      </homepage-example-card>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { getHomePageHeadMeta } from '@/transforms/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageExampleCard from '@/components/homepage/cards/example.vue'

  const repoId = 'ngx-quill-editor'
  const description = 'Quill editor component for Angular'

  export default createComponent({
    name: repoId,
    components: {
      Homepage,
      HomepageExampleCard,
    },
    head: getHomePageHeadMeta(repoId, description),
    setup() {
      return {
        repoId,
        description,
      }
    }
  })
</script>

<style lang="scss" scoped>
  .ngx-quill-editor {
    .iframe {
      height: 400px;
    }
  }
</style>

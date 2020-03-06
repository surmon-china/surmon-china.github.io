<template>
  <homepage
    :name="repoId"
    :repo-id="repoId"
    :description="description"
    class="vue-awesome-swiper"
  >
    <template slot="actions">
      <homepage-link
        icon="doc"
        text="Swiper 5/4 API Document (zh)"
        href="https://www.swiper.com.cn/api/index.html"
      />
      <homepage-link
        icon="doc"
        text="Swiper API Document (en)"
        href="https://swiperjs.com/api/"
      />
    </template>
    <template slot="content">
      <homepage-example-card
        :data="example"
        :key="example.name"
        :title="example.name"
        class="example-card"
        v-for="example in examples" 
      >
        <component class="swiper-example" :is="example.name" />
      </homepage-example-card>
    </template>
  </homepage>
</template>

<script lang="ts">
  import { isBrowser } from '@/environment'
  import { createComponent } from '@vue/composition-api'
  import { transformComponentsToNormalMaterial, getHomePageHeadMeta } from '@/transformers/example'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExampleCard from '@/components/homepage/cards/example.vue'

  const repoId = 'vue-awesome-swiper'
  const description = 'Swiper component for Vue'
  const data: $TODO = {
    repoId,
    description,
    examples: []
  }
  const components = {
    Homepage,
    HomepageLink,
    HomepageExampleCard
  }

  if (isBrowser) {
    const { components: exComponents, examples } = transformComponentsToNormalMaterial(
      require('@/projects/vue-awesome-swiper/examples').default
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
  .vue-awesome-swiper {
    .example-card {
      /deep/ .header {
        border-bottom: 1px solid $module-bg-darken;
      }
    }

    .swiper-example {
      height: 300px;
    }
  }
</style>

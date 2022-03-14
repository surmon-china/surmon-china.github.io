<template>
  <homepage :repositorie-id="repositorieId" :class="repositorieId">
    <template slot="actions">
      <homepage-link
        icon="doc"
        text="Swiper 5/4 API Document (ZH)"
        href="https://www.swiper.com.cn/api/index.html"
      />
      <homepage-link
        icon="doc"
        text="Swiper API Document (EN)"
        href="https://swiperjs.com/api/"
      />
      <homepage-link
        icon="doc"
        text="Mobile examples"
        href="https://www.swiper.com.cn/demo/senior/index.html"
      />
      <homepage-link
        icon="doc"
        text="How to use with SSR?"
        href="https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-awesome-swiper/nuxt"
      />
    </template>
    <template slot="content">
      <homepage-examples example-class="swiper-example" :examples="examples" />
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

  const repositorieId = GitHubRepositorieIDs.VueAwesomeSwiper
  const examples: IExample[] = []

  if (isBrowser) {
    getComponentExampleMeta(require('@/projects/vue-awesome-swiper/examples'))
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
  .swiper-example {
    height: 300px;
    background-color: $module-bg-darken;
  }
</style>

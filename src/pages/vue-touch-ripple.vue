<script lang="ts" setup>
  import { getLegacyURL } from '@/config'
  import { Repository } from '@/config'
  import { useMeta } from '@/composables/meta'
  import { getExampleComponent } from '@/transforms/example'
  import { getMetaTitle, getMetaKeywords, getMetaDescription } from '@/transforms/meta'
  import VueRenderer from '@/components/renderer/vue.vue'
  import Homepage from '@/components/homepage/index.vue'
  import HomepageLink from '@/components/homepage/link.vue'
  import HomepageExamples from '@/components/homepage/examples.vue'
  import exampleComponents from '@examples/vue-touch-ripple'
  const id = Repository.VueTouchRipple
  const examples = exampleComponents.map(getExampleComponent)

  useMeta({
    title: getMetaTitle(id),
    keywords: getMetaKeywords(id).join(','),
    description: getMetaDescription(id)
  })
</script>

<template>
  <vue-renderer :repository="id">
    <homepage :repository="id">
      <template #actions>
        <homepage-link icon="doc" text="Vue(2) examples" :href="getLegacyURL(id)" />
        <homepage-link
          icon="doc"
          text="Component Props"
          href="https://github.com/surmon-china/vue-touch-ripple#component-props"
        />
        <homepage-link
          icon="doc"
          text="Component Events"
          href="https://github.com/surmon-china/vue-touch-ripple#component-events"
        />
        <homepage-link
          icon="discord"
          text="Discord discussions"
          href="https://discord.gg/QF8zwF3vPv"
        />
      </template>
      <template #content>
        <homepage-examples :examples="examples" :disabled-auto-ad="true">
          <template #component="example">
            <div class="touch-ripple-example">
              <component :is="example.component" />
            </div>
          </template>
        </homepage-examples>
      </template>
    </homepage>
  </vue-renderer>
</template>

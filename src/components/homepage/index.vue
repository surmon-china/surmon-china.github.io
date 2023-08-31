<script lang="ts" setup>
  import { ref, onBeforeMount } from 'vue'
  import axios from '@/services/axios'
  import Mammon, { MammonProvider } from '@/components/mammon/index'
  import HomepageBanner from './_banner.vue'
  import HomepageLanguages from './_languages.vue'
  import HomepageCard from './card.vue'
  import * as CONFIG from '@/config'

  const props = defineProps<{
    repository: string
    packages?: string[]
    headerAdProvider?: MammonProvider
    footerAdProvider?: MammonProvider
  }>()

  const isLoadingLanguages = ref(false)
  const languages = ref<{ [key: string]: number } | null>(null)
  const fetchLanguages = async () => {
    // https://docs.github.com/en/rest/repos/repos#list-repository-languages--parameters
    const repo = props.repository
    const user = CONFIG.GITHUB_USERNAME
    const url = `https://api.github.com/repos/${user}/${repo}/languages`
    try {
      isLoadingLanguages.value = true
      languages.value = await axios.get(url)
    } catch (error) {
      console.warn('Fetch repository languages error:', error)
    } finally {
      isLoadingLanguages.value = false
    }
  }

  onBeforeMount(() => {
    fetchLanguages()
  })
</script>

<template>
  <main class="homepage">
    <transition name="module">
      <homepage-languages :languages="languages" v-if="languages" />
    </transition>
    <homepage-banner :repository="props.repository" :packages="props.packages" :loading="isLoadingLanguages">
      <template #actions>
        <slot name="actions"></slot>
      </template>
    </homepage-banner>
    <div class="container">
      <homepage-card class="homepage-mammon" v-if="headerAdProvider">
        <mammon :provider="headerAdProvider" />
      </homepage-card>
      <slot name="content"></slot>
      <homepage-card class="homepage-mammon" v-if="footerAdProvider">
        <mammon :provider="footerAdProvider" />
      </homepage-card>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .homepage {
    padding: 0;
    overflow: hidden;

    > .container {
      margin: 2rem auto;

      .card {
        background-color: $banner-bg;
        width: 100%;
        height: auto;
        min-height: 40px;
        margin: 20px 0;
      }

      .homepage-mammon {
        min-height: 9rem;
        overflow: hidden;
      }
    }
  }

  @media screen and (max-width: $container-width) {
    .homepage {
      .container {
        width: 90%;
      }
    }
  }
</style>

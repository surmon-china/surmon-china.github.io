<script lang="ts" setup>
  import { computed } from 'vue'
  import { useGlobalStore } from '@/store'
  import { numberSplit } from '@/transforms/unit'
  import { getGitHubRepositoryURL, getNPMHomepageURL } from '@/transforms/url'
  import Skeleton from '@/components/common/skeleton.vue'
  import GithubButton from './button.vue'

  interface Props {
    repository: string
    packages?: string[]
  }

  const props = withDefaults(defineProps<Props>(), {
    packages: () => []
  })

  const store = useGlobalStore()
  const initialized = computed(() => store.initialized)
  const repoUrl = getGitHubRepositoryURL(props.repository)
  const repoDetail = computed(() => store.getGitHubRepositoryDetail(props.repository))
  const npmDownloads = computed(() => {
    const downloads = store.getNPMPackagesDownloadsTotal(props.packages)
    return numberSplit(downloads)
  })
</script>

<template>
  <div class="banner">
    <transition name="module" mode="out-in">
      <div v-if="!initialized" class="banner-content" key="skeleton">
        <div class="title-skeleton"><skeleton /></div>
        <div class="subtitle-skeleton"><skeleton /></div>
        <div class="buttons-skeleton">
          <div class="item-skeleton" :key="item" v-for="item in 4">
            <skeleton />
          </div>
        </div>
      </div>
      <div v-else class="banner-content" key="content">
        <p class="archived" v-if="repoDetail?.archived">
          <i class="iconfont icon-warning-line"></i>
          This repository has been archived. It is now read-only.
        </p>
        <h1 class="title">{{ repository }}</h1>
        <h4 class="subtitle">{{ repoDetail?.description || '...' }}</h4>
        <div class="buttons">
          <github-button
            :link="repoUrl"
            :count="repoDetail?.stargazers_count || 0"
            :countLink="`${repoUrl}/stargazers`"
            icon="icon-github"
            class="item"
            text="Star"
          />
          <github-button
            :link="`${repoUrl}/issues`"
            :count="repoDetail?.open_issues_count || 0"
            icon="icon-issue"
            class="item"
            text="Issue"
          />
          <github-button
            :link="`${repoUrl}/fork`"
            :count="repoDetail?.forks || 0"
            icon="icon-fork"
            class="item"
            text="Fork"
          />
          <github-button
            class="item"
            icon="icon-download"
            text="Download"
            :link="`${repoUrl}/archive/main.zip`"
            :count-icon="packages.length ? `icon-npm` : void 0"
            :count-text="packages.length ? npmDownloads : void 0"
            :count-link="packages.length === 1 ? getNPMHomepageURL(packages[0]) : repoUrl"
          />
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .banner {
    position: relative;
    overflow: hidden;
    background-color: $banner-bg;

    .banner-content {
      min-height: $banner-height;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title-skeleton {
      width: 400px;
      max-width: 40%;
      height: 38px;
      margin-bottom: $lg-gap;
    }
    .subtitle-skeleton {
      width: 300px;
      max-width: 36%;
      height: 30px;
      margin-bottom: 4rem;
    }
    .buttons-skeleton {
      display: flex;
      height: 34px;
      width: 580px;
      max-width: 70%;
      .item-skeleton {
        flex: 1;
        margin: 0 $gap;
      }
    }

    .archived {
      color: $github-attention;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    .title {
      font-size: 3rem;
      font-weight: bold;
      margin-top: 0;
    }

    .subtitle {
      margin-top: 0;
      margin-bottom: 5rem;
      font-size: $font-size-huge;
      font-weight: normal;
      text-align: center;
    }

    .buttons {
      .item:not(:first-child) {
        margin-left: $gap;
      }

      .github-license {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 $sm-gap;
        background-color: $banner-bg;
        color: $text-color;

        .iconfont {
          font-weight: normal;
          margin-right: 2px;
        }
      }
    }

    .actions {
      margin-top: 2rem;
      margin-bottom: 0;
      display: flex;
    }
  }

  @media screen and (max-width: $container-width) {
    .banner {
      min-height: 20rem !important;
      .title {
        font-size: 2.3em !important;
      }
      .subtitle {
        font-size: 1.3em !important;
        margin-bottom: 2rem !important;
      }

      .buttons,
      .actions {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      .homepage-button,
      .homepage-link {
        margin-bottom: $gap;
      }
    }
  }
</style>

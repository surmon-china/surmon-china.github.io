<template>
  <main class="homepage">
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

<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue'
  import { useGlobalStore } from '@/store'
  import { numberSplit } from '@/transforms/unit'
  import { getGitHubRepositoryURL, getNPMHomepageURL } from '@/transforms/url'
  import Mammon, { MammonProvider } from '@/components/mammon/index'
  import Skeleton from '@/components/common/skeleton.vue'
  import HomepageCard from './card.vue'
  import GithubButton from './button.vue'

  export default defineComponent({
    name: 'homepage',
    components: {
      Mammon,
      Skeleton,
      HomepageCard,
      GithubButton
    },
    props: {
      repository: {
        type: String,
        required: true
      },
      packages: {
        type: Array as PropType<string[]>,
        default: () => [] as string[]
      },
      headerAdProvider: {
        type: String as PropType<MammonProvider>,
        required: false
      },
      footerAdProvider: {
        type: String as PropType<MammonProvider>,
        required: false
      }
    },
    setup(props) {
      const store = useGlobalStore()
      const initialized = computed(() => store.initialized)
      const repoUrl = getGitHubRepositoryURL(props.repository)
      const repoDetail = computed(() => store.getGitHubRepositoryDetail(props.repository))
      const npmDownloads = computed(() => {
        const downloads = store.getNPMPackagesDownloadsTotal(props.packages)
        return numberSplit(downloads)
      })

      return {
        initialized,
        repoUrl,
        repoDetail,
        npmDownloads,
        getNPMHomepageURL
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .homepage {
    padding: 0;
    overflow: hidden;

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

      .banner {
        min-height: 20rem !important;
        .title {
          font-size: 2.3em !important;
        }
        .subtitle {
          font-size: 1.3em !important;
          margin-bottom: 2rem !important;
        }
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

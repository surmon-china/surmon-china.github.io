<template>
  <div class="home-page">
    <homepage-header :repository="repository" />
    <main class="main">
      <transition name="module" mode="out-in">
        <div v-if="!initialized" class="banner" key="skeleton">
          <div class="title-skeleton"><skeleton /></div>
          <div class="subtitle-skeleton"><skeleton /></div>
          <div class="buttons-skeleton">
            <div class="item-skeleton" :key="item" v-for="item in 4">
              <skeleton />
            </div>
          </div>
        </div>
        <div v-else class="banner" key="banner">
          <h1 class="title">{{ repository }}</h1>
          <h4 class="subtitle">{{ repoDescription || '...' }}</h4>
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
              :link="`${repoUrl}/archive/master.zip`"
              :count-icon="isNPMPackage ? `icon-npm` : void 0"
              :count-link="isNPMPackage ? npmUrl : void 0"
              :count-text="isNPMPackage ? packageDownloads : void 0"
            />
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </transition>
      <div class="container">
        <homepage-card class="homepage-mammon" v-if="headerAdProvider">
          <mammon :provider="headerAdProvider" />
        </homepage-card>
        <transition name="module" mode="out-in">
          <slot name="content" v-if="initialized"></slot>
          <Loading class="loading" v-else />
        </transition>
        <homepage-card class="homepage-mammon" v-if="footerAdProvider">
          <mammon :provider="footerAdProvider" />
        </homepage-card>
      </div>
    </main>
    <template v-if="initialized">
      <homepage-footer :repository="repository" />
      <homepage-toolbox :repository="repository" />
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from 'vue'
  import { useGlobalStore } from '@/store'
  import { numberSplit } from '@/transforms/unit'
  import { getGitHubRepositoryURL, getNPMHomepageURL } from '@/transforms/url'
  import Mammon, { MammonProvider } from '@/components/mammon/index'
  import Skeleton from '@/components/common/skeleton.vue'
  import HomepageHeader from './header.vue'
  import HomepageFooter from './footer.vue'
  import HomepageCard from './card.vue'
  import HomepageToolbox from './toolbox.vue'
  import GithubButton from './button.vue'
  import Loading from './loading.vue'

  export default defineComponent({
    name: 'homepage',
    components: {
      Mammon,
      Loading,
      Skeleton,
      HomepageHeader,
      HomepageFooter,
      HomepageCard,
      HomepageToolbox,
      GithubButton
    },
    props: {
      repository: {
        type: String,
        required: true
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
      const npmUrl = getNPMHomepageURL(props.repository)
      const repoUrl = getGitHubRepositoryURL(props.repository)
      const repoDescription = computed(() => repoDetail.value?.description)
      const repoDetail = computed(() => store.getGitHubRepositoryDetail(props.repository))
      const appRepositories = computed(() => store.githubRepositories)
      const packageDownloads = computed(() => {
        const downloads = store.npmPackagesDownloadsMap.get(props.repository)
        return downloads ? numberSplit(downloads) : '0'
      })
      const isNPMPackage = computed((): boolean => {
        return store.githubNPMRepositories
          .map(({ name }: any) => name)
          .includes(props.repository)
      })

      return {
        initialized,
        isNPMPackage,
        repoUrl,
        repoDescription,
        repoDetail,
        packageDownloads,
        appRepositories,
        npmUrl
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/init.scss';

  .home-page {
    .main {
      padding: 0;
      overflow: hidden;

      .banner {
        min-height: 25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        background-color: $banner-bg;

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

        .title {
          font-size: 3rem;
          font-weight: bold;
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

        > .actions {
          margin-top: 2rem;
          margin-bottom: 2rem;
          display: flex;

          .repositories {
            margin-left: $gap;
          }
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

        .loading {
          /* header + banner + margin */
          height: calc(100vh - 3rem - 25rem - 4rem);
        }

        .homepage-mammon {
          min-height: 9rem;
          overflow: hidden;
        }
      }
    }
  }
</style>

<style lang="scss">
  @import '@/styles/init.scss';

  @media screen and (max-width: $container-width) {
    #toolbox {
      display: none !important;
    }
    .container {
      width: 90%;
    }
    .home-page {
      .header {
        padding: 0 $gap;
      }

      .main {
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

      .footer {
        .footer-content {
          font-size: $font-size-small;
        }
      }
    }
  }
</style>

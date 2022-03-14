<template>
  <div class="home-page">
    <header class="header">
      <div class="container">
        <div class="main">
          <a class="author" target="_blank" :href="userUrl">
            <i class="iconfont icon-github"></i>
            <span class="name">{{ githubUID }}</span>
          </a>
          <a class="author" target="_blank" href="/">
            <i class="iconfont icon-experiment"></i>
            <span class="name">Projects</span>
          </a>
          <transition name="module">
            <a class="author" target="_blank" :href="blogUrl" v-if="blogUrl">
              <i class="iconfont icon-link"></i>
              <span class="name">Blog</span>
            </a>
          </transition>
          <a class="author" target="_blank" :href="sponsorUrl">
            <i class="iconfont icon-heart"></i>
            <span class="name">Sponsor</span>
          </a>
        </div>
        <div class="repositories">
          <span class="current">
            <span>{{ currentRepositorie }}</span>
            <i class="iconfont icon-dropdown"></i>
          </span>
          <ul class="list">
            <li
              class="item"
              :key="item.name"
              :title="`${item.name}: ${item.description}`"
              v-for="item in appRepositories"
            >
              <a
                :href="`/${item.name}`"
                target="_blank"
                class="link"
                :class="{ 'disabled': item.name === currentRepositorie }"
              >
                <div class="name">
                  <span class="text">
                    {{ item.name }}
                    <i class="iconfont icon-link-external"></i>
                  </span>
                  <span class="meta">
                    <i class="iconfont icon-star"></i>
                    <span>{{ item.stargazers_count }}</span>
                  </span>
                  <span class="meta">
                    <i class="iconfont icon-fork"></i>
                    <span>{{ item.forks }}</span>
                  </span>
                </div>
                <div class="description">{{ item.description }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="banner">
        <h1 class="title"><span>{{ repoName }}</span></h1>
        <transition name="module" mode="out-in">
          <h4 class="subtitle" :key="repoDescription">{{ repoDescription || '...' }}</h4>
        </transition>
        <div class="github-buttons">
          <github-button-base
            :link="repoUrl"
            :count="repoDetail && repoDetail.stargazers_count || 0"
            :countLink="`${repoUrl}/stargazers`"
            icon="icon-github"
            class="item"
            text="Star"
          />
          <github-button-base
            :link="`${repoUrl}/issues`"
            :count="repoDetail && repoDetail.open_issues_count || 0"
            icon="icon-issue"
            class="item"
            text="Issue"
          />
          <github-button-base
            :link="`${repoUrl}/fork`"
            :count="repoDetail && repoDetail.forks || 0"
            icon="icon-fork"
            class="item"
            text="Fork"
          />
          <transition name="module" mode="out-in">
            <github-button-base
              v-if="isNPMPackage"
              :link="`${repoUrl}/archive/master.zip`"
              icon="icon-download"
              class="item"
              text="Download"
              count-icon="icon-npm"
              :count-link="npmUrl"
              :count-text="packageDownloads"
            />
            <github-button-base
              v-else
              :link="`${repoUrl}/archive/master.zip`"
              icon="icon-download"
              class="item"
              text="Download"
              count-icon="icon-law"
              :count-link="`${repoUrl}/blob/master/LICENSE`"
              :count-text="
                repoDetail && repoDetail.license
                  ? repoDetail.license.name
                  : 'LICENSE'
              "
            />
          </transition>
          <!-- <github-button-base
            :link="`${repoUrl}/blob/master/LICENSE`"
            icon="icon-law"
            class="item"
            :text="
              repoDetail && repoDetail.license
                ? repoDetail.license.name
                : 'LICENSE'
            "
          /> -->
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
      <div class="container">
        <homepage-basic-card class="homepage-mammon" v-if="headerAdProvider">
          <client-only>
            <mammon :provider="headerAdProvider" />
          </client-only>
        </homepage-basic-card>
        <slot name="content">
          <Loading class="loading" />
        </slot>
        <homepage-basic-card class="homepage-mammon" v-if="footerAdProvider">
          <client-only>
            <mammon :provider="footerAdProvider" />
          </client-only>
        </homepage-basic-card>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <span class="footer-content">
          <a :href="repoUrl" target="_blank">{{ repoName }}</a>
          <span> is maintained by </span>
          <a :href="userUrl" target="_blank">@{{ githubUID }}</a>
        </span>
      </div>
    </footer>
    <homepage-toolbox />
    <homepage-modal />
  </div>
</template>

<script lang="ts">
  import { PropType, createComponent, ref, computed, onMounted } from '@vue/composition-api'
  import { Route } from 'vue-router'
  import { StoreNames, RootState } from '@/store'
  import { IVueComponentData } from '@/types/interfaces'
  import { getRepositorieUrl, getNPMUrl } from '@/transformers/url'
  import { numberSplit } from '@/transformers/unit'
  import GithubButtonBase from '@/components/github-button/base.vue'
  import Mammon from '@/components/mammon/index.vue'
  import HomepageBasicCard from './card-basic.vue'
  import HomepageToolbox from './toolbox.vue'
  import HomepageModal from './modal.vue'
  import Loading from './loading.vue'
  import { provideModalStore } from './modal-store'
  import CONFIG from '@/config'

  export default createComponent({
    name: 'homepage',
    components: {
      Mammon,
      Loading,
      HomepageBasicCard,
      HomepageToolbox,
      HomepageModal,
      GithubButtonBase
    },
    props: {
      name: {
        type: String,
        required: false
      },
      repositorieId: {
        type: String,
        required: true
      },
      headerAdProvider: {
        type: String,
        required: false
      },
      footerAdProvider: {
        type: String,
        required: false
      }
    },
    setup(props, { root }) {
      provideModalStore()

      const rootState = root.$store.state as RootState
      const repoDetail = computed(() => {
        return root.$store.getters[StoreNames.GetRepositorieDetail](props.repositorieId)
      })
      const githubUID = CONFIG.GITHUB_UID
      const userUrl = CONFIG.GITHUB_USER_URL
      const blogUrl = computed(() => rootState.userInfo?.blog)
      const currentRepositorie = computed(() => root.$route.name)
      const npmUrl = computed(() => getNPMUrl(props.repositorieId))
      const repoUrl = computed(() => getRepositorieUrl(githubUID, props.repositorieId))
      const repoName = computed(() => props.name || repoDetail.value?.name || props.repositorieId)
      const repoDescription = computed(() => repoDetail.value?.description)
      const appRepositories = computed(() => root.$store.getters[StoreNames.AppRepositories])
      const packageDownloads = computed(() => {
        const downloads = (rootState.npmPackagesDownloadsMap as any)[repoName.value as any]
        return downloads ? numberSplit(downloads) : '0'
      })
      const isNPMPackage = computed((): boolean => {
        return root.$store.getters[StoreNames.NPMRepositories]
          .map(({ name }: $TODO) => name)
          .includes(repoName.value)
      })

      return {
        isNPMPackage,
        githubUID,
        userUrl,
        blogUrl,
        currentRepositorie,
        repoUrl,
        repoName,
        repoDescription,
        repoDetail,
        packageDownloads,
        appRepositories,
        npmUrl,
        sponsorUrl: CONFIG.GITHUB_SPONSORS_URL
      }
    }
  })
</script>

<style lang="scss">
  @media screen and (max-width: $container-width) {
    #toolbox {
      display: none !important;
    }
    .container {
      width: 100%;
    }
    .home-page {
      .header {
        padding: 0 $gap;

        .main {
          .author {
            &::after {
              @include hidden();
            }
            &:not(:first-child) {
              display: none !important;
            }
          }
        }
      }

      .main {
        .banner {
          min-height: 20rem !important;

          .title {
            font-size: 2.2rem !important;
          }
          .subtitle {
            margin-bottom: 2rem !important;
          }
        }

        .github-buttons,
        .actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .github-buttons .item,
        .actions > * {
          margin: $sm-gap;
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

<style lang="scss" scoped>
  .home-page {
    .header {
      $height: 3rem;
      height: $height;
      background-color: $github-primary;

      .container {
        height: $height;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .main {
          height: 100%;

          .author {
            height: 100%;
            display: inline-flex;
            align-items: center;
            position: relative;
            text-transform: uppercase;
            text-decoration: none;
            color: $text-reverse;
            opacity: .5;
            transition: opacity $transition-time-fast / 3;
            &:hover {
              opacity: .9;
              &::after {
                opacity: .5;
              }
            }

            .iconfont {
              margin-right: $xs-gap;
            }

            &:not(:first-child) {
              margin-left: $gap;
            }

            &:not(:last-child) {
              margin-right: $gap;

              &::after {
                $size: 4px;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: -$gap;
                width: $size;
                height: $size;
                margin-top: - ($size / 2);
                margin-right: - ($size / 2);
                border-radius: 50%;
                background-color: rgba($text-reverse, 0.8);
                transition: none;
              }
            }
          }
        }

        .repositories {
          height: 100%;
          position: relative;
          color: $text-reverse;

          &:hover {
            .current {
              opacity: .9;
            }
            .list {
              @include visible();
            }
          }

          .current {
            height: 100%;
            display: flex;
            align-items: center;
            opacity: .5;
            font-size: $font-size-large;
            transition: opacity $transition-time-fast;
            cursor: pointer;

            .iconfont {
              margin-left: $xs-gap;
            }
          }

          .list {
            display: block;
            position: absolute;
            z-index: 9;
            top: $height;
            right: 0;
            width: 260px;
            max-height: 280px;
            border: none;
            margin: 0;
            margin-top: 1px;
            padding: 0;
            list-style: none;
            overflow-y: auto;
            background-color: $github-primary;
            @include hidden();
            @include visibility-transition();

            .item {
              &:first-child {
                .link {
                  border: none;
                }
              }

              .link {
                display: block;
                width: 100%;
                padding: $gap;
                border-top: 1px solid $github-secondary;
                text-decoration: none;
                color: $text-reverse;
                @include background-transition();
                user-select: none;
                &.disabled {
                  opacity: .4;
                  pointer-events: none;
                }

                .name {
                  margin-bottom: $gap;
                  @include text-overflow();

                  .text {
                    font-size: $font-size-large;
                    margin-right: $xs-gap;
                  }

                  .meta,
                  .iconfont {
                    font-size: $font-size-small;
                  }
                }

                .description {
                  font-size: $font-size-small;
                  @include text-overflow();
                }

                &:hover {
                  background-color: darken($github-primary, 5%);
                  color: $text-reverse;

                  .name {
                    .text {
                      text-decoration: underline;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

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
        color: $text-reverse;
        background-color: $github-secondary;
        border-top: 1px solid $black;

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

        .github-buttons {
          .item:not(:first-child) {
            margin-left: $sm-gap;
          }

          .github-license {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0 $sm-gap;
            background-color: $module-bg;
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
          background-color: $module-bg;
          width: 100%;
          height: auto;
          min-height: 40px;
          margin: 20px 0;
        }

        .loading {
          height: 18rem;
          margin-top: $gap * 2;
          background-color: $module-bg;
        }

        .homepage-mammon {
          min-height: 9rem;
          overflow: hidden;
        }
      }
    }

    > .footer {
      height: 4rem;
      line-height: 4rem;
      background-color: $github-secondary;

      .container {
        color: $text-reverse;
        text-align: center;
        text-transform: uppercase;

        a {
          color: $text-reverse;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>

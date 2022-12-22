<template>
  <header class="navbar">
    <div class="container" :class="{ full }">
      <div class="left">
        <ulink class="item github" :href="CONFIG.GITHUB_USER_URL">
          <i class="iconfont icon-github"></i>
          <span class="text">{{ CONFIG.GITHUB_UID }}</span>
        </ulink>
        <span class="dot">/</span>
        <ulink class="item repository" :href="getGitHubRepositoryURL(repository)">
          <span class="text">{{ repository }}</span>
        </ulink>
      </div>
      <div class="right">
        <button class="item theme" @click="toggleTheme">
          <i class="iconfont" :class="themeIcon"></i>
        </button>
        <div class="item project">
          <span class="text">Projects</span>
          <i class="iconfont icon-arrow-down"></i>
          <div class="projects">
            <div class="container" :class="{ full }">
              <transition name="module" mode="out-in">
                <loading v-if="!store.initialized" class="loading" />
                <ul v-else class="list">
                  <li
                    class="item"
                    :key="item.name"
                    :class="{ activated: item.name === repository }"
                    v-for="item in ownRepositories"
                  >
                    <div class="title">
                      <i class="repo-icon iconfont icon-repo"></i>
                      <ulink
                        class="link"
                        :href="getGitHubRepositoryURL(item.name)"
                        :title="item.name"
                      >
                        {{ item.name }}
                      </ulink>
                      <i class="link-icon iconfont icon-link-external"></i>
                      <span
                        v-if="item.archived"
                        class="archived"
                        title="This repository has been archived. It is now read-only."
                      >
                        <i class="iconfont icon-warning-line"></i>
                      </span>
                    </div>
                    <div class="description" :title="item.description">
                      {{ item.description || '-' }}
                    </div>
                    <div class="meta">
                      <div class="left">
                        <ulink
                          class="item"
                          :href="getGitHubRepositoryURL(item.name)"
                          :title="`GitHub stars: ${item.stargazers_count}`"
                        >
                          <i class="iconfont icon-star"></i>
                          <span>{{ countToK(item.stargazers_count) }}</span>
                        </ulink>
                        <ulink
                          v-if="item.npmPackages.length"
                          class="item npm"
                          :title="`NPM downloads: ${item.npmDownloads}`"
                          :href="
                            item.npmPackages.length === 1
                              ? getNPMHomepageURL(item.npmPackages[0])
                              : getGitHubRepositoryURL(item.name)
                          "
                        >
                          <i class="iconfont icon-npm"></i>
                          <span>{{ item.npmDownloads }}</span>
                        </ulink>
                        <span v-if="item.language" class="item language">
                          <i
                            class="color"
                            :style="{
                              backgroundColor: getGitHubLanguageColor(item.language)
                            }"
                          ></i>
                          <span>{{ item.language }}</span>
                        </span>
                      </div>
                      <div class="right">
                        <ulink
                          v-if="item.homepage"
                          :href="item.homepage"
                          :title="`${item.name}'s homepage`"
                          class="homepage"
                        >
                          <i class="iconfont icon-website"></i>
                          <span class="text">HP</span>
                        </ulink>
                      </div>
                    </div>
                  </li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import GH_LANG_COLORS from 'gh-lang-colors'
  import { defineComponent, computed } from 'vue'
  import { useGlobalStore } from '@/store'
  import { useTheme, Theme } from '@/composables/theme'
  import { numberSplit, countToK } from '@/transforms/unit'
  import { getGitHubRepositoryURL, getNPMHomepageURL } from '@/transforms/url'
  import * as CONFIG from '@/config'
  import Loading from '../common/loading.vue'

  export default defineComponent({
    name: 'navbar',
    components: { Loading },
    props: {
      repository: {
        type: String,
        required: true
      },
      full: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const theme = useTheme()
      const store = useGlobalStore()
      const ownRepositories = computed(() => {
        return store.githubOwnRepositories.map((repo) => {
          const found = Object.values(CONFIG.PROJECTS).find((project) => {
            return project.repository === repo.name
          })
          const npmPackages: string[] = (found as any)?.packages ?? []
          return {
            ...repo,
            npmPackages,
            npmDownloads: npmPackages.length
              ? numberSplit(store.getNPMPackagesDownloadsTotal(npmPackages))
              : '-'
          }
        })
      })

      const themeValue = theme.theme
      const toggleTheme = theme.toggle
      const themeIcon = computed(() => {
        const themeIconMap = {
          [Theme.Light]: 'icon-sun',
          [Theme.Dark]: 'icon-moon'
        }
        return themeIconMap[themeValue.value]
      })

      const getGitHubLanguageColor = (language: string): string => {
        return (GH_LANG_COLORS as any)[language]
      }

      return {
        CONFIG,
        store,
        ownRepositories,
        themeIcon,
        toggleTheme,
        getNPMHomepageURL,
        getGitHubRepositoryURL,
        getGitHubLanguageColor,
        countToK
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .navbar {
    height: $navbar-height;
    background-color: $header-bg;
    border-bottom: 1px solid $border-color;
    box-sizing: content-box;
    user-select: none;
    z-index: 99999;

    > .container {
      /* for navbar border */
      padding-bottom: 1px;
      height: $navbar-height;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .left,
      > .right {
        display: flex;
        align-items: center;
        height: 100%;

        .dot {
          margin: 0 $xs-gap;
          color: $text-disabled;
        }

        > .item {
          height: 100%;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: $text-secondary;
          &:hover {
            color: $text-color;
          }

          > .text {
            text-transform: uppercase;
            font-weight: bold;
          }

          &.github {
            .iconfont {
              margin-right: $xs-gap;
            }
          }
          &.repository {
            font-size: 95%;
          }
          &.theme {
            margin-right: $xs-gap;
            cursor: pointer;
            background: none;
            border: 0;
          }
        }
      }

      .project {
        height: 100%;
        position: relative;
        &:hover {
          .projects {
            @include visible();
          }
        }

        > .text {
          margin: 0 $xs-gap;
        }

        .projects {
          display: block;
          position: fixed;
          z-index: 9;
          top: $navbar-height;
          right: 0;
          width: 100vw;
          padding: $gap 0;
          border: 1px solid $border-color;
          border-width: 1px 0 1px 0;
          background-color: $banner-bg;
          @include hidden();
          @include visibility-transition();

          $min-height: $banner-height - $gap * 2;
          .container {
            min-height: $min-height;
            max-height: 68vh;
            overflow-y: auto;
          }
          .loading {
            width: 100%;
            min-height: $min-height;
          }

          .list {
            margin: 0;
            padding: 0;
            padding-right: $gap;
            border: none;
            list-style: none;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: $gap;
            width: 100%;

            > .item {
              border: 1px solid $border-color;
              border-radius: $lg-radius;
              padding: $gap;
              overflow: hidden;
              user-select: none;
              &.activated {
                border-style: double;
              }
              &.activated,
              &:hover {
                border-color: $text-secondary;
                background-color: $header-bg;
                .title {
                  .archived {
                    opacity: 1;
                  }
                }
              }

              .title {
                display: block;
                width: 100%;
                height: 20px;
                line-height: 20px;
                margin-bottom: $sm-gap;

                .link {
                  max-width: 30%;
                  margin-right: 2px;
                  color: $text-color;
                  text-decoration: none;
                  text-underline-offset: 2px;
                  font-size: $font-size-base + 2;
                  font-weight: 600;
                  @include text-overflow();
                  &:hover {
                    color: $link-color;
                    text-decoration: underline;
                  }
                }

                .repo-icon {
                  font-size: $font-size-base + 1;
                  margin-right: $xs-gap;
                  margin-left: -2px;
                }

                .link-icon {
                  font-size: $font-size-small;
                }

                .archived {
                  margin-left: $xs-gap;
                  padding: 0 2px;
                  opacity: 0.6;
                  color: $github-attention;
                  font-size: $font-size-small - 1;
                }
              }

              .description {
                margin-bottom: $gap;
                font-size: $font-size-small;
                color: $text-secondary;
                @include text-overflow();
              }

              .meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: $font-size-small;
                .iconfont {
                  font-size: $font-size-small;
                }

                .item {
                  display: inline-flex;
                  align-items: center;
                  color: $text-secondary;
                  text-decoration: none;
                  margin-right: $gap;
                  &:last-child {
                    margin-right: 0;
                  }
                  &[href]:hover {
                    color: $link-color;
                  }

                  .iconfont {
                    margin-right: $xs-gap;
                  }

                  &.npm {
                    .iconfont {
                      color: $npm-primary;
                    }
                  }

                  &.language {
                    .color {
                      display: inline-block;
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      margin-right: $xs-gap;
                    }
                  }
                }

                .homepage {
                  text-decoration: none;
                  color: $text-color;
                  &:hover {
                    color: $link-color;
                  }

                  .text {
                    font-weight: bold;
                    margin-left: $xs-gap;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @mixin full-container() {
    width: 100%;
    padding: 0 $gap;
  }

  .navbar {
    .container.full {
      @include full-container();
      .right {
        .projects {
          .list {
            padding-right: 0 !important;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .navbar {
      .container.full {
        .right {
          .projects {
            .list {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: $container-width) {
    .navbar {
      .container {
        @include full-container();
      }

      .right {
        .projects {
          .list {
            grid-template-columns: repeat(2, 1fr) !important;
            padding-right: 0 !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: $mobile-width) {
    .navbar {
      .left {
        .dot,
        .item.repository {
          display: none;
        }
      }
      .right {
        .projects {
          .list {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      }
    }
  }
</style>

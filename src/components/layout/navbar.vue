<script lang="ts" setup>
  import GH_LANG_COLORS from 'gh-lang-colors'
  import { ref, computed } from 'vue'
  import { useGlobalStore } from '@/store'
  import { useTheme, Theme } from '@/composables/theme'
  import { numberSplit, countToK } from '@/transforms/unit'
  import { getGitHubRepositoryURL, getNPMHomepageURL } from '@/transforms/url'
  import * as CONFIG from '@/config'
  import Loading from '../common/loading.vue'

  const props = defineProps<{
    repository: string
    full?: boolean
  }>()

  const theme = useTheme()
  const store = useGlobalStore()
  const themeValue = theme.theme
  const toggleTheme = theme.toggle
  const themeIcon = computed(() => {
    const themeIconMap = {
      [Theme.Light]: 'icon-sun',
      [Theme.Dark]: 'icon-moon'
    }
    return themeIconMap[themeValue.value]
  })

  const activatedTopicIndex = ref<number | null>(null)
  const topics = computed(() => {
    const data = store.githubData?.statistics.topics ?? {}
    return Object.keys(data)
      .map((key) => ({
        name: key,
        count: data[key]
      }))
      .sort((a, b) => {
        return b.count - a.count
      })
  })

  const ownRepositories = computed(() => {
    return store.githubOwnRepositories
      .filter((repository) => {
        // exclusion of some special-purpose repositories
        return !['.github'].includes(repository.name)
      })
      .map((repository) => {
        const found = Object.values(CONFIG.PROJECTS).find((project) => {
          return project.repository === repository.name
        })
        const npmPackages: string[] = (found as any)?.packages ?? []
        return {
          ...repository,
          npmPackages,
          npmDownloads: npmPackages.length ? numberSplit(store.getNPMPackagesDownloadsTotal(npmPackages)) : '-'
        }
      })
  })

  const filteredRepositories = computed(() => {
    if (activatedTopicIndex.value === null) {
      return ownRepositories.value
    }
    const topic = topics.value[activatedTopicIndex.value].name
    return ownRepositories.value.filter((repository) => {
      return (
        repository.name.includes(topic) ||
        repository.description.includes(topic) ||
        repository.topics.includes(topic) ||
        repository.npmPackages.includes(topic)
      )
    })
  })
</script>

<template>
  <header class="navbar">
    <div class="container" :class="{ full }">
      <div class="left">
        <ulink class="item github" :href="CONFIG.GITHUB_USER_URL">
          <i class="iconfont icon-github"></i>
          <span class="text">{{ CONFIG.GITHUB_USERNAME }}</span>
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
                <div v-else class="list-wrapper">
                  <ul class="topics">
                    <li
                      class="item all"
                      :class="{ activated: activatedTopicIndex === null }"
                      @click="activatedTopicIndex = null"
                    >
                      All projects
                    </li>
                    <li
                      class="item"
                      @click="activatedTopicIndex = index"
                      v-for="(item, index) in topics.slice(0, 24)"
                      :class="{ activated: activatedTopicIndex === index }"
                      :key="item.name"
                    >
                      {{ item.name }}
                    </li>
                  </ul>
                  <ul class="list">
                    <li
                      class="item"
                      :key="item.name"
                      :class="{ activated: item.name === repository }"
                      v-for="item in filteredRepositories"
                    >
                      <div class="title">
                        <i class="repo-icon iconfont icon-repo"></i>
                        <ulink
                          class="link"
                          :class="{ archived: item.archived }"
                          :href="getGitHubRepositoryURL(item.name)"
                          :title="item.name"
                        >
                          {{ item.name }}
                        </ulink>
                        <i class="link-icon iconfont icon-link-external"></i>
                        <span
                          v-if="item.archived"
                          class="archived-icon"
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
                            <i class="color" :style="{ backgroundColor: GH_LANG_COLORS[item.language] }"></i>
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
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .navbar {
    height: $navbar-height;
    background-color: $header-bg;
    border-bottom: 1px solid $border-color;
    box-sizing: border-box;
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
          border-bottom: 1px solid $border-color;
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

          .topics {
            padding: 0;
            margin: 0;
            margin-bottom: $sm-gap;

            .item {
              display: inline-block;
              box-sizing: content-box;
              margin-right: $gap;
              margin-bottom: $gap;
              height: 2rem;
              line-height: 2rem;
              padding: 0 0.6em;
              border-radius: $sm-radius;
              border: 1px solid transparent;
              background: $header-bg;
              color: $text-secondary;
              cursor: pointer;
              &:hover {
                color: $text-color;
                border-color: $text-secondary;
              }
              &.activated {
                color: $text-color;
                border-color: $text-secondary;
                font-weight: bold;
              }
            }
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
                  .archived-icon {
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

                  &.archived {
                    text-decoration: line-through;
                    text-decoration-style: double;
                    text-decoration-thickness: inherit;
                    text-decoration-color: $text-disabled;
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

                .archived-icon {
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

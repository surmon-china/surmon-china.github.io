<template>
  <header class="navbar">
    <div class="container">
      <div class="left">
        <ulink class="item" :href="CONFIG.GITHUB_USER_URL">
          <i class="iconfont icon-github"></i>
          <span class="text">{{ CONFIG.GITHUB_UID }}</span>
        </ulink>
        <span class="dot">•</span>
        <ulink class="item" :href="CONFIG.GITHUB_SPONSORS_URL">
          <span class="text">Sponsor</span>
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
            <div class="container">
              <ul class="list">
                <li
                  class="item"
                  :key="item.name"
                  :class="{ activated: item.name === repository }"
                  v-for="item in ownRepositories"
                >
                  <div class="title">
                    <ulink
                      class="link"
                      :href="getGitHubRepositoryURL(item.name)"
                      :title="item.name"
                    >
                      {{ item.name }}
                    </ulink>
                    <i class="iconfont icon-link-external"></i>
                    <span
                      v-if="item.archived"
                      class="archived"
                      title="This repository has been archived. It is now read-only."
                    >
                      <span class="icon">⚠️</span>
                      <span class="text">archived</span>
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
                        v-if="isNPMPackage(item.name)"
                        class="item npm"
                        :href="getNPMHomepageURL(item.name)"
                        :title="`NPM downloads: ${item.stargazers_count}`"
                      >
                        <i class="iconfont icon-npm"></i>
                        <span>{{ getNPMDownloads(item.name) }}</span>
                      </ulink>
                      <span v-if="item.language" class="item">{{ item.language }}</span>
                    </div>
                    <div class="right">
                      <ulink class="homepage" v-if="item.homepage" :href="item.homepage">
                        <span class="text">HP</span>
                        <i class="iconfont icon-link-external"></i>
                      </ulink>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useGlobalStore } from '@/store'
  import { useTheme, Theme } from '@/composables/theme'
  import { numberSplit, countToK } from '@/transforms/unit'
  import { getGitHubRepositoryURL, getNPMHomepageURL } from '@/transforms/url'
  import * as CONFIG from '@/config'

  export default defineComponent({
    name: 'homepage-header',
    props: {
      repository: {
        type: String,
        required: true
      }
    },
    setup() {
      const theme = useTheme()
      const store = useGlobalStore()
      const ownRepositories = computed(() => store.githubOwnRepositories)
      const isNPMPackage = (repository: string): boolean => {
        return Boolean(store.getRepositoryNPMPackage(repository))
      }
      const getNPMDownloads = (repository: string) => {
        const pkg = store.getRepositoryNPMPackage(repository)
        if (!pkg) {
          return '-'
        }
        const downloads = store.npmPackagesDownloadsMap.get(pkg.package.name)
        return downloads ? numberSplit(downloads) : '-'
      }

      const themeValue = theme.theme
      const toggleTheme = theme.toggle
      const themeIcon = computed(() => {
        const themeIconMap = {
          [Theme.Light]: 'icon-sun',
          [Theme.Dark]: 'icon-moon'
        }
        return themeIconMap[themeValue.value]
      })

      return {
        CONFIG,
        themeIcon,
        toggleTheme,
        ownRepositories,
        isNPMPackage,
        getNPMDownloads,
        getNPMHomepageURL,
        getGitHubRepositoryURL,
        countToK
      }
    }
  })
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '@/styles/init.scss';

  .navbar {
    height: $navbar-height;
    background-color: $header-bg;
    border-bottom: 1px solid $border-color;
    box-sizing: content-box;
    user-select: none;
    position: sticky;
    top: 0;
    z-index: 99999;

    > .container {
      height: $navbar-height;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .left,
      > .right {
        height: 100%;

        .dot {
          margin: 0 $sm-gap;
          color: $text-disabled;
        }

        > .item {
          height: 100%;
          display: inline-flex;
          align-items: center;
          text-decoration: none;

          > .iconfont,
          > .text {
            color: $text-secondary;
            &:hover {
              color: $text-color;
            }
          }

          > .iconfont {
            margin-right: $xs-gap;
          }
          > .text {
            text-transform: uppercase;
          }
        }
      }

      .theme {
        cursor: pointer;
        background: none;
        border: 0;
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

          .container {
            min-height: 25rem;
            max-height: 60vh;
            overflow-y: auto;
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
                border-width: 2px;
              }
              &.activated,
              &:hover {
                background-color: $header-bg;
                .title {
                  .archived {
                    opacity: 1;
                  }
                }
              }

              .title {
                width: 100%;
                display: block;
                margin-bottom: $sm-gap;

                .link {
                  margin-right: 2px;
                  font-size: $font-size-base + 2;
                  color: $text-color;
                  text-decoration: none;
                  max-width: 30%;
                  @include text-overflow();
                  &:hover {
                    color: $link-color;
                    text-decoration: underline;
                  }
                }

                .iconfont {
                  font-size: $font-size-small;
                }

                .archived {
                  margin-left: $xs-gap;
                  padding: 0 2px;
                  opacity: 0.6;
                  color: $github-attention;
                  font-size: $font-size-small - 1;
                  .icon {
                    margin-right: $xs-gap;
                  }
                  .text {
                    text-transform: uppercase;
                  }
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
                }

                .homepage {
                  text-decoration: none;
                  color: $text-color;
                  &:hover {
                    color: $link-color;
                  }

                  .iconfont {
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
</style>

<template>
  <div class="index-page">
    <div class="container">
      <aside class="aside">
        <transition name="module">
          <div class="gravatar" v-if="userInfo">
            <img class="image" :draggable="false" :src="userInfo.avatar_url">
            <h2>{{ userInfo.name || '-' }}</h2>
            <p>{{ userInfo.bio || '-' }}</p>
            <p class="sponsor">
              <github-button-base
                :link="githubSponsorsUrl"
                :count="userInfo.followers"
                :countLink="githubFollowersUrl"
                icon="icon-heart"
                icon-color="#ea4aaa"
              >
                Sponsor
              </github-button-base>
            </p>
          </div>
        </transition>
        <transition name="module">
          <div class="profile" v-if="userInfo">
            <p class="item" v-if="userInfo.html_url">
              <i class="iconfont icon-github"></i>
              <a class="text link" target="_blank" :href="userInfo.html_url">@{{ userInfo.login }}</a>
            </p>
            <p class="item" v-if="userInfo.email">
              <i class="iconfont icon-mail"></i>
              <a class="text link" target="_blank" :href="'mailto://' + userInfo.email">{{ userInfo.email }}</a>
            </p>
            <p class="item" v-if="userInfo.blog">
              <i class="iconfont icon-link"></i>
              <a class="text link" target="_blank" :href="userInfo.blog">{{ userInfo.blog }}</a>
            </p>
            <span class="item" v-if="userInfo.location">
              <i class="iconfont icon-location"></i>
              <span class="text">{{ userInfo.location }}</span>
            </span>
          </div>
        </transition>
      </aside>
      <main class="detail">
        <h3>Homepages & examples</h3>
        <p class="sub-title">Homepages and demos for GitHub repositories.</p>
        <transition name="module" mode="out-in">
        <p v-if="!inited">Loading...</p>
        <ul v-else class="homepage-repo-list">
          <li class="item" :key="repo.clone_url" v-for="repo in exampleRepositories">
            <i class="iconfont icon-link"></i>
            <a class="name" target="_blacnk" :href="repo.homepage">{{ repo.name }}</a>
            <span class="archived" v-if="repo.archived">Archived</span>
          </li>
        </ul>
        </transition>
        <hr>
        <transition name="module">
        <div class="index-mammon" v-if="enableAd">
          <mammon :provider="adProvider" />
        </div>
        </transition>
        <h3>My Projects</h3>
        <p class="sub-title">GitHub repositories that I've built.</p>
        <transition name="module" mode="out-in">
          <p v-if="!inited">Loading...</p>
          <ul v-else class="detail-repo-list">
            <li class="item" :key="repo.clone_url" v-for="repo in repositories">
              <p>
                <i class="iconfont icon-repo"></i>
                <a class="name" target="_blacnk" :href="repo.html_url">{{ repo.full_name }}</a>
                <span class="archived" v-if="repo.archived">Archived</span>
              </p>
              <p class="desc">{{ repo.description }}</p>
              <p class="meta">
                <span class="item">
                  <i class="iconfont icon-star"></i>
                  <span>{{ repo.stargazers_count }}</span>
                </span>
                <span class="item">
                  <i class="iconfont icon-fork"></i>
                  <span>{{ repo.forks_count }}</span>
                </span>
                <span class="item">
                  <i class="iconfont icon-watch"></i>
                  <span>{{ repo.watchers_count }}</span>
                </span>
                <span class="item license" v-if="repo.license">
                  <i class="iconfont icon-law"></i>
                  <span>{{ repo.license.name }}</span>
                </span>
                <span class="item language" v-if="repo.language">
                  <i class="iconfont icon-code"></i>
                  <span>{{ repo.language }}</span>
                </span>
              </p>
            </li>
          </ul>
        </transition>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import { createComponent, ref, computed, watch } from '@vue/composition-api'
  import { StoreNames, RootState } from '@/store'
  import { isBrowser } from '@/environment'
  import CONFIG from '@/config'
  import GithubButtonBase from '@/components/github-button/base.vue'
  import Mammon, { MammonProvider } from '@/components/mammon/index.vue'

  export default createComponent({
    name: 'index',
    components: {
      Mammon,
      GithubButtonBase
    },
    setup(_, { root }) {
      const rootGetters = root.$store.getters
      const rootState = root.$store.state as RootState
      const enableAd = ref(false)
      const inited = computed(() => rootState.inited)
      const userInfo = computed(() => rootState.userInfo)
      const repositories = computed(() => rootGetters[StoreNames.OwnRepositories])
      const exampleRepositories = computed(() => {
        return repositories.value.filter(
          (repo: $TODO) => !!repo.homepage && repo.homepage !== CONFIG.PROJECT_URL
        )
      })

      // China user -> random Aliyun (40%) / ADSense (60%)
      // Other user -> ADSense
      const isMobileDevice = computed(() => rootState.isMobileDevice)
      const isChinaGuest = computed(() => rootState.isChinaGuest)
      const adProvider = (!isChinaGuest.value || isMobileDevice.value)
        ? MammonProvider.GoogleAdSense1
        : ((Math.ceil(Math.random() * 10) > 6)
            ? MammonProvider.Aliyun
            : MammonProvider.GoogleAdSense1
          )

      watch(
        () => inited,
        inited => {
          inited && isBrowser && window.setTimeout(() => {
            enableAd.value = true
          }, 666)
        }
      )

      return {
        inited,
        userInfo,
        repositories,
        exampleRepositories,
        enableAd,
        adProvider,
        githubUID: CONFIG.GITHUB_UID,
        githubFollowersUrl: CONFIG.GITHUB_FOLLOWERS_URL,
        githubSponsorsUrl: CONFIG.GITHUB_SPONSORS_URL
      }
    }
  })
</script>

<style lang="scss" scoped>
  .index-page {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size-large;

    .container {
      height: 90%;
      overflow: hidden;
      background-color: $module-bg;
      display: flex;

      .aside {
        width: 24%;
        height: 100%;
        background-color: $github-secondary;
        color: $text-reverse;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;

        * {
          user-select: none;
        }

        .gravatar {
          padding: 2rem 1rem;
          text-align: center;
          background-color: $github-primary;

          .image {
            $size: 110px;
            border-radius: 100%;
            border: 3px solid $text-reverse;
            width: $size;
            height: $size;
            transition: transform $transition-time-slow;

            &:hover {
              transform: rotate(360deg);
            }
          }

          .sponsor {
            margin-top: 2rem;
            margin-bottom: 0;
          }
        }

        .profile {
          padding: $gap $lg-gap;

          .item {
            margin-top: 0;
            margin-bottom: $gap;

            .text {
              color: $text-reverse;

              &.link {
                text-decoration: unset;

                &:hover {
                  text-decoration: underline;
                }
              }
            }

            .iconfont {
              font-size: $iconfont-size;
              margin-right: $xs-gap;
            }
          }
        }
      }

      .index-mammon {
        margin: $gap 0;
        background-color: $module-bg-darken;
      }

      .detail {
        flex-grow: 1;
        padding: 1rem 2rem;
        overflow-y: auto;
        overflow-x: hidden;
        background: $module-bg;
        border-left: none;

        .sub-title {
          color: $text-secondary;
        }

        hr {
          height: 1px;
          border: 0;
          margin-top: 2rem;
          background-color: $text-secondary;
        }

        .homepage-repo-list,
        .detail-repo-list {
          .archived {
            margin-left: 2px;
            padding: 1px ($xs-gap / 2);
            border: 1px solid rgba($text-secondary, $golden-ratio);
            border-radius: $radius * 2;
            color: $text-secondary;
            font-size: $font-size-small;
          }
        }

        .homepage-repo-list {
          list-style-type: square;

          .iconfont {
            margin-right: $xs-gap;
          }

          > .item {
            margin-top: $gap * 2;
            &:not(:first-child) {
              margin-top: $lg-gap;
            }

            .name {
              color: $link-color;
            }
          }
        }

        .detail-repo-list {
          list-style-type: square;
          margin-bottom: $gap * 2;

          > .item {
            margin-top: $gap * 2;

            .name {
              font-weight: bold;
            }

            .desc,
            .meta {
              color: $text-secondary;
            }

            .meta {
              font-size: $font-size-small;
              .iconfont {
                font-size: $font-size-base;
              }

              .item {
                margin-right: $gap;

                &.language {
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;

                  .iconfont {
                    margin-right: $xs-gap / 2;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


  @media screen and (max-width: $container-width), screen and (max-height: 600px) {
    .index-page {
      position: relative;
      height: auto;

      .container {
        width: 100%;
        height: auto;
        flex-direction: column;

        .aside {
          width: 100%;
          height: auto;
        }

        .detail {
          overflow: hidden;
        }
      }
    }
  }
</style>

<template>
  <div class="index-page">
    <div class="container">
      <aside class="aside">
        <div class="gravatar" v-if="userInfo">
          <img class="image" :draggable="false" :src="userInfo.avatar_url">
          <h2>{{ userInfo.name || '-' }}</h2>
          <p>{{ userInfo.bio || '-' }}</p>
          <client-only>
            <p class="sponsor">
              <github-button
                :href="githubSponsorUrl"
                data-icon="octicon-heart"
                data-size="large"
              >Sponsor</github-button>
            </p>
          </client-only>
        </div>
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
      </aside>
      <main class="detail">
        <h3>Homepages & examples</h3>
        <p class="sub-title">Homepages and demos for GitHub repositories.</p>
        <p v-if="!inited">Loading...</p>
        <ul class="homepage-repo-list">
          <li class="item" :key="repo.clone_url" v-for="repo in exampleRepositories">
            <i class="iconfont icon-link"></i>
            <a class="name" target="_blacnk" :href="repo.homepage">{{ repo.name }}</a>
          </li>
        </ul>
        <hr>
        <adsense-responsive-ad-1 v-if="enableAd" />
        <h3>My Projects</h3>
        <p class="sub-title">GitHub repositories that I've built.</p>
        <p v-if="!inited">Loading...</p>
        <ul class="detail-repo-list">
          <li class="item" :key="repo.clone_url" v-for="repo in repositories">
            <i class="iconfont icon-repo"></i>
            <a class="name" target="_blacnk" :href="repo.html_url">{{ repo.full_name }}</a>
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
              <span class="item language" v-if="repo.language">
                <i class="iconfont icon-code"></i>
                <span>{{ repo.language }}</span>
              </span>
            </p>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import { createComponent, ref, computed, watch } from '@vue/composition-api'
  import { StoreNames, RootState } from '@/store'
  import { isBrowser } from '@/environment'
  import CONFIG from '@/config'

  export default createComponent({
    name: 'index',
    setup(_, { root }) {
      const rootGetters = root.$store.getters
      const rootState = root.$store.state as RootState
      const enableAd = ref(false)
      const inited = computed(() => rootState.inited)
      const userInfo = computed(() => rootState.userInfo)
      const repositories = computed(() => rootGetters[StoreNames.OwnRepositories])
      const exampleRepositories = computed(
        () => repositories.value.filter((repo: $TODO) => !!repo.homepage)
      )

      const datas = {
        inited,
        userInfo,
        repositories,
        exampleRepositories,
        enableAd,
        githubUID: CONFIG.GITHUB_UID,
        githubSponsorUrl: CONFIG.GITHUB_SPONSOR_URL
      }

      watch(
        () => inited,
        inited => {
          inited && isBrowser && window.setTimeout(() => {
            enableAd.value = true
          }, 666)
        }
      )

      return datas
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
        color: $white;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;

        * {
          user-select: none;
        }

        .gravatar {
          padding: 2rem 1rem;
          padding-bottom: 1.5rem;
          text-align: center;
          background-color: $github-primary;

          .image {
            $size: 110px;
            border-radius: 100%;
            border: 3px solid $white;
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
          padding: 1rem 1.5rem;

          .item {
            margin-top: 0;
            margin-bottom: 1rem;

            .text {
              color: $white;

              &.link {
                text-decoration: unset;

                &:hover {
                  text-decoration: underline;
                }
              }
            }

            .iconfont {
              font-size: $iconfont-size;
              margin-right: 0.5rem;
            }
          }
        }
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
          background-color: #8e8e8e;
        }

        .homepage-repo-list {
          list-style-type: square;

          .iconfont {
            margin-right: $xs-gap;
            color: $text-secondary;
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

            .iconfont {
              margin-right: $xs-gap / 2;
            }

            .desc,
            .meta {
              color: $text-secondary;
            }

            .meta {
              font-size: $font-size-base;
              .iconfont {
                font-size: $font-size-base;
              }

              .item {
                margin-right: 1rem;

                &.language {
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  padding: 0 $xs-gap;

                  .iconfont {
                    margin-right: $xs-gap;
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

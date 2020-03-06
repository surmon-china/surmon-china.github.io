<template>
  <div class="home-page">
    <header class="header" v-if="false">
      <div class="container">
        <a class="author" target="_blank" :href="githubUrl">
          <span class="project-name">{{ githubUID }}</span>
        </a>
      </div>
    </header>
    <main class="main">
      <div class="banner">
        <h1 class="title"><span>{{ name }}</span></h1>
        <h4 class="subtitle">{{ description }}</h4>
        <div class="repositories">
          <!-- TODO: dropdown -->
          <select class="list" :value="currentRepositorie">
            <option
              class="item"
              :key="item.name"
              v-for="item in repositories"
              v-text="'  ' + item.name + '   '"
            />
          </select>
        </div>
        <client-only>
          <div class="github-buttons">
            <span class="item">
              <github-button
                :href="repoUrl"
                data-size="large"
                data-show-count="true"
              >
                Star
              </github-button>
            </span>
            <span class="item">
              <github-button
                :href="`${repoUrl}/issues`"
                data-size="large"
                data-icon="octicon-issue-opened"
                data-show-count="true"
              >
                Issue
              </github-button>
            </span>
            <span class="item" v-if="false">
              <github-button
                :href="`${repoUrl}/fork`"
                data-size="large"
                data-icon="octicon-repo-forked"
                data-show-count="true"
              >
                Fork
              </github-button>
            </span>
            <span class="item">
              <github-button
                :href="`${repoUrl}/subscription`"
                data-size="large"
                data-show-count="true"
                data-icon="octicon-eye"
              >
                Watch
              </github-button>
            </span>
            <span class="item">
              <github-button
                :href="`${repoUrl}/archive/master.zip`"
                data-size="large"
                data-icon="octicon-cloud-download"
                data-show-count="true"
              >
                Download
              </github-button>
            </span>
          </div>
        </client-only>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
      <div class="container">
        <homepage-mammon-card v-if="!disabledAd" />
        <slot name="content"></slot>
        <homepage-mammon-card v-if="!disabledAd" />
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <span class="footer-content">
          <a :href="repoUrl" target="_blank">{{ name }}</a>
          <span> is maintained by </span>
          <a :href="githubUrl" target="_blank">{{ githubUID }}</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import { PropType, createComponent, ref, computed, onMounted } from '@vue/composition-api'
  import { Route } from 'vue-router'
  import { StoreNames, RootState } from '@/store'
  import { IVueComponentData } from '@/types/interfaces'
  import { getRepositorieUrl } from '@/transformers/url'
  import HomepageMammonCard from './card-mammon.vue'
  import HomepageModal from './modal.vue'
  import CONFIG from '@/config'

  export default createComponent({
    name: 'homepage',
    components: {
      HomepageModal,
      HomepageMammonCard
    },
    props: {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      repoId: {
        type: String,
        required: true
      },
      disabledAd: Boolean
    },
    setup(props, { root }) {
      const datas: IVueComponentData = {
        currentRepositorie: root.$route.name,
        githubUID: CONFIG.GITHUB_UID,
        githubUrl: CONFIG.GITHUB_HOMEPAGE_URL,
        repoUrl: computed(() => getRepositorieUrl(CONFIG.GITHUB_UID, props.repoId)),
        repositories: computed(() => root.$store.getters[StoreNames.AppRepositories])
      }

      return datas
    }
  })
</script>

<style lang="scss" scoped>
  .home-page {
    border-top: 4px solid $github-primary;

    .header {
      background-color: $github-primary;
    }

    .main {
      padding: 0;
      overflow: hidden;

      > .banner {
        height: 25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        color: $body-bg;
        background-color: $github-secondary;

        > .title {
          font-size: 3rem;
          font-weight: bold;
        }

        > .subtitle {
          margin-top: 0;
          margin-bottom: 2rem;
          font-size: $font-size-huge;
          font-weight: normal;
        }

        > .repositories {
          margin-bottom: 3rem;

          .list {
            border: none;
            display: block;
            height: $lg-gap * 2;
            background-color: rgba($github-primary, 0.6);
            color: rgba($body-bg, 0.6);
            text-indent: 1px;
            transition: color, background-color $transition-time-fast;

            &:hover {
              background-color: $github-primary;
              color: $body-bg;
            }
          }
        }

        .github-buttons {
          .item:not(:first-child) {
            margin-left: $sm-gap;
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
          background-color: $white;
          width: 100%;
          height: auto;
          min-height: 40px;
          margin: 20px 0;
        }
      }
    }

    > .footer {
      height: 4rem;
      line-height: 4rem;
      background-color: $github-secondary;

      .container {
        color: $body-bg;
        text-align: center;
        text-transform: uppercase;

        a {
          color: $body-bg;
        }
      }
    }
  }
</style>

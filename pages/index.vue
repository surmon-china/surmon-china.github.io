<template>
  <div class="home-page">
    <div class="container">
      <aside class="aside">
        <div class="gravatar">
          <el-avatar class="image" :size="120">
            <img class="image" :draggable="false" :src="userInfo.avatar_url">
          </el-avatar>
          <h2>{{ userInfo.name || '-' }}</h2>
          <p>{{ userInfo.bio || '-' }}</p>
          <client-only>
            <github-button
              :href="`https://github.com/sponsors/${uid}`"
              :aria-label="`Sponsor @${uid} on GitHub`"
              data-icon="octicon-heart"
              data-size="large"
            >
              Sponsor
            </github-button>
          </client-only>
        </div>
        <div class="profile">
          <a class="item" target="_blank" v-if="userInfo.html_url" :href="userInfo.html_url">
            <svg height="20" class="icon octicon-mark-github v-align-middle" fill="#fff" aria-label="GitHub" viewBox="0 0 16 16" version="1.1" width="20" role="img"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            <span class="text">@{{ userInfo.login }}</span>
          </a>
          <a class="item" target="_blank" v-if="userInfo.email" :href="'mailto://' + userInfo.email">
            <svg height="20" class="icon octicon-mail v-align-middle" fill="#fff" aria-label="email" viewBox="0 0 14 16" version="1.1" width="17" role="img"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
            <span class="text">{{ userInfo.email }}</span>
          </a>
          <a class="item" target="_blank" v-if="userInfo.blog" :href="userInfo.blog">
            <svg height="20" class="icon octicon-link v-align-middle" fill="#fff" aria-label="Website" viewBox="0 0 16 16" version="1.1" width="20" role="img"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
            <span class="text">{{ userInfo.blog }}</span>
          </a>
          <span class="item" v-if="userInfo.location">
            <svg height="20" class="icon octicon-location v-align-middle" fill="#fff" aria-label="Location" viewBox="0 0 12 16" version="1.1" width="15" role="img"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
            <span class="text">{{ userInfo.location }}</span>
          </span>
        </div>
      </aside>
      <main class="detail">
        <h3>Homepages & examples</h3>
        <ul class="repo-list example">
          <li class="item" :key="repo.clone_url" v-for="repo in exampleRepos">
            <a class="name" target="_blacnk" :href="repo.homepage">
              <svg height="20" class="icon octicon-link v-align-middle" fill="#586069" aria-label="Website" viewBox="0 0 16 16" version="1.1" width="20" role="img"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
              <span>{{ repo.name }}</span>
            </a>
          </li>
        </ul>
        <hr>
        <adsense-responsive-1 v-if="enableAd" />
        <h3>My Projects</h3>
        <p>GitHub repositories that I've built.</p>
        <ul class="repo-list">
          <li class="item" :key="repo.clone_url" v-for="repo in repos">
            <a class="name" target="_blacnk" :href="repo.html_url">
              <svg height="20" class="icon octicon-repo v-align-middle" fill="#586069" aria-label="repo" viewBox="0 0 12 16" version="1.1" width="15" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
              <span>{{ repo.full_name }}</span>
            </a>
            <p class="desc">{{ repo.description }}</p>
            <p class="meta">
              <span class="item">
                <svg class="icon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                <span>{{ repo.stargazers_count }}</span>
              </span>
              <span class="item">
                <svg class="icon octicon-git-branch" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                <span>{{ repo.forks_count }}</span>
              </span>
            </p>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
  import * as api from '~/services/api'
  export default {
    name: 'index',
    data() {
      return {
        userInfo: {},
        repos: [],
        enableAd: false
      }
    },
    computed: {
      uid() {
        return this.$store.state.github_uid
      },
      exampleRepos() {
        return this.repos.filter(repo => !!repo.homepage)
      }
    },
    methods: {
      getData() {
        api.getUserInfo(this.uid).then(data => {
          this.userInfo = data
        })
        api.getRepos(this.uid).then(data => {
          this.repos = data
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
          this.$nextTick(() => {
            this.enableAd = true
          })
        })
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>

<style lang="scss">
  ::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;
    background: $white;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: $github-secondary;
    transition: background-color .15s;

    &:hover {
      background-color: $github-primary;
    }
  }

  .home-page {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $body-bg;

    .container {
      height: 90%;
      width: 60rem;
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
          padding: 1rem;
          padding-top: 2rem;
          text-align: center;
          background-color: $github-primary;

          .image {
            border: 3px solid $white;
          }
        }

        .profile {
          padding: 1rem;

          .item {
            display: block;
            margin-bottom: 1rem;
            color: $white;

            &[href] {
              text-decoration: unset;

              &:hover {
                text-decoration: underline;
              }
            }

            .icon {
              height: 18px;
              margin-right: 0.5rem;
            }
          }
        }
      }

      .detail {
        flex-grow: 1;
        padding: 2rem;
        overflow-y: auto;
        overflow-x: hidden;
        background: $module-bg;

        hr {
          height: 1px;
          border: 0;
          margin-top: 2rem;
          background-color: #8e8e8e;
        }

        .repo-list {
          list-style-type: square;

          &.example {
            > .item {
              margin-top: 1rem;
            }
          }

          .icon {
            height: 16px;
            margin-right: 0.5rem;
          }

          > .item {
            margin-top: 2rem;

            .name {
              color: $link-color;
            }

            .desc,
            .meta {
              font-size: 14px;
              color: $text-color;
            }

            .meta {
              
              .item {
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
  }


  @media screen and (max-width: 1000px), screen and (max-height: 600px) {
    .home-page {
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

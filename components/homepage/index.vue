<template>
  <el-container class="home-page">
    <el-header class="header" v-if="false">
      <div class="container">
        <a class="author" target="_blank" href="https://github.com/surmon-china">
          <span class="project-name">surmon-china</span>
        </a>
      </div>
    </el-header>
    <el-main class="main">
      <div class="banner">
        <h1 class="title">{{ name }}</h1>
        <h4 class="subtitle">{{ desc }}</h4>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </div>
      <div class="container">
        <div>广告位</div>
        <slot name="content"></slot>
        <div class="card"></div>
      </div>
    </el-main>
    <el-footer class="footer">
      <div class="container">
        <h5 class="footer-content">
          <a :href="link">{{ name }}</a>
          <span> is maintained by </span>
          <a :href="github_link">{{ github_uid }}</a>
          <span>.</span>
        </h5>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'homepage',
    props: {
      name: String,
      desc: String,
      link: String
    },
    computed: mapGetters(['github_uid', 'github_link'])
  }
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
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        color: $body-bg;
        background-color: $github-secondary;

        > .title {
          font-weight: bold;
        }

        > .subtitle {
          // color: #a5a5a5;
        }

        > .actions {
          margin-top: 3em;
          margin-bottom: 2em;
        }
      }

      > .container {
        margin: 2em auto;

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

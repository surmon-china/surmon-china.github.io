<template>
  <div id="app">
    <header class="header">
      <md-toolbar class="toolbar">
        <div class="container">
          <a class="author" target="_blank" href="https://github.com/surmon-china">
             <md-icon>code</md-icon>
            <span class="project-name">surmon-china</span>
          </a>
        </div>
      </md-toolbar>
    </header>
    <main class="main">
      <div class="banner">
        <h2 class="title">{{ name }}</h2>
        <h4 class="subtitle">{{ desc }}</h4>
        <p class="actions">
          <slot name="actions"></slot>
        </p>
      </div>
      <div class="container">
        <slot name="content"></slot>
      </div>
    </main>
    <footer class="footer">
      <h5 class="footer-content">
        <span>
          <a :href="link">{{ name }}</a>
          <span> is maintained by </span>
          <a href="https://github.com/surmon-china">surmon</a>
          <span>.</span>
        </span>
      </h5>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: {
      name: String,
      desc: String,
      link: String
    }
  }
</script>

<style lang="scss" scoped>
  $border: none;
  // $border: 1px solid rgb(232, 232, 232);

   #app {

    > .header {

      > .toolbar {
        // background-color: blue;
      }

      .author {
        color: white;
        display: inline-block;
        overflow: hidden;

        &:hover {

          > .project-name {
            text-decoration: underline;
          }
        }

        > .md-icon {
          color: white;
        }

        > .md-icon,
        > .project-name {
          float: left;
          height: 30px;
          line-height: 35px;
          display: inline-block;
        }

        > .project-name {
          font-size: 16px;
          text-transform: uppercase;
          margin-left: 10px;
          font-weight: bold;
        }
      }

      .md-title {
        // line-height: 1;
      }
    }

    > .main {
      overflow: hidden;

      > .banner {
        overflow: hidden;
        text-align: center;
        background-color: var(--md-theme-github-background, #fff);
        border-bottom: $border;

        > .title {
          height: 1em;
          line-height: 1em;
          font-weight: bold;
          // text-transform: uppercase;
        }

        > .subtitle {
          font-size: 1.8em;
          // text-transform: uppercase;
          color: #a5a5a5;
          margin: 1em 0;
          font-weight: 200;
        }

        > .actions {
          margin-top: 3em;
          margin-bottom: 2em;
        }
      }

      > .container {
        margin: 2em auto;
      }
    }

    > .footer {
      border-top: $border;
      background-color: var(--md-theme-github-background, #fff);

      > .footer-content {
        font-size: 1.1em;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
</style>

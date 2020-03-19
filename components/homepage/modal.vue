<template>
  <transition name="module">
    <div class="homepage-modal" v-if="visible">
      <div class="modal">
        <p class="title">
          <a :href="fileUrl" class="link" target="_blank">
            <span>{{ title }} ({{ path }})</span>
            <i class="iconfont icon-link-external"></i>
          </a>
          <button class="close" @click="close">
            <i class="iconfont icon-close"></i>
          </button>
        </p>
        <div class="content">
          <transition name="module" mode="out-in">
            <Loading class="loading" v-if="isLoading" />
            <p v-else-if="!code">No data</p>
            <pre v-else class="code">
              <code :data-lang="fileExt" v-html="code" contenteditable></code>
            </pre>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  import Hljs from '@/plugins/highlight'
  import Loading from './loading.vue'
  import { useModalStore } from './modal-store'

  export default createComponent({
    name: 'homepage-modal',
    components: {
      Loading
    },
    setup(props, { root }) {
      const modal = useModalStore()
      const code = computed(() => {
        const content = modal.content?.value
        return content && '\n' + Hljs.highlightAuto(content).value
      })
      return {
        ...modal,
        code
      }
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-modal {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($github-secondary, 0.8);
    backdrop-filter: blur(5px);

    .modal {
      min-width: 50vw;
      max-width: 70vw;

      .title {
        display: flex;
        justify-content: space-between;
        padding: 0 $gap;
        margin: 0;
        height: 3rem;
        line-height: 3rem;
        background-color: $module-bg-darken;
        border-bottom: 1px solid $body-bg;

        .link {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }

          .iconfont {
            font-size: $font-size-small;
          }
        }

        .close {
          border: none;
          padding: 0;
          background: none;
          width: 2rem;
          cursor: pointer;

          &:hover {
            color: $link-color;
          }
        }
      }

      .content {
        padding: 0 1rem;
        max-height: 70vh;
        overflow-y: auto;
        background-color: $module-bg;

        .loading {
          height: 10rem;
        }

        .code {
          margin: 0;
          line-height: 20px;
          font-size: 13px;
          cursor: text;
        }
      }
    }
  }
</style>


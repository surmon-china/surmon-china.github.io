<template>
  <teleport to="body">
    <transition name="module">
      <div class="modal" v-if="visible">
        <div class="wrapper">
          <p class="title">
            <a :href="titleUrl" class="link" target="_blank">
              <span>{{ title }}</span>
              <i class="iconfont icon-link-external"></i>
            </a>
            <button class="close" @click="$emit('close')">
              <i class="iconfont icon-close"></i>
            </button>
          </p>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'modal',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        required: true
      },
      titleUrl: {
        type: String,
        required: true
      }
    },
    emits: ['close']
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .modal {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    background-color: rgb(47 47 47 / 40%);

    .wrapper {
      width: 60em;
      max-width: 68vw;
      border-radius: $sm-radius;
      overflow: hidden;

      .title {
        display: flex;
        justify-content: space-between;
        padding: 0 $gap;
        margin: 0;
        height: 3rem;
        line-height: 3rem;
        border-bottom: 1px solid $border-color;
        background-color: $header-bg;

        .link {
          color: $text-color;
          text-decoration: none;
          &:hover {
            color: $link-color;
            text-decoration: underline;
          }

          .iconfont {
            font-size: $font-size-small;
            margin-left: $xs-gap;
          }
        }

        .close {
          border: none;
          padding: 0;
          background: none;
          width: 2rem;
          cursor: pointer;
          color: $text-color;
          &:hover {
            color: $link-color;
          }
        }
      }

      .content {
        padding: 0;
        min-height: 10rem;
        max-height: 70vh;
        overflow-y: auto;
        background-color: $banner-bg;

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

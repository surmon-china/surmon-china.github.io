<template>
  <div class="homepage-example-card">
    <homepage-basic-card :title="title" :titleLink="fileUrl">
      <div slot="actions">
        <slot name="actions"></slot>
        <button
          v-if="path"
          class="code-button"
          @click="handleViewCode"
        >
          <i class="iconfont icon-code" />
        </button>
      </div>
      <slot></slot>
    </homepage-basic-card>
  </div>
</template>

<script lang="ts">
  import CONFIG from '@/config'
  import { createComponent } from '@vue/composition-api'
  import { getGitFileSourceUrl } from '@/transformers/url'
  import HomepageBasicCard from './card-basic.vue'
  import { useModalStore } from './modal-store'
  export default createComponent({
    name: 'homepage-example-card',
    props: {
      title: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: false
      }
    },
    components: {
      HomepageBasicCard
    },
    setup(props) {
      const modalStore = useModalStore()

      return {
        fileUrl: props.path && getGitFileSourceUrl(
          CONFIG.GITHUB_UID,
          CONFIG.PROJECT_NAME,
          props.path
        ),
        handleViewCode() {
          props.path && modalStore.open(props.title, props.path)
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-example-card {
    .code-button {
      border: none;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        color: $link-color;
      }
    }
  }
</style>

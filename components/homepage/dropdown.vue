<template>
  <div class="homepage-modal">
    <div class="modal">
      <p class="title">{{ title }}</p>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // TODO: 完善弹窗效果
  import { createComponent, computed } from '@vue/composition-api'
  export default createComponent({
    name: 'homepage-modal',
    props: {
      visible: Boolean,
      title: String
    },
    setup(props, { root }) {
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-modal {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($github-secondary, 0.6);

    .modal {
      max-height: 70vh;
      overflow-y: auto;

      .title {
        padding: 1rem;
        margin: 0;
        background-color: $module-bg;
      }

      .content {
        padding: 1rem;
        background-color: $module-bg-darken;
      }
    }
  }
</style>


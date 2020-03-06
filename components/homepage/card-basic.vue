<template>
  <div class="homepage-card">
    <div slot="header" class="header" v-if="!!title">
      <span>{{ title }}</span>
      <slot name="actions"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'

  export default createComponent({
    name: 'homepage-basic-card',
    props: {
      title: String
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-card {
    margin-top: 2rem;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 3px;
    background-color: $module-bg;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 3.6rem;
      // border-bottom: 1px solid #e2e2e2;
      // background-color: $border-color;
      // background-color: $module-bg;
      padding: 0 1.6rem;
    }

    .content {
      background-color: $module-bg-darken;
      overflow: hidden;
    }
  }
</style>

<template>
  <div class="homepage-example-card">
    <homepage-basic-card :title="title">
      <div slot="actions">
        <slot name="actions"></slot>
        <button
          size="mini"
          icon="iconfont icon-code"
          @click="handleClick"
        >
          <i class="iconfont icon-code" />
        </button>
      </div>
      <slot></slot>
    </homepage-basic-card>
  </div>
</template>

<script>
  import HomepageBasicCard from './card-basic.vue'
  export default {
    name: 'homepage-example-card',
    props: {
      title: String,
      path: String
    },
    components: {
      HomepageBasicCard
    },
    computed: {
      file() {
      }
    },
    methods: {
      handleClick() {
        console.log('t', props.path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .homepage-example-card {
  }
</style>

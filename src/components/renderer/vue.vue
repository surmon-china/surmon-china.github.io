<script lang="ts" setup>
  import LayoutNavbar from '@/components/layout/navbar.vue'
  import LayoutFootbar from '@/components/layout/footbar.vue'
  import LayoutToolbox from '@/components/layout/toolbox.vue'
  import LayoutShare from '@/components/layout/share.vue'

  interface Props {
    repository: string
    toolbox?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    toolbox: true
  })

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<template>
  <div class="vue-renderer">
    <layout-navbar class="navbar" :repository="repository" />
    <layout-share :repository="repository" />
    <layout-toolbox v-if="toolbox" class="toolbox" :repository="repository" @toTop="handleToTop" />
    <slot></slot>
    <layout-footbar class="footbar" :repository="repository" />
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .vue-renderer {
    .navbar {
      position: sticky;
      top: 0;
    }
  }
</style>

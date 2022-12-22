<template>
  <div class="vue-renderer">
    <navbar class="header" :repository="repository" />
    <div class="content" ref="content">
      <share :repository="repository" />
      <slot></slot>
      <toolbox
        v-if="toolbox"
        class="toolbox"
        :repository="repository"
        @toTop="handleToTop"
      />
      <footbar class="footbar" :repository="repository" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Navbar from '@/components/layout/navbar.vue'
  import Footbar from '@/components/layout/footbar.vue'
  import Toolbox from '@/components/layout/toolbox.vue'
  import Share from '@/components/layout/share.vue'

  export default defineComponent({
    name: 'vue-renderer',
    components: { Navbar, Footbar, Toolbox, Share },
    props: {
      repository: {
        type: String,
        required: true
      },
      toolbox: {
        type: Boolean,
        default: true
      }
    },
    setup() {
      const content = ref<HTMLElement>()
      const handleToTop = () => {
        content.value?.scrollTo({ top: 0, behavior: 'smooth' })
      }

      return { content, handleToTop }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

  .vue-renderer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .content {
      flex: 1;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }
  }
</style>

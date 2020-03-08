<template>
  <div class="homepage-link">
    <a class="link" target="_blank" :href="href">
      <i :class="iconPath" />
      <span>{{ text }}</span>
    </a>
  </div>
</template>

<script lang="ts">
  import { createComponent, computed } from '@vue/composition-api'
  export default createComponent({
    name: 'homepage-link',
    props: {
      text: String,
      href: String,
      icon: String,
    },
    setup(props, { root }) {
      const iconPath = computed(() => props.icon && `iconfont icon-${props.icon}`)
      return { iconPath }
    }
  })
</script>

<style lang="scss" scoped>
  .homepage-link {
    margin: 0 1rem;

    .link {
      $color: $text-reverse;
      color: $color;
      text-decoration: none;
      position: relative;
      opacity: 0.6;

      &:hover {
        opacity: 1;

        &::after {
          border-color: $color;
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid transparent;
      }
    }
  }
</style>

<template>
  <div class="homepage-link">
    <ulink class="link" :href="href">
      <i class="iconfont" :class="`icon-${icon}`" />
      <slot>
        <span>{{ text }}</span>
      </slot>
    </ulink>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'homepage-link',
    props: {
      text: String,
      href: String,
      icon: String
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/init.scss';

  .homepage-link {
    margin: 0 1em;

    .link {
      $color: $text-secondary;
      color: $color;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      &:hover {
        color: $text-color;
        border-color: $text-color;
      }

      .iconfont {
        font-size: $font-size-base - 1;
        margin-right: 2px;
      }
    }
  }

  @media screen and (max-width: $container-width) {
    .homepage-link {
      margin-bottom: $gap;
    }
  }
</style>

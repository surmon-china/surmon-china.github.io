<template>
  <a
    :href="url"
    class="badge version"
    target="_blank"
  >
    <img
      class="image"
      alt="package version"
      :src="`https://img.shields.io/npm/v/${name}?style=${size}`"
    >
  </a>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { getNPMUrl } from '@/transformers/url'
  import { BadgeStyle } from './constants'

  export default createComponent({
    name: 'badge-npm-version',
    props: {
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: BadgeStyle.Normal
      },
      label: {
        type: String
      },
      color: {
        type: String
      }
    },
    setup(props) {
      return {
        url: getNPMUrl(props.name)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .badge {
    .image {
      display: block;
      height: 20px;
    }
  }
</style>

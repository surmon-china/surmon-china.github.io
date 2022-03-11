<template>
  <a
    :href="url"
    class="badge last-commit"
    target="_blank"
  >
    <img class="image" alt="last-commit" :src="image">
  </a>
</template>

<script lang="ts">
  import { createComponent } from '@vue/composition-api'
  import { getRepositorieUrl } from '@/transformers/url'
  import { BadgeStyle } from './constants'
  import { GITHUB_UID } from '@/config'

  export default createComponent({
    name: 'npm-last-commit',
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
        image: `https://img.shields.io/github/last-commit/${GITHUB_UID}/${props.name}?style=${props.size}`,
        url: getRepositorieUrl(GITHUB_UID, props.name)
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

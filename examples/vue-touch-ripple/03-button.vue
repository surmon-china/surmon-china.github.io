<template>
  <div class="example">
    <touch-ripple :duration="200">
      <button class="button b-1">duration = 200</button>
    </touch-ripple>
    <touch-ripple color="#3d8b16" :duration="600">
      <button class="button b-2">duration = 600; color = #3d8b16</button>
    </touch-ripple>
    <touch-ripple>
      <button class="button b-3">Warning button</button>
    </touch-ripple>
    <touch-ripple>
      <button class="button b-4">Danger button</button>
    </touch-ripple>
    <touch-ripple color="#303133">
      <button class="button b-5">color = #303133</button>
    </touch-ripple>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { TouchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/style.css'

  export default defineComponent({
    name: 'touch-ripper-example-button-element',
    title: 'Button element',
    url: import.meta.url,
    components: {
      TouchRipple
    }
  })
</script>

<style lang="scss" scoped>
  .example {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .button {
      width: auto;
      height: 3em;
      line-height: 3em;
      border: none;
      border-radius: 4px;
      padding: 0 1rem;
      color: white;
      cursor: pointer;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(1.1);
      }

      &.b-1 {
        background-color: #409eff;
      }
      &.b-2 {
        background-color: #67c23a;
      }
      &.b-3 {
        background-color: #e6a23c;
      }
      &.b-4 {
        background-color: #f56c6c;
      }
      &.b-5 {
        background-color: #909399;
      }
    }
  }
</style>

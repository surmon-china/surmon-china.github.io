<template>
  <drag-zone class="zone">
    <drag-content class="content c1">
      <div class="item i1">min 100px && max 30rem</div>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c2">
      <div class="item i2">item 2</div>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c3">
      <div class="item i3">item 3</div>
    </drag-content>
    <drag-content class="content c4">
      <div class="item i4">min 50px</div>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c5">
      <div class="item i5">min 10em</div>
    </drag-content>
  </drag-zone>
</template>

<script>
  export default {
    name: 'horizontal-size-example',
    title: 'Horizontal MinWidth and MaxWidth'
  }
</script>

<style scoped>
  .zone {
    width: 100%;
    height: 180px;
    line-height: 180px;
    margin: 0 auto;
    position: relative;
    clear: both;
    text-align: center;
    color: white;
    background: #eee;
    display: flex;
    justify-content: space-between;
  }
  .zone .handle {
    width: 10px;
    height: 180px;
    background: #2196f3;
  }
  .zone .item {
    width: 100%;
    user-select: none;
  }
  .zone .content {
    width: calc((100% - 30px) / 4);
    height: 180px;
    overflow: hidden;
  }
  .zone .content.c1 {
    min-width: 100px;
    max-width: 30rem;
    background: #999;
  }
  .zone .content.c2 {
    background: #777;
  }
  .zone .content.c3 {
    background: #555;
  }
  .zone .content.c4 {
    min-width: 50px;
    background: #333;
  }
  .zone .content.c5 {
    min-width: 10em;
    background: #000;
  }
</style>

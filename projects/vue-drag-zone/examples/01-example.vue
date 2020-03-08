<template>
  <drag-zone class="zone">
    <drag-content class="content c1">
      <div class="item i1">item 1</div>
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
      <div class="item i4">item 4</div>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c5">
      <div class="item i5">item 5</div>
    </drag-content>
  </drag-zone>
</template>

<script>
  export default {
    name: 'default-example',
    title: 'Default'
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
  .zone .content {
    width: calc((100% - 30px) / 4);
    height: 180px;
    overflow: hidden;
  }
  .zone .item {
    width: 100%;
    user-select: none;
  }
  .zone .item.i1 {
    background: #999;
  }
  .zone .item.i2 {
    background: #777;
  }
  .zone .item.i3 {
    background: #555;
  }
  .zone .item.i4 {
    background: #333;
  }
  .zone .item.i5 {
    background: #000;
  }
</style>

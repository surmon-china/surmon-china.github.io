<template>
  <drag-zone class="vertical-zone" :options="{ direction: 'vertical' }">
    <drag-content class="content c1">
      <div class="item i1">item 1</div>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c2">
      <div class="item i2">item 2</div>
    </drag-content>
    <drag-content class="content c3">
      <div class="item i3">item 3</div>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c4">
      <drag-zone class="horizontal-zone">
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
          <div class="item i5">item 5</div>
        </drag-content>
      </drag-zone>
    </drag-content>
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c5">
      <div class="item i5">item 5</div>
    </drag-content>
  </drag-zone>
</template>

<script>
  export default {
    name: 'vertical-nested-example',
    title: 'Vertical Nested'
  }
</script>

<style scoped>
  .item {
    user-select: none;
  }
  .vertical-zone {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    position: relative;
    clear: both;
    text-align: center;
    color: white;
    background: #eee;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .vertical-zone > .handle {
    width: 100%;
    height: 10px;
    background: #2196f3;
  }
  .vertical-zone > .content {
    width: 100%;
    height: calc((100% - 30px) / 4);
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vertical-zone > .content.c1 {
    background: #999;
  }
  .vertical-zone > .content.c2 {
    background: #777;
  }
  .vertical-zone > .content.c3 {
    background: #555;
  }
  .vertical-zone > .content.c4 {
    background: #333;
  }
  .vertical-zone > .content.c5 {
    background: #000;
  }
  .horizontal-zone {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    clear: both;
    text-align: center;
    color: white;
    background: #eee;
    display: flex;
    justify-content: space-between;
  }
  .horizontal-zone > .handle {
    width: 10px;
    height: 100%;
    background: #2196f3;
  }
  .horizontal-zone > .content > .item {
    width: 100%;
  }
  .horizontal-zone > .content {
    width: calc((100% - 30px) / 4);
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .horizontal-zone > .content.c1 {
    min-width: 100px;
    max-width: 30rem;
    background: #999;
  }
  .horizontal-zone > .content.c2 {
    background: #777;
  }
  .horizontal-zone > .content.c3 {
    background: #555;
  }
  .horizontal-zone > .content.c4 {
    min-width: 50px;
    background: #333;
  }
  .horizontal-zone > .content.c5 {
    min-width: 10em;
    background: #000;
  }
</style>

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
    <drag-content :fixed="false" class="content c4">
      <div class="item i4">
        <span>item 4</span>
      </div>
    </drag-content>
  <!--    <drag-content class="content c5">
      <div class="item i5">item 5</div>
    </drag-content>
    <drag-content class="content c6">
      <div class="item i6">item 6</div>
    </drag-content> -->
    <drag-handle class="handle"></drag-handle>
    <drag-content class="content c7">
      <div class="item i7">item 7</div>
    </drag-content>
    <drag-content class="content c8">
      <div class="item i8">item 8</div>
    </drag-content>
  </drag-zone>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
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
    /*background: red;*/
    background: #eee;
    /*display: flex;*/
    /*justify-content: space-between;*/
  }
  .zone .content {
    float: left;
    height: 180px;
    width: calc((100% - 30px) / 6);
  }
  .zone .content.threshold {
    opacity: .4;
    background-color: red;
  }
  .zone .content.c1 {
    /*min-width: 17%;*/
    /*max-width: 28%;*/
  }
  .zone .content.c2 {
    /*min-width: 15%;*/
    /*max-width: 30%;*/
  }
  .zone .content.c3 {
    min-width: 10rem;
    max-width: 20rem;
    /*min-width: 10%;*/
    /*max-width: 20%;*/
  }
  .zone .content.c4 {
    min-width: 50px;
    max-width: 19rem;
    /*min-width: 5%;*/
    /*max-width: 19%;*/
  }
  .zone .content.c5 {
    /*min-width: 0px;*/
    /*max-width: 30%;*/
  }
  .zone .content.c7 {
    /*min-width: 10%;*/
    /*max-width: 20%;*/
  }
  .zone .content.c8 {
    /*min-width: 5%;*/
    /*max-width: 19%;*/
  }
  .zone .handle {
    width: 10px;
    height: 100%;
    float: left;
    display: inline-block;
    background: #2196f3;
  }
  .zone .item {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
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
  .zone .item.i6 {
    background: #333;
  }
  .zone .item.i7 {
    background: #555;
  }
  .zone .item.i8 {
    background: #777;
  }
</style>

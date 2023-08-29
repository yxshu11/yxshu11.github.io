<template>
  <div class='border'>
    <div id='border-left'></div>
    <div id='border-right'></div>
    <div id='border-top'></div>
    <div id='border-bottom'></div>
  </div>
</template>

<script setup lang="js"></script>

<style lang='scss' scoped>
#border-top,
#border-bottom,
#border-left,
#border-right {
  background: #000000;
  position: fixed;
  z-index: 1050;
}

#border-left,
#border-right {
  top: 0;
  bottom: 0;
  width: 10px;
}

#border-left {
  left: 0;
}

#border-right {
  right: 0;
}

#border-top,
#border-bottom {
  left: 0;
  right: 0;
  height: 10px;
}

#border-top {
  top: 0;
}

#border-bottom {
  bottom: 0;
}
</style>

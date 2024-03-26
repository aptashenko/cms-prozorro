<template>
  <div class="the-header">
    header
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.the-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #f6f6f6;
  padding: 20px 10px;
  box-shadow: 0px -5px 10px 5px rgba(0, 0, 0, 0.4);

  &::before {
    content: '';
    background: #f6f6f6;
    position: absolute;
    top: 100%;
    left: 0;
    height: 0px;
    width: 400px;
    z-index: 101;
  }
}
</style>

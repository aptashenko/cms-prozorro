<template>
  <div class="progress-wrapper">
    <div class="progress-container" />
    <div
      class="progress-bar"
      :style="{width: progress + '%'}"
    />
  </div>
</template>

<script setup>
defineProps({
  progress: {
    type: Number,
    default: 10
  }
})
</script>

<style scoped>
.progress-wrapper {
  position: relative;

  width: 100%;

  height: 10px;
}

.progress-container {
  width: 100%;
  border-radius: 30px;
  border: 1px solid #111113;

  height: 100%;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  background: #111113;
  border-radius: 30px;
  height: 100%;
}
</style>

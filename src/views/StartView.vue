<template>
  <div class="start-view">
    <div class="start-view__window">
      <screen-button
        label="Почати навчання"
        path="#"
      />
      <screen-button
        label="Почати роботу"
        path="#"
      />
    </div>
  </div>
</template>

<script setup>
import ScreenButton from "@/components/start-view/ScreenButton.vue";
</script>

<style lang="scss" scoped>
.start-view {
  display: grid;
  place-items: center;
  height: 100%;

  &__window {
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 20px;
  }
}
</style>

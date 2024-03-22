<template>
  <div class="video-section">
    <the-video class="video-section__selected" />
    <div class="video-section__carousel">
      <the-video
          v-for="i of 6"
          class="video-section__other"
      />
    </div>
  </div>
</template>
<script setup>
import TheVideo from "@/components/ui/TheVideo.vue";
</script>

<style lang="scss">
.video-section {
  width: 100%;

  &__selected {
    height: 500px;
  }

  &__carousel {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    overflow-x: scroll;
  }

  &__other {
    min-width: 250px;
    aspect-ratio: 1/1;
  }
}
</style>

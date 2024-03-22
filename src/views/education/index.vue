<template>
  <div class="education-page">
    <div class="education-page__head">
      <h2>
        Привіт, Артем
      </h2>
      <p>
        Твій прогрес у навчанні: 10%
      </p>
      <progress-bar />
    </div>
    <div class="education-page__body">
      <video-section />
    </div>
  </div>
</template>

<script setup>
import ProgressBar from "@/components/shared/ProgressBar.vue";
import VideoSection from "@/components/pages/education-page/VideoSection.vue";
</script>

<style lang="scss">
.education-page {

  &__head {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 32px;
  }

  &__body {
    width: 100%;
  }
}
</style>

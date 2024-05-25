<template>
  <div class="education-page">
    <h2 class="education-page__title">
      Оберіть модуль
    </h2>
    <div class="education-page__content">
      <router-link
        v-for="i of 8"
        :to="{name: 'lesson', params: {id: route.params.id, lesson: i}}"
        class="education-page__lesson">
        Урок {{i}}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style lang="scss">
.education-page {
  height: calc(100vh - 60px);
  padding: 40px 60px;

  &__title {
    margin-bottom: 32px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin: 0 auto;
  }

  &__lesson {
    width: 100%;
    height: 200px;
    background: gray;
    cursor: pointer;
  }
}
</style>

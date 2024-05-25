<template>
  <div class="lesson-page">
    <div class="lesson-page__content">
      <div class="lesson-page__sidebar">
        <p>
          Відео-метаріал
        </p>
        <p>
          Конспект
        </p>
        <p>
          Домашнє завдання
        </p>
      </div>
      <div class="lesson-page__body">
        <h2 class="lesson-page__title">
          Урок № {{route.params.lesson}}
        </h2>
        <p>Контент (відео, конспект, домашнє завдання)</p>
        <p>Блок коментарі</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style lang="scss">
.lesson-page {
  height: calc(100vh - 60px);
  display: flex;

  &__title {
    margin-bottom: 32px;
  }

  &__content {
    display: flex;
    align-items: flex-start;
    flex: 1;
  }

  &__sidebar {
    width: 200px;
    min-height: calc(100vh - 60px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    padding: 20px;
  }

  &__body {
    flex: 1;
    min-height: calc(100vh - 60px);

    padding: 20px;
  }
}
</style>

<template>
  <div
    class="educ-item"
    :class="{'educ-item__completed': completed}"
  >

    <div class="educ-item__body">
      <div
          class="educ-item__head"
          @click="toggle"
      >
        <prime-icon
          :name="completed ? 'pi-circle-fill' : 'pi-circle'"
          :color="completed ? 'green' : '#000'" />
        <div class="educ-item__name">
          <h2
            v-if="!expanded"
            class="educ-item__title"
          >
            Інтро
          </h2>
          <h3
            class="educ-item__subtitle"
          >
            Урок 1
          </h3>
        </div>
      </div>
      <div
        v-if="isToggled"
        class="educ-item__list">
        <router-link
          :to="{name: 'lesson-video', params: {id: 1}}"
        >
          Відео
        </router-link>
        <router-link
            :to="{name: 'lesson-notes', params: {id: 1}}"
        >
          Конспект
        </router-link>
        <router-link
            :to="{name: 'lesson-test', params: {id: 1}}"
        >
          Тести
        </router-link>
        <router-link
            :to="{name: 'lesson-homework', params: {id: 1}}"
        >
          Домашнє завдання
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimeIcon from "@/components/shared/PrimeIcon.vue";
import {useSidebarSettings} from "@/composables/useSidebarSettings.js";
import {useToggler} from "@/composables/useToggler.js";

const { expanded } = useSidebarSettings();
const { isToggled, toggle } = useToggler();
const props = defineProps( {
  completed: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.educ-item {
  padding: 12px 24px;
  border-radius: 16px;
  border: 1px solid #111113;

  display: flex;
  align-items: center;
  line-height: 1;
  gap: 10px;

  cursor: pointer;

  transition: all .25s ease;

  &:hover {
    background: rgba(222, 222, 222, 0.5);
  }

  &__completed {
    background: rgba(0, 128, 0, 0.2);

    &:hover {
      background: rgba(0, 128, 0, 0.1);
    }
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__body {
    width: 100%;
  }

  &__title {
    font-size: 20px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &__subtitle {
    font-size: 12px;
    color: grey;
  }

  &__name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    width: 100%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;

    & a {
      display: block;
      color: #000;
      padding: 8px 10px;
      border-radius: 8px;
      background: rgba(128, 128, 128, 0.17);
      width: 100%;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  }
}
</style>

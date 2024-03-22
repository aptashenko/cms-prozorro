<template>
  <div class="educ-list">
    <div class="educ-item">
      <prime-icon name="pi-circle" />
      <div class="educ-item__body">
        <h3
          class="educ-item__subtitle"
        >
          Урок 1
        </h3>
        <h2
          v-if="!expanded"
          class="educ-item__title"
        >
          З чого почати ?
        </h2>
        <div
          v-if="!expanded"
          class="educ-item__stats">
          <div class="educ-item__duration">
            <prime-icon name="pi-clock" />
            <p>16:32</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PrimeIcon from "@/components/shared/PrimeIcon.vue";
import {useSidebarSettings} from "@/composables/useSidebarSettings.js";
const { expanded } = useSidebarSettings()
</script>

<style lang="scss">
.educ-list {
  margin-top: 32px;
}
.educ-item {
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #111113;

  display: flex;
  align-items: center;
  line-height: 1;
  gap: 10px;

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__subtitle {
    font-size: 12px;
  }

  &__title {
    font-size: 20px;
    margin-top: 4px;
    margin-bottom: 8px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &__stats {
    display: flex;
    align-items: center;
  }

  &__duration {
    display: flex;
    align-items: center;
    gap: 3px;

    & p {
      font-size: 12px;
      line-height: 1;
    }
  }
}
</style>

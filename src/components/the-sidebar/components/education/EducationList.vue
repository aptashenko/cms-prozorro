<template>
  <div class="educ-list">
    <div class="educ-list__head">
      <h2>
        Привіт, Артем
      </h2>
      <p>
        Твій прогрес у навчанні: 10%
      </p>
      <progress-bar />
    </div>
    <div class="educ-list__body">
      <education-item
        v-for="i of 5"
        :completed="i === 1"
      />
    </div>
  </div>
</template>
<script setup>
import EducationItem from "@/components/the-sidebar/components/education/EducationItem.vue";
</script>

<style lang="scss">
.educ-list {
  margin-top: 32px;


  &__head {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 32px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}

</style>

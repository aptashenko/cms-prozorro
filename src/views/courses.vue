<template>
  <div class="courses-list">
    <h2 class="courses-list__title">
      Курси
    </h2>
    <div class="courses-list__content">
      <router-link v-for="i of 5" :to="{name: 'course', params: {id: i}}" class="courses-list__item">
        Курс {{i}}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.courses-list {
  height: calc(100vh - 60px);
  padding: 40px 60px;

  &__title {
    margin-bottom: 32px;
  }


  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__item {
    width: 300px;
    height: 300px;
    background: gray;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="library">
    <h2 class="library__title">
      База знань
    </h2>
    <div class="library__content">
      <router-link
          v-for="i of 20"
          :to="{name: 'article', params: {id: i}}"
          class="library__article"
      >
        Стаття {{i}}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.library {
  height: calc(100vh - 60px);
  padding: 40px 80px;

  &__title {
    margin-bottom: 32px;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__article {
    display: block;
    width: 190px;
    height: 190px;
    background: gray;
    cursor: pointer;
  }
}
</style>

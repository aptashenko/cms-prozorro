<template>
  <div class="lets-start">
    <div class="lets-start__buttons">
      <router-link to="/library">
        До навчання
      </router-link>
      <router-link to="">
        До бази тендерів<br>
        (в розробці)
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.lets-start {
  display: grid;
  place-items: center;
  height: calc(100vh - 60px);

  &__buttons {
    display: flex;
    align-items: center;
    gap: 20px;

    & a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      width: 140px;
      height: 140px;
      border: 1px solid #000;
      text-align: center;
    }
  }
}
</style>

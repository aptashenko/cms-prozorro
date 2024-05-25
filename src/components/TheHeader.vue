<template>
  <div class="the-header">
    <div>
      LOGO
    </div>
    <ul class="the-header__list">
      <li class="the-header__item">
        <router-link to="/">
          Головна
        </router-link>
      </li>
      <li class="the-header__item">
        <router-link to="/library">
          База знань
        </router-link>
      </li>
      <li class="the-header__item">
        <router-link to="/courses">
          Мої курси
        </router-link>
      </li>
      <li class="the-header__item">
        <router-link to="/profile">
          Мій профіль
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss">
.the-header {
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  display: flex;
  align-content: center;

  height: 60px;

  gap: 50px;

  &__list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: 20px;
  }
}
</style>

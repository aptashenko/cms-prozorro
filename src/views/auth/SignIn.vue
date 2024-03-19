<template>
  <div class="sign-in">
    <div class="sign-in__content">
      <form
        id="sign-in"
        class="sign-in__form">
        <label
          for="login"
          class="sign-in__label">
          Логін
        </label>
        <input
          id="login"
          class="sign-in__input" >
        <label
          for="password"
          class="sign-in__label">
          Пароль
        </label>
        <input
          id="password"
          class="sign-in__input" >
      </form>
      <button
        for="sign-in"
        class="sign-in__button">
        Увійти
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sign-in {
  height: 100%;
  display: grid;
  place-items: center;

  &__content {
    padding: 30px;
    max-width: 300px;
    border-radius: 12px;

    box-shadow: -2px 2px 10px -5px #000;
  }

  &__form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 10px;
  }

  &__button {
    display: block;
    margin: 20px auto 0;
  }
}
</style>

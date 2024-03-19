<template>
  <div class="sign-up">
    <div class="sign-up__content">
      <form
          id="sign-up"
          class="sign-up__form">
        <label
            for="login"
            class="sign-up__label">
          Логін
        </label>
        <input
            id="login"
            class="sign-up__input" >
        <label
            for="password"
            class="sign-up__label">
          Пароль
        </label>
        <input
            id="password"
            class="sign-up__input" >
      </form>
      <button
          for="sign-up"
          class="sign-up__button">
        Зареєструвати
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sign-up {
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

<template>
  <div class="auth-page">
    <form
      v-if="router.currentRoute.value.name === 'sign-in'"
      id="sign-in"
      @submit.prevent="onSubmit"
      class="auth-page__form"
    >
      <label>
        <span>
          Логін
        </span>
        <input type="text" >
      </label>
      <label>
        <span>Пароль</span>
        <input type="password" >
      </label>
      <button type="submit">
        Логін
      </button>
    </form>
    <form
        v-if="router.currentRoute.value.name === 'sign-up'"
        id="sign-up"
        @submit.prevent="onSubmit"
        class="auth-page__form"
    >
      <label>
        <span>
          ПІБ
        </span>
        <input type="text" >
      </label>
      <label>
        <span>Email</span>
        <input type="email" >
      </label>
      <label>
        <span>Пароль</span>
        <input type="password" >
      </label>
      <label>
        <span>Повторити пароль</span>
        <input type="password" >
      </label>
      <button type="submit">
        Зареєструватись
      </button>
    </form>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const onSubmit = () => {
  router.push({name: 'home'})
}
</script>

<style lang="scss">
.auth-page {
  height: 100vh;
  display: grid;
  place-items: center;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #000;
    padding: 15px;

    & label {
      display: flex;
      align-content: center;
      gap: 10px;

      & span {
        flex: 1;
      }
    }
  }
}
</style>

<template>
  <div class="sign-up">
    <div class="sign-up__content">
      <h2 class="sign-up__title">
        Реєстрація
      </h2>
      <form
        id="sign-up"
        class="sign-up__form"
        @submit.prevent="onSubmit"
      >
        <base-input
          v-for="input of auth.forms.sign_up"
          v-model="input.value"
          :id="input.key"
          :form="input"
          :label="input.label"
          :placeholder="input.placeholder"
        />
      </form>
      <p>
        Вже зареєстровані ? <RouterLink :to="{name: 'sign-in'}">Увійти</RouterLink>
      </p>
      <button
        form="sign-up"
        type="submit"
        class="sign-up__button"
      >
        Зареєструватись
      </button>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/ui/BaseInput/index.vue';
import {useAuthStore} from "@/stores/auth-store.js";
import { validationRules } from "@/utils/validation/rules/index.js";
import {useFormValidate} from "@/composables/useFormValidate.js";
const auth = useAuthStore();

const { validate } = useFormValidate({
  email: validationRules.email,
  password: validationRules.password,
  name: validationRules.name,
  phone: validationRules.phone
}, auth.forms.sign_up)


const onSubmit = async () => {
  const isValid = await validate();
  if (isValid) {
    console.log(auth.forms.sign_up)
  }
}
</script>

<style lang="scss" scoped>
.sign-up {
  height: 100%;
  display: grid;
  place-items: center;

  &__content {
    padding: 30px;
    max-width: 600px;
    border-radius: 12px;

    box-shadow: -2px 2px 10px -5px #000;
  }

  &__form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  &__button {
    display: block;
    margin: 20px auto 0;
  }
}
</style>

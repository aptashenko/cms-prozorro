<template>
  <div class="sign-in">
    <div class="sign-in__content">
      <h2>
        Увійти
      </h2>
      <form
        id="sign-in"
        class="sign-in__form"
        @submit.prevent="onSubmit"
      >
        <base-input
          v-for="input of auth.forms.sign_in"
          v-model="input.value"
          :id="input.key"
          :form="input"
          :label="input.label"
          :placeholder="input.placeholder"
        />
      </form>
      <p>
        Немає аккаунту ? <RouterLink :to="{name: 'sign-up'}">Зареєструватись</RouterLink>
      </p>
      <button
        form="sign-in"
        type="submit"
        class="sign-in__button"
      >
        Увійти
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
  password: validationRules.password
}, auth.forms.sign_in)


const onSubmit = async () => {
  const isValid = await validate();
  if (isValid) {
    auth.sign_in()
  }
}

</script>

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
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__button {
    display: block;
    margin: 20px auto 0;
  }
}
</style>

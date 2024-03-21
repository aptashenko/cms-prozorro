<template>
  <label
    class="base-input-field"
    :class="$attrs.class"
    v-if="label"
  >
    <span class="base-input-field__label input input-label">
      {{label}}
    </span>
    <div
      class="base-input-field__field"
      :class="[{error: form.error || form.serverError}, {focused: isFocused}]"
    >
      <textarea
        v-if="form.long"
        :value="modelValue"
        :maxlength="limit"
        rows="5"
        :placeholder="placeholder"
        class="base-input-field__long input"
        @input="handleInput"
        v-on:[focusEvent]="changeEvent"
      />
      <input
        v-else
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        class="base-input-field__input input"
        v-on:[event]="handleInput"
        v-on:[focusEvent]="changeEvent"
      >
      <template v-if="passwordInput">
        <svg-icon
          class="eye-btn"
          :hide="!form.hide"
          name="eye"
          @click="showHidePassword"
        />
      </template>
      <template v-if="form.error || form.serverError">
        <svg-icon
          class="eye-btn"
          name="warning"
        />
      </template>
    </div>
    <p
        v-if="form.error || form.serverError"
      class="base-input-field__error"
    >
      {{errorMessage}}
    </p>
  </label>
</template>

<script setup>

import {computed} from "vue";
import {useFocusInput} from "@/composables/useFocusInput.js";
import messages from '@/utils/validation/messages'

const props = defineProps({
  label: {type: String},
  placeholder: {type: String},
  form: {type: Object},
  id: {type: String, required: true},
  modelValue: {type: String, default: ''},
  event: {type: String, default: 'input'},
  limit: {type: Number, default: 99999}
})
const onFocus = () => {
  props.form.error = '';
  props.form.serverError = '';
}
const inputType = computed(() => props.form.hide ? 'password' : 'text')
const { isFocused, changeEvent, focusEvent } = useFocusInput({focus: onFocus})
const showHidePassword = () => {
  props.form.hide = !props.form.hide;
}

const errorMessage = computed(() => props.form.serverError || messages[props.form.key][props.form.error])

const passwordInput = computed(() => props.form?.key.includes('password') && !props.form.error)

const emit = defineEmits([])

const handleInput = event => {
  const {value} = event.target;
  emit('update:modelValue', value)
}

</script>

<style lang="scss" scoped>
.base-input-field {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  &__long {
    background: transparent;
    border: none;
    width: 100%;
    color: #111113;

    outline: none;
    resize: none;

    &::placeholder {
      color: #11111380;
      font-weight: 400;
    }
  }

  &__field {
    display: flex;
    align-items: center;
    gap: 10px;

    background: #fff;

    border: 1px solid #11111380;
    padding: 14px 16px;
    border-radius: 8px;

    margin-top: 5px;

    cursor: text;

    transition: all 0.2s ease;

    & svg {
      cursor: pointer;
    }

    &.focused {
      border: 1px solid #E7AE81;
    }

    &.error {
      border-color: tomato;
    }
  }

  &__input {
    flex: 1;
    border: none;
    color: #111113;
    outline: none;
    padding: 0;
    background: transparent;

    &::placeholder {
      color: #11111380;
      font-weight: 400;
    }
  }

  &__label {
    color: #111113;
  }

  &__error {
    position: absolute;
    top: 100%;
    color: tomato;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.065px;
  }
}
</style>

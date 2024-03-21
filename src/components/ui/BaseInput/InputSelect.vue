<template>
  <div
    :disabled="disabled || null"
    :class="$attrs.class"
    @click.stop
  >
    <h3
      v-if="label"
      class="base-input-select__label label label-xl">{{ label }}</h3>
    <div
      :disabled="disabled || null"
      class="base-input-select__wrapper"
      @click.stop="toggle"
    >
      <div
          :class="[{active: isToggled}, 'base-input-select', {disabled}]"
      >
        <span
          class="base-input-select__field input"
          :class="[{active: selected.label}, {disabled}]"
        >
          {{ selected.label ? selected.label : placeholder }}
        </span>
        <svg-icon
          name="dropdown-arrow"
          class="base-input-select__arrow"
          :color="disabled && '#47433E'"
        />
      </div>
      <transition
        name="local-fade"
        appear
        mode="out-in"
      >
        <ul
          v-if="isToggled && !disabled"
          class="base-input-select__options"
        >
          <li
            v-for="{label, id, isFuture} of options"
            :key="id"
            :class="[{active: selected.id === id}, 'base-input-select__option', {disabled: isFuture}]"
            @click.stop="setValue({id, label, isFuture})"
          >
            {{label}}
            <svg-icon
              v-if="selected.id === id"
              name="check"
            />
          </li>
        </ul>
      </transition>
      <div
        v-if="isToggled"
        class="select-overlay"
        @click.stop="toggle"
      />
    </div>
  </div>
  <slot v-if="$slots.default" />
</template>

<script setup>
import {computed, ref, watch} from "vue";
import { useToggler } from "@/composables/useToggler.js";
import SvgIcon from "@/components/shared/SvgIcon.vue";

const {isToggled, toggle} = useToggler()

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  form: {
    type: Object,
    default: () => {}
  },
  trackBy: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String
  }
})

const emit = defineEmits(['change']);

const selected = ref({
  id: null,
  label: null
})

const angle = computed(() => isToggled.value ? '-180deg' : '0deg')
const setValue = ({id, label, isFuture}) => {
  if (isFuture) return;
  selected.value = {id, label};
  const value = props.trackBy ? selected.value[props.trackBy] : selected.value.label;
  props.form.value = value
  emit('change')
  toggle()
}

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    selected.value = {
      id: null,
      label: null
    }
  }
}, {deep: true})
</script>

<style lang="scss" scoped>
.base-input-select {
  padding: 14px 16px;
  padding-right: 8px;
  border-radius: 8px;
  border: 1px solid #11111380;
  background: rgba(24, 15, 2, 0.45);

  width: 100%;

  cursor: pointer;

  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__wrapper {
    position: relative;
  }

  &.disabled {
    pointer-events: none;
  }

  &.active {
    border-radius: 8px 8px 0px 0px;
    border-color: #111113;
  }

  &__field {
    display: block;
    min-height: 22px;
    color: #111113;
    font-weight: 400;

    width: 100%;

    text-overflow: ellipsis;

    overflow: hidden;
    white-space: nowrap;

    max-width: 70%;

    &.active {
      font-weight: 600;
    }

    &.disabled {
      color: #11111380;
    }
  }

  &[disabled] {
    color: #11111380;
  }

  &__arrow {
    transform: rotate(v-bind(angle));
    width: 24px;
    height: 24px;

    flex-shrink: 0;

    transition: transform ease 0.2s, fill ease 0.2s;
  }

  &__label {
    margin-bottom: 7px;
    text-transform: uppercase;
  }

  &__options {
    position: absolute;
    top: 100%;
    left: -1px;
    right: -1px;
    list-style: none;

    z-index: 100;

    display: flex;
    flex-direction: column;


    border-radius: 0 0 8px 8px;
    border: 1px solid #111113;

    max-height: 250px;

    overflow-y: scroll;

  }

  &__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px 10px 16px;
    background: #060403;
    color: #11111380;
    cursor: pointer;


    &:hover {
      background: #574537;
      color: #11111380;
    }

    &.active {
      background: #574537;
      color: #111113;
    }

    &:last-child {
      border-radius: 0 0 8px 8px;
    }

    &.disabled {
      color: #11111380;
      cursor: default;

      &:hover {
        background: #060403;
      }
    }
  }
}

.select-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: default;
  z-index: 99;
}
</style>

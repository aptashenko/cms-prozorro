<template>
  <component :is="input">
    <slot v-if="$slots.default" />
  </component>
</template>

<script setup>
import { INPUT_NAMES } from "@/components/ui/BaseInput/enums/index.js";
import {defineAsyncComponent, ref} from "vue";
const props = defineProps({
  inputType: {
    type: String,
    default: 'base'
  }
})
const allInputFiles = import.meta.glob('./*')


const input = ref(defineAsyncComponent(() => allInputFiles[INPUT_NAMES[props.inputType]]()))

</script>

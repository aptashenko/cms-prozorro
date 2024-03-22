<template>
  <span
    :class="['pi icon', name]"
    :style="[settings]"
  />
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'sm'
  },
  color: {
    type: String,
    default: '#000'
  }
})
const iconSize = computed(() => ({
  sm: '1rem',
  md: '2rem',
  lg: '4rem'
})[props.size])

const settings = computed(() => ({
  'font-size': iconSize.value,
  color: props.color
}))
</script>

<style scoped>
.icon {
  flex-shrink: 0;
}
</style>

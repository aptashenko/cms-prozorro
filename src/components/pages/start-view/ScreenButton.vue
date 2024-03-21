<template>
  <router-link
    :to="path"
    class="screen-button"
  >
    {{label}}
  </router-link>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String
  },
  path: {
    type: [Object, String]
  }
})
</script>

<style lang="scss">
.screen-button {
  display: grid;
  place-items: center;
  text-align: center;
  padding: 0 40px;
  min-width: 210px;
  aspect-ratio: 1 / 1;

  border-radius: 16px;

  box-shadow: -2px 2px 10px -5px #000;
  transition: all .25s ease-out;

  &:hover {
    transform: translateY(-10px) scale(1.05);
  }
}
</style>

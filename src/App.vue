<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import {computed, defineAsyncComponent} from "vue";

const layout = computed(() => defineAsyncComponent(() => import('./layouts/DefaulLayout.vue')))
</script>

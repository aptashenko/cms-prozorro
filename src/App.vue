<template>
  <router-view v-slot="{Component, route: {meta}}">
    <component :is="meta.layout || DefaultLayout">
      <component :is="Component" />
    </component>
  </router-view>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

</script>

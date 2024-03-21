<template>
  <router-view v-slot="{Component, route: {meta}}">
    <component :is="meta.layout || SidebarLayout">
      <component :is="Component" />
    </component>
  </router-view>
</template>

<script setup>
import SidebarLayout from "@/layouts/SidebarLayout.vue";

</script>

<template>
  <div class="sidebar-layout">
    <the-sidebar>
      <main-sidebar />
    </the-sidebar>
    <div class="sidebar-layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import TheSidebar from "@/components/the-sidebar/index.vue";
import MainSidebar from "@/components/the-sidebar/components/MainSidebar.vue";
</script>

<style lang="scss">
.sidebar-layout {
  height: 100%;
  display: flex;

  &__content {
    height: 100%;
    flex-grow: 1;
  }
}
</style>

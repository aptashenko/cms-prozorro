<template>
  <div class="default-layout">
    <the-sidebar />
    <div class="default-layout__body">
      <the-header />
      <div class="defaul-layout__window">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheSidebar from "@/components/TheSidebar.vue";
import TheHeader from "@/components/TheHeader.vue";

</script>

<style lang="scss">
.default-layout {
  width: 100%;
  height: 100%;

  display: flex;

  &__body {

  }
}
</style>

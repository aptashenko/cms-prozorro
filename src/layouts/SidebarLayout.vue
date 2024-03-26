<template>
  <div class="sidebar-layout">
    <the-sidebar
      class="sidebar-layout__sidebar"
    >
      <component :is="isEducationPage ? EducationList : null" />
    </the-sidebar>
    <div class="sidebar-layout__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import TheSidebar from "@/components/the-sidebar/index.vue";
import EducationList from "@/components/the-sidebar/components/education/EducationList.vue";
import {computed} from "vue";

import {useSidebarSettings} from "@/composables/useSidebarSettings.js";
import {useRoute} from "vue-router";
const { expanded } = useSidebarSettings()
const sidebarWidth = computed(() => expanded.value ? '200px' : '400px');
const route = useRoute();
const isEducationPage = computed(() => route.matched.some(item => item.name === 'education'))
</script>

<style lang="scss">

.sidebar-layout {
  display: flex;

  &__sidebar {
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 99;
    width: v-bind(sidebarWidth);
    flex-shrink: 0;

    transition: all .25s ease;
  }

  &__content {
    padding: 30px;
    flex: 1;
    word-wrap: break-word;
    width: calc(100% - v-bind(sidebarWidth));
  }
}
</style>

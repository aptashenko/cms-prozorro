<template>
  <aside
    class="the-sidebar"
  >
    <button
      @click="toggleExpand"
      class="the-sidebar__expand-button"
      :class="{expanded}"
    >
      <prime-icon name="pi-angle-double-left" />
    </button>
    <sidebar-user-info />
    <slot class="the-sidebar__content" />
  </aside>
</template>

<script setup>
import SidebarUserInfo from "@/components/the-sidebar/components/SidebarUserInfo.vue";
import {useSidebarSettings} from "@/composables/useSidebarSettings.js";
import PrimeIcon from "@/components/shared/PrimeIcon.vue";

const { toggleExpand, expanded } = useSidebarSettings()
</script>

<style lang="scss" scoped>
.the-sidebar {
  background: #f6f6f6;
  box-shadow: 0 -1px 10px 5px rgba(0, 0, 0, 0.4);
  padding: 20px;

  &__content {
    height: 100%;
    margin-top: 32px;
  }

  &__expand-button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-left: auto;

    transition: all .5s ease;

    &:hover span {
      color: green !important;
    }

    &.expanded {
      transform: rotate(180deg);
    }
  }
}
</style>


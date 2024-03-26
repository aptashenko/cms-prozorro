<template>
  <aside
    class="the-sidebar"
  >
    <div class="the-sidebar__head">
      <p>Logo</p>
      <button
          @click="toggleExpand"
          class="the-sidebar__expand-button"
          :class="{expanded}"
      >
        <prime-icon name="pi-angle-double-left" />
      </button>
    </div>
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
  position: relative;
  background: #f6f6f6;
  box-shadow: 0 -1px 10px 5px rgba(0, 0, 0, 0.4);
  padding: 20px;

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    & p {
      border: 1px solid #000;
      border-radius: 30px;
      padding: 10px 30px;
    }
  }

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


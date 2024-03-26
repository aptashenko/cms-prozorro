<template>
  <router-view v-slot="{Component, route: {meta}}">
    <component :is="meta.layout || SidebarLayout">
      <component :is="Component" />
    </component>
  </router-view>
  <teleport to="body">
    <base-popup-component
      v-if="globalPopUpState.component"
    />
  </teleport>
</template>

<script setup>
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import {usePopups} from "@/composables/usePopups.js";
import {POPUP_NAMES} from "@/components/popups/components/enums.js";
const { globalPopUpState, openPopup } = usePopups();

openPopup(POPUP_NAMES.congratulations)
</script>

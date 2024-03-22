<template>
  <div class="main-sidebar">
    <div class="main-sidebar__user">
      <div class="main-sidebar__image">
        A
      </div>
      <transition name="fade" mode="out-in">
        <div
          v-if="!expanded"
          class="main-sidebar__info"
        >
          <p class="main-sidebar__name">Artem Ptashenko</p>
          <p class="main-sidebar__phone">+38(050) 574-23-62</p>
        </div>
      </transition>
    </div>
    <div class="main-sidebar__logout">
      <button
        @click="auth.logout"
      >
        Вийти
      </button>
    </div>
  </div>
</template>

<script setup>
import {useSidebarSettings} from "@/composables/useSidebarSettings.js";
import {useAuthStore} from "@/stores/auth-store.js";

const { expanded } = useSidebarSettings()
const auth = useAuthStore()
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-in-out;
}

.fade-leave-active {
  display: none !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-sidebar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &__user {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    aspect-ratio: 1/1;
    margin-right: 20px;
    background: #dcdcdc;
    border-radius: 50%;

    font-weight: 600;
    font-size: 24px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & p {
      text-overflow: ellipsis;

      overflow: hidden;
      white-space: nowrap;
      max-width: 200px;
    }
  }

  &__name {
    margin-bottom: 5px;
  }

  &__logout {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    & button {
      color: #fff;
      padding: 2px 20px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
    }

  }
}
</style>

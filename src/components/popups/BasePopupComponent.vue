<template>
  <div
    class="overlay"
    @click.self="handleCloseModal"
    aria-modal="true"
    role="dialog"
    tabindex="-1"
  >
    <transition :name="globalPopUpState.props.transition">
      <component
        v-if="showContent"
        :is="globalPopUpState.component"
        v-bind="globalPopUpState.props"
      />
    </transition>
  </div>
</template>

<script setup>
import {nextTick, onMounted, onUnmounted, ref} from "vue";
import {usePopups} from "@/composables/usePopups";

const { closePopup, globalPopUpState } = usePopups();
const showContent = ref(false)
const keydownListener = event => {
  if (event.key === "Escape") handleCloseModal();
}

const handleCloseModal = () => {
  showContent.value = false
  setTimeout(closePopup, 500)
}

onMounted(() => {
  document.addEventListener("keydown", keydownListener);
  nextTick(() => {showContent.value = true})
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownListener);
});


</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(54, 58, 68, 0.4);
  z-index: 101;

  display: grid;
  place-items: center;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>

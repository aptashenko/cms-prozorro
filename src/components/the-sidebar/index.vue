<template>
  <aside
    class="the-sidebar"
  >
    <slot class="the-sidebar__content" />
  </aside>
</template>

<style lang="scss" scoped>
.the-sidebar {
  width: 400px;
  background: #f6f6f6;
  height: 100%;
  box-shadow: 0 -1px 10px 5px rgba(0, 0, 0, 0.4);
  padding: 20px;

  &__content {
    height: 100%;
  }
}
</style>

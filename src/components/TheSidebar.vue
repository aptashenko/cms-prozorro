<template>
  <aside class="the-sidebar">
    <nav class="the-sidebar__nav">
      <router-link to="/" class="the-sidebar__link">
        Всі замовлення
      </router-link>
      <router-link to="/" class="the-sidebar__link">
        Фінанси
      </router-link>
      <router-link to="/" class="the-sidebar__link">
        Мої тендери
      </router-link>
    </nav>
  </aside>
</template>

<script setup>

</script>

<style lang="scss">
.the-sidebar {
  height: 100%;
  padding: 24px;
  width: 280px;
  flex-shrink: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);

  &__nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  &__link {
    padding: 10px;
  }
}
</style>

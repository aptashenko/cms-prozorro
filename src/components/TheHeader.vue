<template>
  <div class="the-header">
    <nav class="the-header__nav">
      <router-link to="/" class="the-header__link">
        Всі замовлення
      </router-link>
      <router-link to="/" class="the-header__link">
        Фінанси
      </router-link>
      <router-link to="/" class="the-header__link">
        Мої тендери
      </router-link>
    </nav>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.the-header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);

  &__nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__link {
    padding: 10px;
  }
}
</style>

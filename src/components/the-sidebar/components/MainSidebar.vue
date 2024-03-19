<template>
  <div class="main-sidebar">
    <div class="main-sidebar__user">
      <div class="main-sidebar__image">
        A
      </div>
      <div class="main-sidebar__info">
        <p class="main-sidebar__name">Artem Ptashenko</p>
        <p class="main-sidebar__phone">+38(050) 574-23-62</p>
      </div>
    </div>
    <div class="main-sidebar__logout">
      <router-link
        to="#"
      >
        Вийти
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
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
  }

  &__name {
    margin-bottom: 5px;
  }

  &__logout {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    & a {
      color: #fff;
      padding: 2px 20px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
    }

  }
}
</style>

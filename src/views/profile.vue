<template>
  <div class="profile-page">
    <h2>Мій профіль</h2>
    <div>
      <form
          id="profile"
          class="profile-page__form"
      >
        <label>
        <span>
          Імя
        </span>
          <input type="text" >
        </label>
        <label>
        <span>
          Прізвище
        </span>
          <input type="text" >
        </label>
        <label>
        <span>
          Email
        </span>
          <input type="text" >
        </label>
        <label>
          <span>Старий пароль</span>
          <input type="password" >
        </label>
        <label>
          <span>Новий пароль</span>
          <input type="password" >
        </label>
        <label>
          <span>Повторити новий пароль</span>
          <input type="password" >
        </label>
        <button type="submit">
          Оновити
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.profile-page {
  padding: 40px;

  & h2 {
    margin-bottom: 20px;
  }


  & div {
    height: 50vh;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #000;
    padding: 15px;

    width: 500px;

    & label {
      display: flex;
      align-content: center;
      gap: 10px;

      & span {
        flex: 1;
      }
    }
  }
}
</style>

<template>
  <div class="article-page">
    <h2 class="article-page__title">
      Стаття ###
    </h2>
    <div class="article-page__content" />
  </div>
</template>

<script setup></script>

<style lang="scss">
.article-page {
  padding: 40px 60px;
  &__title {
    margin-bottom: 32px;
  }
  &__content {
    height: 100vh;
    background: gray;
  }
}
</style>

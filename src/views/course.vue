<template>
  <div class="course-page">
    <h2>ЛЕНДИНГ КУРСУ (ВІЗИТКА)</h2>
    <router-link :to="{name: 'education', params: {id: route.params.id}}">
      Перейти до навчання
    </router-link>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<style lang="scss">
.course-page {
  height: calc(100vh - 60px);
  padding: 40px 60px;

  & a {
    border: 1px solid #000;
    padding: 5px;
    margin-top: 10px;
    display: inline-block;
  }
}
</style>

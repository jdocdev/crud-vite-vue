<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="navbar">
        <RouterLink class="link" to="/">Lista de Posts</RouterLink>
        <RouterLink class="link" to="/postcreate/">Crear nuevo Post</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  background-color: #ffa43a;
  padding: 1rem 0;
  .link{
    color: #ffffff;
    text-decoration: none;
    margin: 1rem;
    transition: color ease-in-out 0.3s;

    &:hover{
      color: #525558;
    }
  }

}

</style>

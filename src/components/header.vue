<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>

      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/projects">Projects</RouterLink>
        <RouterLink class="link" to="/curriculum">Curriculum</RouterLink>
      </nav>

  </header>
  <RouterView />
</template>

<style scoped>
header {
  overflow: hidden;
  background-color: #252525;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  
  padding: 20px 10px;
}
nav .link {
  color: #fff;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

nav .link:hover {
  background-color: #ddd;
  color: black;
}
nav .link:active {
  background-color: #e60000;
  color: black;
}

@media screen and (max-width: 500px) {


}

</style>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
  <div class="logo">
    <RouterLink class="link" to="/">LOGO</RouterLink>  
  </div>
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/projects">Projects</RouterLink>
        <RouterLink class="link" to="/curriculum">Curriculum</RouterLink>
      
        <!--
        <button @click='$language = "pt"'>PT</button>
        <button @click='$language = "en"'>EN</button>
        -->
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
  
}

.logo {
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  float: left;
  padding: 25px 10px;
}


nav {
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  float: right;
  padding: 20px 10px;
}
 .link {
  color: #fff;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

 .link:hover {
  background-color: #ddd;
  color: black;
}
 .link:active {
  background-color: #e60000;
  color: black;
}

@media screen and (max-width: 500px) {


}

</style>
<script setup lang="ts">

</script>

<template>
<footer>
  <h3>Find me in: </h3>
    <div class="socials">
        <a href="https://www.youtube.com/channel/UCLydYepr5Qj2GTOFBrdH_3Q" target="_blank" style="--clr:#ff0000;" class="fa-brands fa-brands fa-youtube" id="profile-link"><fa :icon="['fab', 'youtube']">youtube</fa></a> 
        <a href="https://github.com/ItsukaT2" target="_blank" style="--clr:#fff;" class="fa-brands fa-github"><fa :icon="['fab', 'github']">github</fa></a>
        <a href="https://steamcommunity.com/id/perfildealguem/" target="_blank" style="--clr:#2a475e;" class="fa-brands fa-brands fa-steam"><fa :icon="['fab', 'steam']">steam</fa></a>
        
        <a target="_blank" style="--clr:#7289da;" class="fa-brands fa-brands fa-steam" v-clipboard="disc"><fa :icon="['fab', 'discord']">discord</fa></a>

      </div>
</footer>
</template>


<script lang="ts">

export default {
  name: "App",
  data() {
    return {
      disc: "Itsuka#8122",
    };
  },
};

</script>


<style scoped>
footer {
    background-color: #222;
    color: #fff;
    font-size: 13px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

.socials {
  margin: 10px;
}

.socials a {
  /*color: white;
  margin: 0 10px;
  transition: 0.2s linear;
  transition-property: background-color, color;*/
    padding: 10px;
    color: var(--clr);
    z-index: 2;
    font-size: 1.7em;
    transition: 0.5s;
    border-radius: 50%;
    margin: 5px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.socials a:hover {
  /*color: var(--accent-color);
  color: #003cff;
  transition: 0.2s linear;
  transition-property: background-color, color;*/
  filter: drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))
     drop-shadow(0 0 60px var(--clr));
  
}
</style>
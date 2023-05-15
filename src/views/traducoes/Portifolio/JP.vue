<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <section>
        <div class="lang">
        <RouterLink class="language" to="/">Portuguese</RouterLink>
        <RouterLink class="language" to="/EN">English</RouterLink>
    </div>
    <br>
        <article>
            <h3 style="--i:6;">Watashi wa</h3>
      <h2>________</h2>
      <h3 style="--i:8;">I'm a <span>
        <a href="/" title="Wikipedia">Frontend developer</a></span></h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Consequuntur rem nostrum ducimus unde doloribus.
          <br>Eum illum et quisquam vel adipisci, 
          vitae repellat eius! Quam quibusdam possimus 
          modi impedit quia nesciunt.
      </p>
        </article>
        <div class="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" alt=""></div>
    </section>

</template>

<style scoped>

.lang {
    top: -200px;
    left: 73%;
    display: flex;
    align-items: center;
    margin-bottom: 0px;
}

.lang .language {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;

}

.lang .language:hover {
 transform: scale(1.2);
}

section{
  top: 150px;
  margin-left: 1%;
  margin-right: 3%;
  display: flex;
  align-items: center;
}

section h2{
  font-size: 2em;
  margin: 0 0 0 0;
  opacity: 0;
  animation: slideLeft 1s ease forwards 0.7s;
  -webkit-text-stroke: 2px white;
  color: transparent;
  transition: .1s;
}

section h3{
  opacity: 0;
  animation: slideRight 1s ease forwards;
  animation-delay: calc(.1s * var(--i))
}

section p{
  font-size: 1em;
  opacity: 0;
  animation: slideTop 0.5s ease forwards 0.75s;
}

section img{
  max-width: 300px;    
  max-height: 300px;
  opacity: 0;
  left: 10px;
  animation: slideTop 1s ease forwards 0.5s;
}

section .img{
   animation: animate 3s ease-in-out infinite 1s; 
}


section span a{
  color: rgb(255, 0, 0);
  text-decoration: none;
  transition: .3s;
}

section span a:hover{
  text-shadow: 0 0 40px #fff;
  color: white;
}

@keyframes slideBottom{
  from{
    transform: translateY(-50px);
    opacity: 0;
  }
  
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slideTop{
  from{
    transform: translateY(100px);
    opacity: 0;
  }
  
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slideRight{
  from{
    transform: translateX(-100px);
    opacity: 0;
  }
  
  to{
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes slideLeft{
  from{
    transform: translateX(100px);
    opacity: 0;
  }
  
  to{
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes animate{
  0%{
    transform: translateY(0);
  }
  
  50%{
    transform: translateY(10px);
  }
  
  100%{
    transform: translateY(0);
  }
}
</style>

<template>

    <section>
        <div class="lang">
        <RouterLink class="language" to="/EN">English</RouterLink>
        <RouterLink class="language" to="/JP">Japanese</RouterLink>
    </div>
    <br>
        <article>
            <h3 style="--i:6;">Olá, meu nome é</h3>
      <h2>Thomas Kenzo Matsuta</h2>
      <h3 style="--i:8;">Um <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      
    </h3>
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

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.blinking-cursor {
  font-size: 6rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>

<style scoped>
.lang {
    top: -200px;
    left: 73%;
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    opacity: 0;
  animation: slideLeft 1s ease forwards 0.7s;
  color: transparent;
  transition: .1s;
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
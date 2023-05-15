<script setup lang="ts">

</script>

<template>

<!--CUBE-->
<section>
    <div class="cube">
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face front"></div>
        <div class="face back"></div>
      </div>
</section>



<section>
<!--PLASMA-LOADERS-->
<div>
<h1>PLASMA</h1>
<!-- Plasma -->
<svg width="0" height="0">
 <filter id="gooey-plasma">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
  </filter>
</svg>
<div class="plasma">
  <div class="gooey-container">
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
    <span class="bubble"></span>
  </div>
</div>
<!--/Plasma -->

  
</div>
<div>
  
  
<h1>PLASMA-2</h1>
<!-- Plasma-2 -->
<svg width="0" height="0">
 <filter id="gooey-plasma-2">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
       <feTurbulence baseFrequency="0.03" numOctaves="1" />
  
       <feDisplacementMap id="displacement" in="blur" scale="50" xChannelSelector="B" yChannelSelector="G" />
            
       <feBlend id="blend-mode" in="gooey" mode="overlay" />
  </filter>
</svg>
<div class="plasma-2">
  <ul class="gooey-container">
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
  </ul>
</div>
<!--/Plasma-2 -->

  
</div>
<div>
  
  
<h1>FILL</h1>
<!-- Fill -->
<svg width="0" height="0">
 <filter id="gooey-fill">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
  </filter>
</svg>
<div class="fill">
  <div class="gooey-container">
    <span class="level">
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
    </span>
  </div>
</div>
<!--/Fill -->

  
  
</div>
<div>
  
  
<h1>FILL 2</h1>
<!-- Fill 2-->
<svg width="0" height="0">
 <filter id="gooey-fill-2">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
       <feTurbulence baseFrequency="0.03" numOctaves="1" />
       <feDisplacementMap id="displacement" in="blur" scale="50" xChannelSelector="B" yChannelSelector="G" />
       <feBlend id="blend-mode" in="gooey" mode="exclusion" />
  </filter>
</svg>
<div class="fill-2">
  <div class="gooey-container">
    <span class="level">
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
    </span>
  </div>
</div>
<!--/Fill 2 -->
</div>
<div>
  
  
<h1>BLACK-HOLE</h1>
<!-- Black-Hole -->
<svg width="0" height="0">
 <filter id="gooey-black-hole">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur"/>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
  </filter>
</svg>
<div class="black-hole">
  <ul class="gooey-container">
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
    <li class="bubble"></li>
  </ul>
</div>
<!--/Black-Hole -->
</div>
</section>
</template>

<style scoped>

section {
    position:relative;
    margin-top: 200px;
    margin-bottom: 10px;
    margin-left: 30%;
    margin-right: 30%;

    justify-content:center;
    align-items:center;
    text-align: center;
}

@keyframes animate {
    0% {
      transform: rotate3d(0, 0, 0, 0);
    }
  
    100% {
      transform: rotate3d(1, 1, 0, 360deg);
    }
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(59, 59, 59);
  }
  
  .cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
  }
  
  .face {
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(4px);
    border: 2px solid white;
    border-radius: 10px;
    position: absolute;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
    transition: transform 500ms;
  }
  
  .front {
    transform: translateZ(100px);
  }
  
  .back {
    transform: translateZ(-100px) rotateY(180deg);
  }
  
  .left {
    transform: translateX(-100px) rotateY(-90deg);
  }
  
  .right {
    transform: translateX(100px) rotateY(90deg);
  }
  
  .top {
    transform: translateY(-100px) rotateX(90deg);
  }
  
  .bottom {
    transform: translateY(100px) rotateX(-90deg);
  }
  

</style>




<style lang="scss">
/*======PLASMA-LOADERS======*/

section {
  font-family : 'Nova Flat';
  color       : white;
  text-align  : center;
  display        : block;

  h1 {
    display        : block;
    height         : 25px;
    font-size      : 12px;
  }
  
  > div {
    
    width          : 25%;
    min-width      : 500px;
    margin-bottom  : 50px;
    > div{
      margin : 0 auto;
      //filter:invert(1) hue-rotate(70deg);
    }
  }
}

///////////////////////////////////////////////////////////////////////
//////////////////////////////// PLASMA ///////////////////////////////
///////////////////////////////////////////////////////////////////////
@keyframes plasma{
  0%   { transform : scale(6) translate3d( 20px,0,0); }
  50%  { transform : scale(1) translate3d(-60px,0,0); }
  100% { transform : scale(6) translate3d( 20px,0,0); }
}

.plasma{
  backface-visibility: hidden;
  z-index: 20;
  position      : relative;
  width         : 250px;
  height        : 250px;
  padding       : 0;
  border-radius : 50%;
  overflow      : hidden;
  box-shadow    : 0 0 30px 0 #8140ff inset;
  
  .gooey-container {
    filter        : url(#gooey-plasma);
    position      : absolute;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%,-50%);
    width         : 300px;
    height        : 300px;
    padding       : 0;
    margin        : 0;
    box-shadow    : 0 0 0 20px #ff4081 inset;
    border-radius : 50%;
    overflow      : hidden;
    
    .bubble {
      display    : block;
      position   : absolute;
      top        : 50%;
      left       : 50%;
      width      : 100%;
      text-align : right;

      &:before{
        content       : "";
        display       : inline-block;
        background    : #ff4081;
        width         : 30px;
        height        : 30px;
        border-radius : 50%;
        transform     : scale(6) translate3d(20px,0,0);
        box-shadow    : 0 0 15px 0 #0000ff inset,
                        0 0 10px 0 #0000ff inset;
      }
    }
    @for $i from 1 through 6 {
      .bubble:nth-child(#{$i}) {
        transform : translate(-50%,-50%) rotate(60deg*$i);
      }
      .bubble:nth-child(#{$i}):before {
        animation : plasma 3s+($i/2) linear .25s*$i infinite;
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////
/////////////////////////////// PLASMA-2 //////////////////////////////
///////////////////////////////////////////////////////////////////////

@keyframes plasma-2{
  0%  { transform:scale(1) translate3d( 60px,0,0) }
  50% { transform:scale(2) translate3d(-60px,0,0) }
  100%{ transform:scale(1) translate3d( 60px,0,0) }
}

.plasma-2{
  backface-visibility: hidden;
  z-index: 20;
  position      : relative;
  overflow      : hidden;
  border-radius : 50%;
  width         : 250px;
  height        : 250px;
  padding       : 0;
  box-shadow    : 0 0 30px 0 #00ddff inset;
  
  .gooey-container {
    overflow      : hidden;
    border-radius : 50%;
    position      : absolute;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%,-50%);
    filter        : url(#gooey-plasma-2);
    width         : 300px;
    height        : 300px;
    padding       : 0;
    margin        : 0;
    box-shadow    : 0 0 0 20px #0099ff inset;
    
    .bubble {
      display    : block;
      position   : absolute;
      top        : 50%;
      left       : 50%;
      width      : 100%;
      text-align : right;

      &:before{
        content       : "";
        display       : inline-block;
        background    : #4081ff;
        width         : 50px;
        height        : 50px;
        border-radius : 50%;
        transform     :scale(1) translate3d(75px,0,0);
        box-shadow    : 0 0 10px 5px #00ffff inset,
                        0 0 10px 0 #81ff00 inset;
      }
    }
    @for $i from 1 through 6 {
      .bubble:nth-child(#{$i}) {
        transform : translate(-50%,-50%) rotate(60deg*$i);
      }
      .bubble:nth-child(#{$i}):before {
        animation : plasma-2 5s*($i / 2) ease .5s/$i infinite;
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////// FILL ////////////////////////////////
///////////////////////////////////////////////////////////////////////
@keyframes fill-level{
  0%   { transform : translate3d(-413px, -53px,0) rotate(45deg) } 
  15%  { transform : translate3d(-393px, -73px,0) rotate(25deg) } 
  30%  { transform : translate3d(-343px,-123px,0) rotate(45deg) }
  45%  { transform : translate3d(-283px,-183px,0) rotate(55deg) }
  60%  { transform : translate3d(-263px,-203px,0) rotate(45deg) }
  75%  { transform : translate3d(-243px,-223px,0) rotate(35deg) }
  90%  { transform : translate3d(-223px,-243px,0) rotate(45deg) }
  100% { transform : translate3d(-203px,-263px,0) rotate(55deg) }
}

.fill{
  backface-visibility: hidden;
  z-index       : 20;
  position      : relative;
  width         : 250px;
  height        : 250px;
  padding       : 0;
  border-radius : 50% 50% 50% 50%;
  overflow      : hidden;
  transform     : rotate(-45deg);
  box-shadow    : 0 0 30px 0 #0000ff inset;
  
  .gooey-container {
    filter        : url(#gooey-fill);
    position      : absolute;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%,-50%);
    width         : 300px;
    height        : 300px;
    padding       : 0;
    margin        : 0;
    box-shadow    : 0 0 0 18px #0000ff inset;
    border-radius : 50% 0 50% 50%; 
    overflow      : hidden;
    
    .level, .bubble {
      background : #ff4081;
    }
    
    .level{
      display          : block;
      margin           : 0 auto;
      position         : absolute;
      top              : 300px;
      left             : 50%;
      width            : 500px; 
      height           : 350px;
      text-align       : center;
      transform-origin : 50% 0;
      transform        : translate3d(-413px, -53px,0) rotate(45deg);
      animation        : fill-level 5s linear infinite;
      box-shadow       : 0 0 100px 0 #0000ff inset, 
                         0 0 200px 0 #0000ff inset;
    }
    @keyframes fill-bubbles{
      0%   { transform : translate3d(-100px,-20px,0) rotate(  0deg)} 
      50%  { transform : translate3d( 100px,-40px,0) rotate(180deg)}
      100% { transform : translate3d(-100px,-20px,0) rotate(360deg)}
    }
    .bubble {
      content       : "";
      display       : inline-block;
      width         : 100px;
      height        : 100px;
      border-radius : 50%;
      transform-origin : 50% 50%;
      transform     : rotate(0deg) translate3d(0,0,0);
      box-shadow    : 0 0 30px 20px #0000ff inset;
    }
    @for $i from 1 through 8 {
      .bubble:nth-child(#{$i}) {
        animation : fill-bubbles 3s*($i / 2) ease .5s/$i infinite;
      }
    }
  }
}

.fill-2{
  backface-visibility: hidden;
  z-index       : 20;
  position      : relative;
  width         : 250px;
  height        : 250px;
  padding       : 0;
  border-radius : 50% 50% 50% 50%;
  overflow      : hidden;
  transform     : rotate(-45deg);
  box-shadow    : 0 0 30px 0 #ff0000 inset;
  
  .gooey-container {
    filter        : url(#gooey-fill-2);
    position      : absolute;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%,-50%);
    width         : 300px;
    height        : 300px;
    padding       : 0;
    margin        : 0;
    box-shadow    : 0 0 0 18px #0000ff inset;
    border-radius : 50% 0 50% 50%; 
    overflow      : hidden;
    
    .level, .bubble {
      background : #ff4081;
    }
    
    .level{
      display          : block;
      margin           : 0 auto;
      position         : absolute;
      top              : 300px;
      left             : 50%;
      width            : 500px; 
      height           : 350px;
      text-align       : center;
      transform-origin : 50% 0;
      transform        : translate3d(-413px, -53px,0) rotate(45deg);
      animation        : fill-level 5s linear infinite;
      box-shadow       : 0 0 100px 0 #0000ff inset, 
                         0 0 200px 0 #0000ff inset;
    }
    @keyframes fill-bubbles{
      0%   { transform : translate3d(-100px,-20px,0) rotate(  0deg)} 
      50%  { transform : translate3d( 100px,-40px,0) rotate(180deg)}
      100% { transform : translate3d(-100px,-20px,0) rotate(360deg)}
    }
    .bubble {
      content       : "";
      display       : inline-block;
      width         : 100px;
      height        : 100px;
      border-radius : 50%;
      transform-origin : 50% 50%;
      transform     : rotate(0deg) translate3d(0,0,0);
      box-shadow    : 0 0 30px 20px #0000ff inset;
    }
    @for $i from 1 through 8 {
      .bubble:nth-child(#{$i}) {
        animation : fill-bubbles 3s*($i / 2) ease .5s/$i infinite;
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////
////////////////////////////// BLACK-HOLE /////////////////////////////
///////////////////////////////////////////////////////////////////////

@keyframes black-hole{
  0%  { transform:scale(1) translate3d( 75px,0,0) }
  50% { transform:scale(4) translate3d( 55px,0,0) }
  100%{ transform:scale(1) translate3d( 75px,0,0) }
}
@keyframes black-hole-rotate{
  0%   { transform: translate(-50%,-50%) rotate(  0deg) skew(3deg)}
  50%  { transform: translate(-50%,-50%) rotate(180deg) skew(0deg)}
  100% { transform: translate(-50%,-50%) rotate(360deg) skew(3deg)}
}

.black-hole{
  backface-visibility: hidden;
  z-index: 20;
  position      : relative;
  overflow      : hidden;
  border-radius : 50%;
  width         : 250px;
  height        : 250px;
  padding       : 0;
  box-shadow    : 0 0 30px 0 #0000ff inset;
  
  .gooey-container {
    overflow      : hidden;
    border-radius : 50%;
    position      : absolute;
    top           : 50%;
    left          : 50%;
    transform     : translate(-50%,-50%) rotate(0deg) skew(5deg);
    filter        : url(#gooey-black-hole);
    width         : 300px;
    height        : 300px;
    padding       : 0;
    margin        : 0;
    box-shadow    : 0 0 0 22px #9900ff inset;
    animation     : black-hole-rotate 5s ease infinite;
    
    .bubble {
      display    : block;
      position   : absolute;
      top        : 50%;
      left       : 50%;
      width      : 100%;
      text-align : right;

      &:before{
        content       : "";
        display       : inline-block;
        background    : #ff4081;
        width         : 100px;
        height        : 100px;
        border-radius : 50%;
        transform     : scale(1) translate3d(75px,0,0);
        box-shadow    : 0 0 10px 0 #0000ff inset,
                        0 0 10px 0 #0000ff inset;
      }
    }
    @for $i from 1 through 6 {
      .bubble:nth-child(#{$i}) {
        transform : translate(-50%,-50%) rotate(60deg*$i);
      }
      .bubble:nth-child(#{$i}):before {
        animation : black-hole 1s*($i) ease .5s*$i infinite;
      }
    }
  }
}

</style>
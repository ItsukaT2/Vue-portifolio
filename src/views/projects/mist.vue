<script setup lang="ts">

</script>

<template>

<!--CUBE-->
<section>
  <svg width="512" height="512" viewBox="0 0 512 512" fill="none" overflow="hidden" xmlns="http://www.w3.org/2000/svg">
<use href="#cube" x="128" y="320" stroke-width="2"  opacity="0.3">
	<animate attributeName="stroke" dur="6s" repeatCount="indefinite"
			 values="#FF9AA2;#FFB7B2;#FFDAC1;#E2F0CB;#B5EAD7;#C7CEEA;#FF9AA2"/>
</use>

<rect width="512" height="512" y="384" fill="url(#fade)"/>
<use href="#cube" x="128" y="128" stroke-width="2">
	<animate attributeName="stroke" dur="6s" repeatCount="indefinite"
			 values="#FF9AA2;#FFB7B2;#FFDAC1;#E2F0CB;#B5EAD7;#C7CEEA;#FF9AA2"/>
</use>

<defs>
	<!-- EVERYTHING TOGETHER --> 
 	<g id="cube">
		<use href="#cube_outline" stroke-linejoin="round" stroke-width="16" fill="url(#stars)"/>
		<use href="#cube_base" stroke-width=".5"/>
		<use href="#cube_outline" stroke-linejoin="round" stroke-width="6" stroke="#141417"/>
	</g>	

	<g id="cube_outline">
		<path>
			<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M10 64 L128 0 L246 64 L246 192 L128 256 L10 192Z;
					M40 20 L216 20 L216 108 L216 236 L40 236 L40 172Z;
					M216 20 L40 20 L40 108 L40 236 L216 236 L216 172Z;
					M246 64 L128 0 L10 64 L10 192 L128 256 L246 192Z"/>
		</path>
	</g>

	<g id="cube_base">
		<path fill="#fff1"> <!-- TOP SIDE -->
		<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M10 64 L128 0 L246 64 L128 128Z;
					M40 20 L216 20 L216 108 L40 108Z;
					M128 0 L246 64 L128 128 L10 64Z"/>
		</path>
		<path> <!-- LEFT SIDE -->
		<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M10 64 L128 128 L128 256 L10 192Z;
					M40 20 L40 108 L40 236 L40 172Z;
					M216 20 L216 108 L216 236 L216 172Z;
					M246 64 L128 128 L128 256 L246 192Z"/>
		<animate attributeName="fill" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.5;0.5;1"
			values="#fff0;#fff0;#fff2;#fff2"/>
		</path>
		<path fill="#407080"> <!-- LEFT SIDE -->
		<animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1"
			keySplines="0.8 0.2 0.6 0.9; 
						0.8 0.2 0.6 0.9"
			values="M246 64 L128 128 L128 256 L246 192Z;
					M216 108 L40 108 L40 236 L216 236Z;
					M128 128 L10 64 L10 192 L128 256Z"/>
			<animate attributeName="fill" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.5;1"
				values="#fff2;#fff1;#fff0"/>
		</path>
	</g>
	<linearGradient id="fade" gradientTransform="rotate(90)">
    	<stop offset="0" stop-color="#14141700"/>
    	<stop offset="0.25" stop-color="#141417ff"/>
    </linearGradient>
	<linearGradient id="sky" gradientTransform="rotate(90)">
    	<stop offset="0.5" stop-color="#141417"/>
    	<stop offset="1" stop-color="#40354a"/>
    </linearGradient>
  
	<!-- STARS PATTERN --> 
	<pattern id="stars" x="0" y="0" width="50%" height="50%" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
		<rect width="256" height="256" fill="url(#sky)"/>
		<use href="#star01" x="24" y="32"  fill="white"/>
		<use href="#star01" x="64" y="96"  fill="#ad9dcb" transform="rotate(90 80 112)"/>
		<use href="#star01" x="224" y="102"  fill="#ad9dcb"/>
		<use href="#star01" x="192" y="112"  fill="#E0E8EA" transform="rotate(90 80 112)"/>
		<use href="#star02" x="16" y="64"  fill="#ad9dcb"/>
		<use href="#star03" x="96" y="16"  fill="#E0E8EA"/>
		<use href="#star04" x="64" y="64"  fill="white"/>
		<use href="#star04" x="8" y="16"  fill="#ad9dcb"/>
		<use href="#star04" x="110" y="96"  fill="#E0E8EA"/>
		<use href="#star02" x="160" y="24"  fill="#ad9dcb"/>
		<use href="#star03" x="196" y="60"  fill="#E0E8EA"/>
		<use href="#star04" x="64" y="212"  fill="white"/>
		<use href="#star04" x="218" y="216"  fill="#ad9dcb"/>
		<use href="#star03" x="228" y="220"  fill="#E0E8EA"/>
		<use href="#star02" x="140" y="128"  fill="#ad9dcb"/>
		<use href="#star03" x="24" y="140"  fill="#E0E8EA"/>
		<use href="#star04" x="95" y="160"  fill="white"/>
		<use href="#star04" x="180" y="128"  fill="#ad9dcb"/>
		<use href="#star03" x="200" y="136"  fill="#E0E8EA"/>
		<use href="#star10" x="120" y="120"  stroke="#E0E8EA"/>
		<use href="#star11" x="48" y="64"  stroke="#ad9dcb"/>
	</pattern>
	<path id="star01" transform="scale(0.5)">
		<animate attributeName="d" dur="3s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
			values="M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z;
					M16 8 Q16 16 32 16 Q16 16 16 24 Q16 16 0 16 Q16 16 16 8Z;
					M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z"/>
	</path>
	<circle id="star02">
		<animate attributeName="r" dur="3s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
			values="0;2;0"/>
	</circle>
	<circle id="star03">
		<animate attributeName="r" dur="6s" repeatCount="indefinite" calcMode="spline"
			keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
			values="3;1;3"/>
	</circle>
	<circle id="star04" r="1"/>

	<path id="star10" stroke-width="2">
		<animate attributeName="d" dur="5s" repeatCount="indefinite" 
			keyTimes="0;0.90;0.97;1"
			keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
			values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"/>
		<animate attributeName="opacity" dur="5s" repeatCount="indefinite"
			keyTimes="0;0.90;0.97;1"
			values="1; 1; 0.6; 0"/>
	</path>
	<path id="star11" stroke-width="3">
		<animate attributeName="d" dur="6s" repeatCount="indefinite" delay="3s"
			keyTimes="0;0.90;0.95;1"
			keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
			values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"/>
		<animate attributeName="opacity" dur="6s" repeatCount="indefinite" delay="3s"
			keyTimes="0;0.90;0.95;1"
			values="1; 1; 0.6; 0"/>
	</path>
</defs>
</svg>
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

body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; 
}
body{
  background-color: #141417;
  display: flex;
  justify-content: center;
  align-items: center; 
}
svg{
  height: 100%;
  width: 100%;
  
}

</style>




<style scoped lang="scss">
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
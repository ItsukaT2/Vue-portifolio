<script setup lang="ts">

</script>

<template>
    <div class="content">

    <section>
    <div class="container">
    <div class="btn"><a href="#">Click Me</a></div>
    <div class="btn"><a href="#">Click Me</a></div>
    <div class="btn"><a href="#">Click Me</a></div>
    <div class="btn"><a href="#">Click Me</a></div>
    <div class="btn"><a href="#">Click Me</a></div>
    <div class="btn"><a href="#">Click Me</a></div>
    </div>
    </section>


    <section>
    <div class="container1">
		<div class="btn1"><a href="#">Read more 1</a></div>
		<div class="btn1"><a href="#" >Read more 2</a></div>
		<div class="btn1"><a href="#" >Read more 3</a></div>
	</div>		
    </section>

    </div>
</template>




<style scoped>
section {
    position:relative;
    margin-top: 150px;
    margin-bottom: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container{
    width:600px;
    align-items:center;
    justify-content:space-around;
    display:flex;
    flex-wrap:wrap;
    }
    .container .btn{
    position:relative;
    width:155px;
    height:50px;
    margin:20px;
    }
    .container .btn a{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(255,255,255,0.05);
    box-shadow:0 15px 35px rgba(0,0,0,0.2);
    border-top:1px solid rgba(255,255,255,0.1);
    border-bottom:1px solid rgba(255,255,255,0.1);
    border-radius:30px;
    color:#fff;
    z-index:1;
    font-weight:500;
    letter-spacing:1;
    text-decoration:none;
    overflow:hidden;
    transition:0.5s;
    backdrop-filter:blur(15px);
    }
    .container .btn:hover a{
    letter-spacing:3px;
    }
    .container .btn a::before{
    content:'';
    position:absolute;
    top:0;
    right:0;
    width:50%;
    height:100%;
    background:linear-gradient(to right, rgba(255,255,255,0.15), transparent);
    transform:skewx(45deg) translatex(0);
    transition:0.5s;
    }
    .container .btn:hover a::before{
    transform:skewx(45deg) translatex(200%);
    }
    .container .btn:before{
    content:'';
    position:absolute;
    left:40%;
    width:30px;
    height:10px;
    transition:translatex(-50%);
    bottom:-5px;
    transition:0.5s;
    background:red;
    transition-delay:0;
    }
    .container .btn:hover::before{
    left:40%;
    bottom:0;
    height:50%;
    width:30px;
    transition-delay:0.5s;
    }
    .container .btn:after{
    content:'';
    position:absolute;
    left:40%;
    width:30px;
    height:10px;
    transition:translatex(-50%);
    top:-5px;
    transition:0.5s;
    background:red;
    transition-delay:0;
    }
    .container .btn:hover:after{
    left:40%;
    top:0;
    height:50px;
    width:30px;
    transition-delay:0.5s;
    }
    .container .btn:nth-child(1)::before,
    .container .btn:nth-child(1)::after{
     background:#ff1f71;
     box-shadow:0 0 5px #ff1f71,
                0 0 15px #ff1f71,
                0 0 30px #ff1f71,
                0 0 60px #ff1f71;
    }
    .container .btn:nth-child(2)::before,
    .container .btn:nth-child(2)::after{
     background:#ff02d5;
     box-shadow:0 0 5px #ff02d5,
                0 0 15px #ff02d5,
                0 0 30px #ff02d5,
                0 0 60px #ff02d5;
    }
    .container .btn:nth-child(3)::before,
    .container .btn:nth-child(3)::after{
     background:#00ff77;
     box-shadow:0 0 5px #00ff77,
                0 0 15px #00ff77,
                0 0 30px #00ff77,
                0 0 90px #00ff77;
    }
    .container .btn:nth-child(4)::before,
    .container .btn:nth-child(4)::after{
     background:red;
     box-shadow:0 0 5px red,
                0 0 15px red,
                0 0 30px red,
                0 0 90px red;
    }
    .container .btn:nth-child(5)::before,
    .container .btn:nth-child(5)::after{
     background:yellow;
     box-shadow:0 0 5px yellow,
                0 0 15px yellow,
                0 0 30px yellow,
                0 0 90px yellow;
    }
    .container .btn:nth-child(6)::before,
    .container .btn:nth-child(6)::after{
     background:blue;
     box-shadow:0 0 5px blue,
                0 0 15px blue,
                0 0 30px blue,
                0 0 90px blue;
    }



/*====OTHER=====*/



.container1 {
	width: 1000px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.container1 .btn1 {
	position: relative;
	top: 0;
	left: 0;
	width: 250px;
	height: 50px;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.container1 .btn1 a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.05);
	box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 30px;
	padding: 10px;
	letter-spacing: 1px;
	text-decoration: none;
	overflow: hidden;
	color: #fff;
	font-weight: 400px;
	z-index: 1;
	transition: 0.5s;
	backdrop-filter: blur(15px);
}
.container1 .btn1:hover a {
	letter-spacing: 3px;
}
.container1 .btn1 a::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
	transform: skewX(45deg) translate(0);
	transition: 0.5s;
	filter: blur(0px);
}
.container1 .btn1:hover a::before {
	transform: skewX(45deg) translate(200px);
}
.container1 .btn1::before {
	content: "";
	position: absolute;
	left: 50%;
	transform: translatex(-50%);
	bottom: -5px;
	width: 30px;
	height: 10px;
	background: #f00;
	border-radius: 10px;
	transition: 0.5s;
	transition-delay: 0.5;
}
.container1 .btn1:hover::before /*lightup button*/ {
	bottom: 0;
	height: 50%;
	width: 80%;
	border-radius: 30px;
}

.container1 .btn1::after {
	content: "";
	position: absolute;
	left: 50%;
	transform: translatex(-50%);
	top: -5px;
	width: 30px;
	height: 10px;
	background: #f00;
	border-radius: 10px;
	transition: 0.5s;
	transition-delay: 0.5;
}
.container1 .btn1:hover::after /*lightup button*/ {
	top: 0;
	height: 50%;
	width: 80%;
	border-radius: 30px;
}
.container1 .btn1:nth-child(1)::before, /*chnage 1*/
.container1 .btn1:nth-child(1)::after {
	background: #ff1f71;
	box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
		0 0 60px #ff1f71;
}
.container1 .btn1:nth-child(2)::before, /* 2*/
.container1 .btn1:nth-child(2)::after {
	background: #2db2ff;
	box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,
		0 0 60px #2db2ff;
}
.container1 .btn1:nth-child(3)::before, /* 3*/
.container1 .btn1:nth-child(3)::after {
	background: #1eff45;
	box-shadow: 0 0 5px #1eff45, 0 0 15px #1eff45, 0 0 30px #1eff45,
		0 0 60px #1eff45;
}


</style>
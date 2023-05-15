<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <br>
    <h1>Projects</h1>
    <section class="content-card projects" id="projects">

        <br><br>
        <div class="col-3 project-list">
          <div class="project-tile">

            <img src="" alt="projectimg1" />
            <div class="overlay">
              <div class="project-description">
                <h3>Backgrounds</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi aperiam voluptate accusamus velit omnis. <a href="" class="link-examples">click here to see</a>
                </p>
              </div>
            </div>
          </div>
          <div class="project-tile">

            <img src="" alt="projectimg2" />
            <div class="overlay">
              <div class="project-description">
                <h3>Buttons</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi aperiam voluptate accusamus velit omnis. <RouterLink class="link-examples" to="/buttons" >click here to see</RouterLink>
                </p>
              </div>
            </div>
          </div>

          <div class="project-tile">

            <img src="" alt="projectimg3" />
            <div class="overlay">
              <div class="project-description">
                <h3>Calendar</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi aperiam voluptate accusamus velit omnis. <a href="" class="link-examples">click here to see</a>
                </p>
              </div>
            </div>
          </div>

          <div class="project-tile">

            <img src="" alt="projectimg4" />
            <div class="overlay">
              <div class="project-description">
                <h3>Card</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi aperiam voluptate accusamus velit omnis. <a href="" class="link-examples">click here to see</a>
                </p>
              </div>
            </div>
          </div>

          <div class="project-tile">

            <img src="" alt="projectimg5" />
            <div class="overlay">
            <div class="project-description">
          <h3>Clocks</h3>
          <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Nisi aperiam voluptate accusamus velit omnis. <a href="" class="link-examples">click here to see</a>
        </p>
       </div>
      </div>
    </div>

    <div class="project-tile">

      <img src="" alt="projectimg6" />
      <div class="overlay">
      <div class="project-description">
      <h3>JS Games</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nisi aperiam voluptate accusamus velit omnis. <a href="" class="link-examples">click here to see</a>
      </p>
      </div>
    </div>
  </div>

  <div class="project-tile">

      <img src="" alt="projectimg7" />
      <div class="overlay">
      <div class="project-description">
      <h3>Logins Froms</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nisi aperiam voluptate accusamus velit omnis. <RouterLink class="link-examples" to="/logins_forms" >click here to see</RouterLink>
      </p>
      </div>
    </div>
  </div>

  <div class="project-tile">

    <img src="" alt="projectimg8" />
    <div class="overlay">
    <div class="project-description">
    <h3>Pages</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Nisi aperiam voluptate accusamus velit omnis. <RouterLink class="link-examples" to="/pages" >click here to see</RouterLink>
    </p>
        </div>
      </div>
    </div>

    <div class="project-tile">

      <img src="" alt="projectimg9" />
      <div class="overlay">
      <div class="project-description">
      <h3>Mist</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nisi aperiam voluptate accusamus velit omnis. <RouterLink class="link-examples" to="/mist" >click here to see</RouterLink>
      </p>
        </div>
      </div>
    </div>

    <div class="project-tile">

      <img src="" alt="projectimg10" />
      <div class="overlay">
      <div class="project-description">
      <h3>Project 10</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nisi aperiam voluptate accusamus velit omnis. <a href="" class="link-examples">click here to see</a>
      </p>
        </div>
      </div>
    </div>

        </div>
        <br>
        <br>
        
      </section>

</div>

</template>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

section {
  font-family: "Montserrat", sans-serif;
  font: bold;
}

h3 {
  color: #fff;
  text-align: left;
}

p {
  color: #fff;
  text-align: left;
}

.link-examples {
  color: #f5ff9c;
  text-decoration: none;
}
.link-examples:hover {
  color: aqua;
  transform: scale(1.1s);
}

.col-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
}
.content {
position: absolute;
top: 100px;
left: 30px;
right: 30px;
bottom: 100px;
opacity: 0;
  animation: slideTop 0.5s ease forwards 0s;
}
.project-list {
  margin: 20px 0;
}

.project-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: var(--light-grey);
  color: transparent;
  width: 350px;
  height: 350px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
}

.project-tile img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: contrast(70%) brightness(110%) grayscale(20%);
}

.overlay {
  background: #af00005e;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 0%;
  height: 100%;
  color: rgb(87, 87, 87);
  z-index: 2;
  transition: 0.5s ease;
}

.project-description {
  line-height: normal;
  max-width: 200px;
  margin: 20px;
  position: absolute;
  left: -250px;
  transition: 0.5s ease;
}

.project-tile:hover .overlay {
  width: 100%;
  cursor: pointer;
  transition: 0.5s ease;
}

.project-tile:hover .project-description {
  left: 0;
  cursor: pointer;
  transition: 0.5s ease;
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

@media screen and (max-width: 1150px) {
  .col-3 {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 775px) {
  .col-3 {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <div id="entry">
      <header class="sticky row">
         <div class="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
            <label for="drawer-checkbox" class="button drawer-toggle"></label>
            <router-link class="button hidden-sm" to="Home">Home</router-link>
            <router-link class="button hidden-sm" to="Blog">Blog</router-link>
            <router-link class="button hidden-sm" to="Contact">Contact</router-link>
         </div>
      </header>
      <input type="checkbox" id="drawer-checkbox">
      <nav class="drawer hidden-md hidden-lg">
         <label for="drawer-checkbox" class="close"></label>
         <h4><a href="#">Home</a></h4>
         <h4><a href="#/projects">Projects</a></h4>
         <h4><a href="#/blog">Blog</a></h4>
         <h4><a href="#/contact">Contact</a></h4>
      </nav>
      <div class="container">
         <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
               <router-view></router-view>
            </div>
         </div>
      </div>
      <footer class="row">
         <div class="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">

         </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

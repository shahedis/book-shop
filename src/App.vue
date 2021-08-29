<template>
  <div id="app">
      <!-- <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link>About</router-link>
        <router-link :to="{name:'signup'}">Sign Up</router-link>
        <router-link>Profile</router-link>
    </div>
    <router-view/> -->
    <!-- <Home></Home> -->
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: { Home },
  name: 'App',
  
}
</script>

<style>
#app{
  font-family: monospace, sans-serif, 'Segoe UI', Tahoma, Verdana;
  text-align: center;
  margin-top: 30px;
}
</style>

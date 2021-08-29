<template>
  <div id="app">
    <div class="links_wrapper">
      <router-link :to="{name: 'home', params:{}}" class="link">Home</router-link>
      <router-link :to="{name: 'signup'}" class="link">Signup</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',  
}
</script>

<style>
#app{
  font-family: monospace, sans-serif, 'Segoe UI', Tahoma, Verdana;
  text-align: center;
  margin-top: 30px;
}
.links_wrapper{
  background: #e4bd50;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.link{
  font-size: 36px;
  text-decoration: none;
  background: azure;
  padding: 8px 16px;
  float: right;
}
</style>

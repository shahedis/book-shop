<template>
  <div id="app">
    <div class="menue_options">
      <div class="links_wrapper">
        <router-link :to="{name: 'home', params:{}}" class="link">Home</router-link>
        <router-link :to="{name: 'signup'}" class="link">Signup</router-link>
      </div>
      <div class="route_buttons">
        <button @click="redirect" class="route_button">Redirect</button>
        <button @click="back" class="route_button">Go Back</button>
        <button @click="forward" class="route_button">Go Forward</button>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',  
  methods:{
    redirect(){
      this.$router.push({name: 'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go()
    }
  }
}
</script>

<style>
#app{
  font-family: monospace, sans-serif, 'Segoe UI', Tahoma, Verdana;
  text-align: center;
  margin-top: 30px;
}
.menue_options{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0px 48px;
}
.links_wrapper{
  background: #e4bd50;
  padding: 20px;
  display: flex;
}
.link{
  font-size: 23px;
  text-decoration: none;
  background: azure;
  padding: 8px 16px;
  float: right;
}
.route_buttons{
  gap: 10px;
  display: flex;
}
.route_button{
  padding: 10px 7px;
  font-size: 14px;
  border-radius: 32px;
  border: 1px solid #e4bd50;
  background: transparent;
  color: #333
}
</style>

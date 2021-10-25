<template>
  <div id="app" :class="[grayBack ? 'gray-theme' : '']">
    <div class="menue_options">
      <div class="links_wrapper">
        <router-link :to="{name: 'home', params:{}}" class="menue_item" @click="grayBack = false" active-class="active">Home</router-link>
        <router-link :to="{name: 'signup'}" class="menue_item" @click="grayBack = true" active-class="active">Signup</router-link>
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
  data(){
    return{
      grayBack: false
    }
  },
  methods:{
    redirect(){
      this.$router.push({name: 'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go()
    },
  }
}
</script>

<style lang="scss">

#app{
  font-family: monospace, sans-serif, 'Segoe UI', Tahoma, Verdana;
  text-align: center;
  padding: 20px 0;
}
.menue_options{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0px 48px;
}
.links_wrapper{
  gap: 5px;
  display: flex;
}
.menue_item{
  font-size: 20px;
  text-decoration: none;
  padding: 7px 13px;
  color: #333;
  border: 1px solid #e4bd50;
  border-radius: 7px;
  background: transparent;
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
.gray-theme{
  background: transparent;
}
.active{
  background: #e4bd50;
}
</style>

<template>
  <div id="app">
    <signupForm></signupForm>
  </div>
</template>

<script>
import SignupForm from './components/SignupForm.vue'
export default {
  components: { SignupForm },
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

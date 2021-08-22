<template>
  <div class="skills_box">
    <ul>
      <li v-for="(data, index) in skills" :key="index">{{index}}. {{data.skill}}</li>
    </ul>
    <p v-if="skills.length >= 1">You have more than 1 skills</p>
    <p v-else>You have less than or equal 1 skill</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
     skills:[
       {'skill': 'css'},
       {'skill': 'javaScript'},
       {'skill': 'html'},
       {'skill': 'python'}
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.skils{
  color: #333;
}
</style>

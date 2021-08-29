<template>
  <h1>{{id}}</h1>
  <!-- <h1>{{book}}</h1> -->
</template>

<script>
// import { onMounted } from '@vue/runtime-core'
// import fetchOneBook from '../composables/fetchOneBook'

export default {
  props:['id']
  // setup(){
  //   const {book, error, loading, getBook} = fetchOneBook()
  //   console.log("sssssssssssssssssss"+this.$route.params.id)

  //   onMounted(getBook(this.$route.params.id))

  //   return{
  //       book,
  //       error,
  //       loading
  //   }
  // }
}
</script>

<style>

</style>
<template>
<div>
  <div>
    <img :src="book.photo"/>
    <h2>{{book.tittle}}</h2>
    <h3>{{book.author}}</h3>
  </div>
  <div>
    <p>{{book.description}}</p>
  </div>
</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import fetchOneBook from '../composables/fetchOneBook'

export default {
  props:['id'],

  setup(props){
    const {book, error, loading, getBook} = fetchOneBook()

    onMounted(getBook(props.id))

    return{
        error,
        loading,
        book
    }
  }
}
</script>

<style>

</style>
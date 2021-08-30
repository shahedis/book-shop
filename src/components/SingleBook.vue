<template>
<div class="single_book_wrapper">
  <div class="single_book_info">
    <img :src="book.photo" class="single_book_img">
    <h2>{{book.tittle}}</h2>
    <h4 style="margin-top: -7px">{{book.author}}</h4>
  </div>
  <div>
    <p style="text-align: left">{{book.description}}</p>
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
.single_book_wrapper{
  padding: 70px;
}
.single_book_info{
  margin-bottom: 50px;
}
.single_book_img{
  width: 200px;
}
</style>
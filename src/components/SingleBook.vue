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
  <div>this is cart : {{carts}}</div>
  <!-- <button @click="addToCarts" :disabled="itemAlreadyInCart" class="addItem">{{itemAlreadyInCart? "Added" : "Add to carts" }}</button> -->
  <button @click="addToCarts" class="addItem">click here</button>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from 'vuex'
// import fetchOneBook from '../composables/fetchOneBook'

export default {
  props:['id'],

  setup(props){

    const store = useStore()

    // const {book, error, loading, getBook} = fetchOneBook()

    const book = store.getters.getProductById(props.id)

    const carts = computed(function(){
      return store.state.carts
    })

    let itemAlreadyInCart = computed(function(){
      let inCart = false
      carts.value.forEach(element => {
        if(element.id === props.id){
          inCart = true
          console.log("added")
        }
      })

      return inCart
    })

    function addToCarts(){
      console.log("carts :  " + this.$store.state.carts);
      console.log("book :  " + book);
      console.log(this);

    }

  

    return{
      book,
      addToCarts,
      itemAlreadyInCart,
      carts
    }
  },
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
.addItem{
  float: left;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #24a224;
  font-size: 15px;
  font-weight: bold;
  background: transparent;
  color: #24a224;
}
</style>
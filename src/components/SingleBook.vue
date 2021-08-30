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
  <div>this is cart : {{cart}}</div>
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
     let book = store.getters.getProductById(props.id)

    let cart = computed(function(){
      return store.state.cart
    })

    let itemAlreadyInCart = computed(function(){
      let inCart = false
      cart.value.forEach(element => {
        if(element.id === props.id){
          inCart = true
          console.log("added")
        }
      })

      return inCart
    })

    // function addToCarts(){
    //   if(!itemAlreadyInCart.value){
    //     store.commit('addToCart', book)
    //   }
    //   else{
    //     alert("Item already added to carts")
    //   }
    // }

    function addToCarts(){
      console.log("cart :  " + this.cart);
      console.log("book :  " + this.book);
    }

    // onMounted(getBook(props.id))

    return{
        // error,
        // loading,
        book,
        addToCarts,
        itemAlreadyInCart,
        cart
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
  margin-top: 23px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #24a224;
  font-size: 15px;
  font-weight: bold;
  background: transparent;
  color: #24a224;
}
</style>
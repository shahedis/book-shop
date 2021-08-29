<template>
  <div>
    <img :src="book.photo" class="book_img">
    <div class="book_info">
        <h2>{{book.tittle}}</h2>
        <h3>{{book.price}}</h3>
    </div>
  </div>
</template>

<script>
export default {
    props: ['book']
}
</script>

<style>
.book_img{
    width: 300px;
    height: 300px;
}
</style>
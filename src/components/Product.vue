<template>
  <div>
    <img :src="product.photo" class="book_img"/>
    <div class="book_info">
        <h3>{{product.tittle}}</h3>
        <h4>${{product.price}}</h4>
    </div>
  </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>
.book_img{
  width: 200px;
  height: 220px;
}
.book_info{
  color: #333;
  text-align: center;
}
</style>
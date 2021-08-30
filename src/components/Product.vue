<template>
  <div>
    <img :src="product.photo" class="book_img">
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
    width: 250px;
    height: 280px;
}
.book_info{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  color: #333;
}
</style>
<template>
  <h1>Vue 3 Learning :)</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
  <div v-if="showBooks">
    <div v-for="(book, index) in books" :key="index" :class="{fav: book.isFav}" class="book" @click="toggleFave(book)">
      <h2>{{book.tittle}}</h2>
      <p>{{book.author}}</p>
    </div>
  </div>
  <button @click="toggleShowBooks">
    <span v-if="!showBooks">showBooks books</span>
    <span v-else>hide books</span>
  </button>
</template>

<script>
export default {
  name: 'Books',
  data(){
    return{
      books:[
        {tittle: 'Her eyes', author: 'Bozorg Alavi', isFav: true},
        {tittle: 'Tuesdays with Moory', author: 'Mich Albom', isFav: false},
        {tittle: '1984', author: 'George Orwell', isFav: false},
        {tittle: 'Death of a saleman', author: 'Artor Miller', isFav: false},
        {tittle: 'Becoming', author: 'Michel Obama', isFav: false},
      ],
      showBooks: true
    }    
  },

  methods:{
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    toggleFave(book){
      book.isFav = !book.isFav
    },
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.focus()
    }
  }
}
</script>

<style scoped>
.fav{
  border: 1px solid tomato !important;
}
.book{
  border: 1px solid #333;
  padding: 4px 23px;
  margin: 35px 0px;
}
</style>

<template>
<div class="books_list_wrapper">
    <router-link
        v-for="book in books" :key="book.id"
        class="books_list"
        :to="{ name: 'bookDetails', params: { id: book.id } }">
        <book-in-list :book="book"/>
    </router-link>
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>

import fetchAllBooks from '../composables/fetchAllBooks'
import { onMounted } from 'vue'
import BookInList from './BookInList.vue'

export default {
    components: {BookInList},
    setup (){
        const {books, error, loading, getBooks} = fetchAllBooks()

        onMounted(getBooks)
        return{
            books,
            error,
            loading
        }
    }

}
</script>

<style scoped>
/* .books_list{
    padding: 20px;
} */
.books_list_wrapper{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 38px;
    padding: 90px 10px;
}
</style>
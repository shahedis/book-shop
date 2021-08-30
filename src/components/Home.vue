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
    components: {
        'book-in-list': BookInList
    },
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
.books_list{
    text-decoration: none;
}
.books_list_wrapper{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 90px 10px;
    gap: 60px 90px;
}
</style>
<template>
<div>
    <div class="book_list">
        <!-- <input type="text" v-model="searchQuery"> -->
        <div v-for="book in books" :key="book.id">
            <book-in-list :book="book"/>
        </div>
        {{matchingBookSearch}}
        {{searchQuery}}
    </div>
</div>
</template>

<script>

import fetchAllBooks from '../composables/fetchAllBooks'
// import bookSearch from '../composables/bookSearch'
import { onMounted } from 'vue'
import BookInList from './BookInList.vue'

export default {
  components: { BookInList },
    props: {
        loading: {
            type: Boolean,
            required: true
        }
    },
    setup (props){
        const {books, error, getBooks} = fetchAllBooks()
        // const {searchQuery, matchingBookSearch} = bookSearch(books)

        onMounted(getBooks)
        console.log(props);
        return{
            books,
            error,
            // searchQuery,
            // matchingBookSearch
        }
    }

}
</script>

<style>
.book_list{
    display: flex;
    flex-direction: row;
    gap: 73px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
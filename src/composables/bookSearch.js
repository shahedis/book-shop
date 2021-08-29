import { computed } from "@vue/runtime-dom"
import { ref } from 'vue'

const bookSearch = (books) =>{
    const searchQuery = ref('')
    const matchingBookSearch = computed(()=>{
        return books.value.filter(book =>{
            return book.tittle.includes(searchQuery.value)
        })
    })
    return{
        searchQuery,
        matchingBookSearch
    }
}

export default bookSearch
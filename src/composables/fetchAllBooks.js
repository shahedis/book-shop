import { ref } from 'vue'
import axios from 'axios'

const fetchAllBooks = ()=>{
    const books = ref([])
    const error = ref(null)
    const loading = ref(true)
    const address = 'http://localhost:3000/books'

    const getBooks= async ()=> {
        await axios.get(address)
        .then(response=>{
            books.value = response.data
        })
        .catch(err=>{
            console.log('-----error-------')
            console.log(err)
            error.value = err
        })
        loading.value = false
    }
    return{
        books,
        error,
        loading,
        getBooks
    }
}



    

export default fetchAllBooks
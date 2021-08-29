import { ref } from "vue"
import axios from 'axios'

const fetchOneBook = () =>{
    const books = {}
    const error = ref(null)
    const book = ref({})
    const loading = ref(true)
    const address = 'http://localhost:3000/books'

    const getBook = async(id) =>{
       axios(address)
       .then(response=>{
            this.books=response.data
            book.value = filterById(books, id)
        })
        .catch(error=>{
            console.log(error)
        })
        loading.value = false
    }

    function filterById(jsonObject, id) {
        return jsonObject.filter(function(jsonObject){
            return (jsonObject['id'] == id);})[id]
    }

    return{
        book,
        error,
        loading,
        getBook
    }
}
export default fetchOneBook

    
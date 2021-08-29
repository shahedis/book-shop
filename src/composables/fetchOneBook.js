import { ref } from "vue"
import axios from 'axios'

const fetchOneBook = () =>{
    let books = null
    const error = ref(null)
    const book = ref({})
    const loading = ref(true)
    const address = 'http://localhost:3000/books'

    const getBook = async(id) =>{
        axios.get(address)
        .then(response=>{
            books = response.data
            books.map(elem => {
                if(elem.id == id){
                    book.value = elem
                    return
                }
            })
        })
        .catch(err=>{
            console.log(err)
            error.value = err
        })

        loading.value = false
    }

    return{
        book,
        error,
        loading,
        getBook
    }
}
export default fetchOneBook

    
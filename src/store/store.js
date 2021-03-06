import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
    state: {
        products: [
            {
                id: 0,
                tittle: "Animal Farm",
                author: "George Orwell",
                photo: "../assets/Books-Photo/animal-farm.jpg",
                price: 2,
                description: "Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945.[1][2] The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, the rebellion is betrayed, and the farm ends up in a state as bad as it was before, under the dictatorship of a pig bookNamed Napoleon.",
                exist: false,
                tags: [
                    "story",
                    "George-Orwell"
                ],
                comments: [
                    {
                        commentId: 0,
                        commentDesc: "good",
                        commentAuthor: "sahar"
                    },
                    {
                        commentId: 1,
                        commentDesc: "bad",
                        commentAuthor: "sadaf"
                    }
                ],
                rate:0
            },
            {
                id: 1,
                tittle: "Becoming",
                author: "Michelle Obama",
                photo: "../assets/Books-Photo/becoming.jpg",
                price: 5,
                description: "Becoming is the memoir of former First Lady of the United States Michelle Obama, published in 2018. Described by the author as a deeply personal experience, the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother",
                exist: false,
                tags: [
                    "biograph",
                    "Michelle-Obama"
                ],
                comments: [
                    {
                        commentId: 0,
                        commentDesc: "good",
                        commentAuthor: "sahar"
                    },
                    {
                        commentId: 1,
                        commentDesc: "bad",
                        commentAuthor: "sadaf"
                    }
                ],
                rate:0
            },
            {
                id: 2,
                tittle: "The Catcher in the Rye",
                author: "Jerome David Salinger",
                photo: "../assets/Books-Photo/the-catcher-in-the-rye.jpg",
                price: 6,
                description: "The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945???1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society. It has been translated widely.",
                exist: false,
                tags: [
                    "classics",
                    "fiction",
                    "J.D-Salinger"
                ],
                comments: [
                    {
                        commentId: 0,
                        commentDesc: "good",
                        commentAuthor: "sahar"
                    },
                    {
                        commentId: 1,
                        commentDesc: "bad",
                        commentAuthor: "sadaf"
                    }
                ],
                rate:0
            },
            {
                id: 3,
                tittle: "Tuesdays With Morrie",
                author: "Mitch Albom",
                photo: "../assets/Books-Photo/tuesdays-with-morrie.jpg",
                price: 3,
                description: "Tuesdays with Morrie is a memoir[1] by American author Mitch Albom[2] about a series of visits Albom made to his former sociology professor Morrie Schwartz, as Schwartz gradually dies of ALS. The book topped the New York Times Non-Fiction Best-Sellers List for 23 combined weeks in 2000, and remained on the New York Times best-selling list for more than four years after.[3] In 2006, Tuesdays with Morrie was the bestselling memoir of all time.",
                exist: true,
                tags: [
                    "story",
                    "Mitch-Albom"
                ],
                comments: [
                    {
                        commentId: 0,
                        commentDesc: "good",
                        commentAuthor: "sahar"
                    },
                    {
                        commentId: 1,
                        commentDesc: "bad",
                        commentAuthor: "sadaf"
                    }
                ],
                rate:0
            },
            {
                id: 4,
                tittle: "1984",
                author: "George Orwell",
                photo: "../assets/Books-Photo/1984.jpg",
                price: 4,
                description: "Nineteen Eighty-Four, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.[2][3] Orwell, himself a democratic socialist, modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany.[2][3][4] More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.",
                exist: true,
                tags: [
                    "story",
                    "social science fiction",
                    "George-Orwell"
                ],
                comments: [
                    {
                        commentId: 0,
                        commentDesc: "good",
                        commentAuthor: "sahar"
                    },
                    {
                        commentId: 1,
                        commentDesc: "bad",
                        commentAuthor: "sadaf"
                    }
                ],
                rate:0
            }
        ],
        carts:[
            {
                id:"3",
                name: "ddd"
            }
        ],
        user: {}
    },
    getters:{
        productsLength(state){
            return state.products.length
        },
        existProducts(state){
            return state.products.filter(product => product.exist)
        },
        existProductsLength(state, getters){
            return getters.existProducts.length
        },
        getProductById: (state) => (id) =>{
            return state.products.find(product => product.id == id)
        },
        getAllOfCarts(state){
            return state.carts
        }
    },
    mutations: {
        printProduct(state){
            state.carts.push("yes")
            console.log("yess")
        },
        addToCart(state, item){
            item.quantity = 1;
            state.carts.push(item)
        },
        updateCart(state, updatedItem){
            state.carts = state.carts.map((cartItem)=>{
                if(cartItem.id == updatedItem.id){
                    return updatedItem
                }
                return cartItem
            })
        },
        removeCart(state, item){
            state.carts = state.carts.filter((cartItem =>{
                return cartItem.id != item.id
            }))
        },
        SET_USER(state, user){
            state.user = user
        },
        SET_PRODUCTS(state, products){
            state.products = products
        },
    },
    actions: {
        printProduct(context){
            context.commit('printProduct')
        },
        GET_USER({commit}) {
            axios.get('http://localhost:3000/user')
            .then(response => {
                commit('SET_USER', response.data)
            })
        },
        GET_PRODUCTS({commit}) {
            axios.get('http://localhost:3000/books')
            .then(response => {
                commit('SET_PRODUCTS', response.data)
            })
        }
    }
})
<template>
<h1>{{productsCount}} books</h1>
<div class="books_list_wrapper">
    <router-link v-for="product in products" :key="product.id" class="books_list" :to="{ name: 'bookDetails', params: { id: product.id } }">
        <Product :product="product" />
    </router-link>
    <div class="content">
        <router-view></router-view>
    </div> 
</div>
</template>

<script>

import { computed } from 'vue'
import {useStore} from 'vuex'
import Product from './Product.vue'

export default {
    components: {
        Product
    },

    setup (){

        const store = useStore()

        let products = computed(function () {
        return store.state.products
        });

        let productsCount = store.getters.productsLength

        return{
            products,
            productsCount,
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
    padding: 20px 10px;
    gap: 40px 65px;
}
</style>
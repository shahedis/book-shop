<template>
<h3>There are {{productsCount}} books</h3>
<div class="books_list_wrapper">
    <router-link v-for="product in products" :key="product.id" class="books_list" :to="{ name: 'bookDetails', params: { id: product.id } }">
    </router-link>
    <div class="content">
        <router-view></router-view>
    </div> 
</div>
</template>

<script>

import { computed } from 'vue'
import {useStore} from 'vuex'

export default {
    components: {
    },

    setup (){
        const store = useStore()
        const productsCount = store.getters.productsLength
        
        const products = computed(() => store.state.products)

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
    padding: 30px 10px;
    gap: 20px 65px;
}

</style>
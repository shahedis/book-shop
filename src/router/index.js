import { createRouter, createWebHistory } from 'vue-router'
import SignupForm from '../components/SignupForm.vue'
import SingleBook from '../components/SingleBook.vue'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupForm
    },
    {
        path: '/book/:id',
        name: 'bookDetails',
        component: SingleBook,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
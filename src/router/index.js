import { createRouter, createWebHistory } from 'vue-router'
import SignupForm from '../components/SignupForm.vue'

const routes = [
    {
        path: '/',
        name: 'Signup',
        component: SignupForm
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import SignupForrm from '../components/SignupForrm.vue'

const rutes = [
    {
        path: '/',
        name: 'Signup',
        component: SignupForrm
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
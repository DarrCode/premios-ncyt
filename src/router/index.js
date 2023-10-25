import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import middleware from './middleware'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        beforeEnter: middleware.verificador,
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/auth/LoginView.vue')
    },
    {
        path: '/users',
        name: 'users',
        beforeEnter: middleware.admin,
        component: () => import ( /* webpackChunkName: "about" */ '@/views/users/UsersView.vue')
    },

    {
        path: '/jury',
        name: 'jury',
        //beforeEnter: middleware.jurado,
        component: () => import ( /* webpackChunkName: "about" */ '@/views/jury/JuryView.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
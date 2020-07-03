import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/portfolio',
        name: 'Portfolio',
        // route level code-splitting
        // this generates a separate chunk (projects.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "projects" */ '../views/Portfolio.vue')
    },

    {
        path: '/proposal',
        name: 'Proposal',
        // route level code-splitting
        // this generates a separate chunk (proposal.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "proposal" */ '../views/Proposal.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

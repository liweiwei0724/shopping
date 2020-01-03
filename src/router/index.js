import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comment from "../views/Comment.vue"

Vue.use(VueRouter)

const routes = [
    //整个项目底部栏公共路由
    {
        path: '/',
        component: Comment,
        children: [{
            path: '',
            name: "home",
            component: Home,
        }]

    },

    {
        path: '/category',
        component: Comment,
        children: [{
            path: '',
            name: "category",
            component: () =>
                import ('../views/Category')
        }, ]
    },
    {
        path: '/my',
        component: Comment,
        children: [{
            path: '',
            name: "my",
            component: () =>
                import ('../views/My')
        }]
    },
    {
        path: '/shoppingcart',
        component: Comment,
        children: [{
            path: '',
            name: "shoppingcart",
            component: () =>
                import ('../views/ShoppingCart')
        }]
    },

    {
        path: "/login",
        name: 'login',
        component: () =>
            import ("../views/Login")
    },

    {
        path: "/person",
        name: 'person',
        component: () =>
            import ("../components/My/person")
    },
    {
        path: "/details",
        name: 'details',
        component: () =>
            import ("../views/Details")
    },
    {
        path: "/listcities",
        name: 'listcities',
        component: () =>
            import ("../components/Listcities/Listcities")
    },



















    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
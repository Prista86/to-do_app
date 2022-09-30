import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/completati',
        name: 'completati',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Completati.vue')
        }
    },
    {
        path: '/Login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/Login.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
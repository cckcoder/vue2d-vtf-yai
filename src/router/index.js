import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import ProfileA from '../views/LprofileA.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Lbregist.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Lblogin.vue')
  },

  {
    path: '/main',
    name: 'Main',
    component: Main
  },

  {
    path: '/profilea',
    name: 'ProfileA',
    component: ProfileA
  },


  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

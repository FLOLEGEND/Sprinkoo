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
  // {
  //   path: '/About',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // },
  {
    path:'/Login',
    name:'Login',
    component:()=>import('../components/UserInfo/Login.vue')
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component:()=>import('../components/UserInfo/SignUp.vue')
  },
  {
    path:'/SignInPasswordSet',
    name:'SignInPasswordSet',
    component:()=>import('../components/UserInfo/SignInPasswordSet.vue')
  },
  {
    path:'/ForgetPassword',
    name:'ForgetPassword',
    component:()=>import('../components/UserInfo/ForgetPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

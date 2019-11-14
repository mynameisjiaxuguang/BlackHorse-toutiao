import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/index.vue'     完整路径，下面为简写方式
import Home from '../views/home'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // 主页 一级路由
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // 登录页 一级路由
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

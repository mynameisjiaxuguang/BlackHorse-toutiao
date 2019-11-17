import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/index.vue'     完整路径，下面为简写方式
import Layout from '@/views/layout'
import Login from '@/views/login'
import Home from '@/views/home'
import Article from '@/views/article'
import Publish from '@/views/publish'
import NProgress from 'nprogress'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/layout'
  // },
  // 主页 一级路由
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/publish',
        component: Publish
      }
    ]
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
// to去哪里，from来自哪里，next方法用于路由放行
// router.beforeEach((to,from,next) => {
//   // 开启顶部导航进度条
//   NProgress.start()
//    console.log('所有页面的访问都要经过这里');
//    next(false)
//   if (to.path ===  '/login') {
//     next()
//     return
//   }
//   const token = window.localStorage.getItem('user-token')
//   if(token){
//     next()
//   } else {
//     next('/login')
//   }
// })
// 结束顶部导航进度条
router.afterEach((to,from) => {
  NProgress.done()
})
export default router

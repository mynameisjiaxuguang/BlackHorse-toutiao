import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from 'axios'
import 'nprogress/nprogress.css'
// 设置axios常态地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   console.log('请求拦截器');
//   return config
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error)
// });
// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   console.log('响应拦截器');
  
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response
// }, function (error) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error)
// });
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

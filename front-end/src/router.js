import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import AdminHome from './views/AdminHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
        path: '/admin-home',
        name: 'admin-home',
        component: AdminHome
      },
  ]
})
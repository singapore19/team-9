import Vue from 'vue'
import Router from 'vue-router'
import AdminHome from './views/AdminHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin-home',
        component: AdminHome
    },
    {
        path: 'admin-home',
        name: 'admin-home',
        component: AdminHome
      },
  ]
})
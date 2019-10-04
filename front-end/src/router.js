import Vue from 'vue'
import Router from 'vue-router'
import AdminHome from './views/AdminHome'
import UserForm from './views/UserForm'

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
    {
      path: '/userform',
      name: 'userform',
      component: UserForm
    }
  ]
})
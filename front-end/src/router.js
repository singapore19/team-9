import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import AdminHome from './views/AdminHome'
import UserForm from './views/UserForm'
import UserHome from './views/UserHome'
import UserHome2 from './views/UserHome2'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
        component: Login
    },
    {
        path: '/adminhome',
        name: 'adminhome',
        component: AdminHome
      },
    {
      path: '/userform',
      name: 'userform',
      component: UserForm
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: UserHome
    },
    {
      path: '/userhome2',
      name: 'userhome2',
      component: UserHome2
    }
  ]
})
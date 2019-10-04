import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import AdminHome from './views/AdminHome'
import UserForm from './views/UserForm'
import DriverHome from './views/driverhome'

Vue.use(Router);

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
          path: '/driver',
          name: 'driver',
          component: DriverHome
      }
  ]
})
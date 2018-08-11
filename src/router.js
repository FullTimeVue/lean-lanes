import Vue from 'vue'
import Router from 'vue-router'
import { LoadingBar } from 'iview'
import Home from './views/Home.vue'

Vue.use(Router)

const isLoginPage = (route) => String(route).toLowerCase() === 'login'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  let params = {}

  LoadingBar.start()

  // Order of ternaries is important
  // because if session token present
  // then we unset params and let router
  // to transition further otherwise
  // redirection params will take place
  params = isLoginPage(to.name) ? {} : { name: 'login' }
  params = token ? {} : params

  // Finally check if we already
  // authenticated and in login page
  // and if so then redirect to homepage
  if (token && isLoginPage(to.name)) {
    params = ({name: 'home'})
  }

  next(params)
})

router.afterEach((to, from, next) => { // eslint-disable-line no-unused-vars
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router

import Vue from 'vue'
import Logo from '@/components/Logo.vue'
import NavBar from '@/components/NavBar.vue'
import AccountMenu from '@/components/AccountMenu.vue'

export default () => {
  Vue.component('logo', Logo)
  Vue.component('nav-bar', NavBar)
  Vue.component('account-menu', AccountMenu)
}

import Vue from 'vue'
import Logo from '@/components/Logo.vue'
import NavBar from '@/components/NavBar.vue'
import AccountMenu from '@/components/AccountMenu.vue'
import BoardItem from '@/components/boards/BoardItem.vue'
import BoardList from '@/components/boards/BoardList.vue'
import ErrorMessage from '@/components/error-boundaries/ErrorMessage.vue'

export default () => {
  Vue.component('logo', Logo)
  Vue.component('nav-bar', NavBar)
  Vue.component('account-menu', AccountMenu)

  // Board components
  Vue.component('board-item', BoardItem)
  Vue.component('board-list', BoardList)

  // Error handler components
  Vue.component('error-message', ErrorMessage)
}

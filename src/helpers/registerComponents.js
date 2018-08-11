import Vue from 'vue'
import Logo from '@/components/Logo'
import NavigationBar from '@/components/NavigationBar'

export default () => {
  Vue.component('logo', Logo)
  Vue.component('nav-bar', NavigationBar)
}

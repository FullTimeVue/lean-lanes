import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'
import registerComponents from '@/helpers/registerComponents'
import registerDirectives from '@/directives'

import './registerServiceWorker'

import iview from 'iview'
import 'iview/dist/styles/iview.css'

registerComponents()
registerDirectives()

Vue.use(iview)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

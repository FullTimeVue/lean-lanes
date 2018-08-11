import iView from 'iview/dist/iview.min'
import Vue from 'vue'
import registerComponents from '@/helpers/registerComponents'
import VueI18n from 'vue-i18n'

Vue.use(iView)
Vue.use(VueI18n)

registerComponents()

import Vue from 'vue'
import VueI18n from 'vue-i18n'

import axios from 'axios'
import { locale } from 'iview'
import enUS from 'iview/dist/locale/en-US'

import en from './en'

export const EN = 'en-US'
export const L_KEY = 'locale'

Vue.use(VueI18n)

const messages = {
  [EN]: { ...en, ...enUS }
}

const i18n = new VueI18n({
  locale: EN,
  fallbackLocale: EN,
  messages
})

// Set default locale
locale(messages[EN])

// export locale setter
export function setLocale(lang = EN) {
  i18n.locale = lang
  Vue.config.lang = lang

  locale(messages[lang])

  localStorage.setItem(L_KEY, lang)

  // Set Accept-Language for requests
  axios.defaults.headers.common['Accept-Language'] = lang

  // Update HTML with selected language option
  document.querySelector('html').setAttribute('lang', lang)
}

export default i18n

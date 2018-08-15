import Vue from 'vue'

export default function registerDirectives() {
  Vue.directive('auto-focus', {
    inserted: el => el.focus()
  })
}

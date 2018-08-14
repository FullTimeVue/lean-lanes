import Vue from 'vue'

export function registerDirectives() {
  Vue.directive('auto-focus', {
    inserted: el => el.focus()
  })
}

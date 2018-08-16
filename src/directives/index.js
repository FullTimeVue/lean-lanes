import Vue from 'vue'
import autoFocus from './auto-focus'

export default function registerDirectives() {
  Vue.directive(autoFocus.name, autoFocus.options)
}

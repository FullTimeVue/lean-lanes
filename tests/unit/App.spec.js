import { mount, createLocalVue } from '@vue/test-utils'
import Router from 'vue-router'
import App from '@/App.vue'
import i18n from '@/locale'

const localVue = createLocalVue()

localVue.use(Router)

describe('App.vue', () => {
  const router = new Router()

  const wrapper = mount(App, {
    i18n,
    localVue,
    router
  })

  // Probably it makes no sense to test it this way
  // but once App.vue will have more duties we can
  // add related test cases.
  it('renders entry page', () => {
    expect(wrapper.contains('#app')).toBe(true)
  })
})

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

  it('renders entry page', () => {
    expect(wrapper.contains('#app')).toBe(true)
  })
})

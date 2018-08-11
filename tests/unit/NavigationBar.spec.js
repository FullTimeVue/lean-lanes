import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import i18n from '@/locale'
import NavigationBar from '@/components/NavigationBar.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NavigationBar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NavigationBar, {
      i18n,
      localVue
    })
  })

  it('renders navigation bar', () => {
    expect(wrapper.contains('.nav')).toBe(true)
  })

  it('renders navigation bar with menu items', () => {
    expect(wrapper.contains('.nav__menu')).toBe(true)
  })
})

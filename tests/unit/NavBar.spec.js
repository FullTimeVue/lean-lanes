import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import i18n from '@/locale'
import NavBar from '@/components/NavBar.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('NavBar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NavBar, {
      i18n,
      localVue
    })
  })

  it('renders navigation bar', () => {
    expect(wrapper.contains('.nav')).toBe(true)
  })

  it('renders navigation bar with logo', () => {
    expect(wrapper.contains('.nav__logo')).toBe(true)
  })

  it('renders navigation bar with menu items', () => {
    expect(wrapper.contains('.nav__menu')).toBe(true)
  })
})

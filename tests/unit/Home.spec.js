import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import i18n from '@/locale'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Home, {
      i18n,
      localVue,
      stubs: ['router-link']
    })
  })

  it('renders home page with navigation bar', () => {
    expect(wrapper.contains('.home > .nav')).toBe(true)
  })
})

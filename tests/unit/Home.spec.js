import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import storeStubs from '../stubs/store'
import i18n from '@/locale'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store(storeStubs)

    wrapper = mount(Home, {
      i18n,
      store,
      localVue,
      stubs: ['router-link']
    })
  })

  it('renders home page with navigation bar', () => {
    expect(wrapper.contains('.home > .nav')).toBe(true)
  })

  it('renders all available boards', () => {

  })
})

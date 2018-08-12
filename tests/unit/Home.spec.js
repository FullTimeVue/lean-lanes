import { shallowMount, createLocalVue } from '@vue/test-utils'
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
    wrapper = shallowMount(Home, {
      i18n,
      store,
      localVue
    })
  })

  // TODO: investigate on how to provide all dependencies to sub-components
  it('renders all available boards list', () => {
    expect(wrapper.contains('board-list-stub')).toBe(true)
  })
})

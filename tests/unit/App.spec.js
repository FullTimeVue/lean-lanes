import { shallowMount, createLocalVue } from '@vue/test-utils'
import storeStubs from '../stubs/store'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from '@/App.vue'

const localVue = createLocalVue()

localVue.use(Router)
localVue.use(Vuex)

describe('App.vue', () => {
  const store = new Vuex.Store(storeStubs)
  const wrapper = shallowMount(App, {
    localVue,
    store,
    stubs: ['router-link']
  })

  // Probably it makes no sense to test it this way
  // but once App.vue will have more duties we can
  // add related test cases.
  it('renders entry page', () => {
    expect(wrapper.contains('#app')).toBe(true)
  })
})

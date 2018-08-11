import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import i18n from '@/locale'
import AccountMenu from '@/components/AccountMenu.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AccountMenu.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AccountMenu, {
      i18n,
      localVue
    })
  })

  it('renders navigation bar', () => {
    expect(wrapper.contains('.account-menu')).toBe(true)
  })
})

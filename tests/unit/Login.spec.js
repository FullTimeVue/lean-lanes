import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import Login from '@/views/Login.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Login.vue', () => {
  let wrapper
  let actions
  let store

  beforeEach(() => {
    actions = {
      login: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        auth: {
          state: {},
          actions
        }
      }
    })

    wrapper = mount(Login, {
      store,
      localVue
    })
  })

  it('renders login form', () => {
    const el = wrapper.find('.login__submit')
    expect(el.text()).toMatch('Login')
  })

  it('login form title presents', () => {
    const el = wrapper.find('.login__title')
    expect(el.text()).toMatch('Lean Lanes')
  })

  it('calls related Vuex action', () => {
    const el = wrapper.find('.login__submit')
    el.trigger('click')
    expect(actions.login).toHaveBeenCalled()
  })
})

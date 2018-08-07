import { mount, createLocalVue } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Login, {
      localVue: createLocalVue()
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
})

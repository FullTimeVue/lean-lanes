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
    const el = wrapper.find('.login')
    expect(el.text()).toMatch('Login')
  })
})

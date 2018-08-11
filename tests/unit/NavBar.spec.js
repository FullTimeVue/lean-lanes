import { createLocalVue, mount } from '@vue/test-utils'
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
      localVue,
      stubs: ['router-link']
    })
  })

  it('renders navigation bar', () => {
    expect(wrapper.contains('.nav')).toBe(true)
  })

  it('renders navigation bar with logo', () => {
    expect(wrapper.contains('.nav .nav__link__logo')).toBe(true)
  })

  it('navigation uses tiny logo', () => {
    expect(wrapper.contains('.logo--tiny')).toBe(true)
  })
})

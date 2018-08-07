import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo.vue', () => {
  it('renders logo', () => {
    const wrapper = shallowMount(Logo)
    const el = wrapper.find('.logo')
    expect(el.is('div')).toBe(true)
  })

  it('renders small logo', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        small: true
      }
    })

    const el = wrapper.find('.logo--small')
    expect(el.is('div')).toBe(true)
  })

  it('renders inline logo', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        inline: true
      }
    })

    const el = wrapper.find('.logo--inline')
    expect(el.is('div')).toBe(true)
  })

  it('renders centered logo', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        centered: true
      }
    })

    const el = wrapper.find('.logo--centered')
    expect(el.is('div')).toBe(true)
  })

  it('renders logo with all modifiers', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        small: true,
        centered: true,
        inline: true
      }
    })

    expect(wrapper.find('.logo--small').is('div')).toBe(true)
    expect(wrapper.find('.logo--centered').is('div')).toBe(true)
    expect(wrapper.find('.logo--inline').is('div')).toBe(true)
  })
})

import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo.vue', () => {
  it('renders logo', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper.contains('.logo')).toBe(true)
  })

  it('renders small logo', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        size: 'small'
      }
    })

    expect(wrapper.contains('.logo--small')).toBe(true)
  })

  it('renders normal logo if size is unknown', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        size: 'super-size'
      }
    })

    expect(wrapper.contains('.logo--normal')).toBe(true)
  })

  it('renders inline logo', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        inline: true
      }
    })

    expect(wrapper.contains('.logo--inline')).toBe(true)
  })

  it('renders centered logo', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        centered: true
      }
    })

    expect(wrapper.contains('.logo--centered')).toBe(true)
  })

  it('renders logo with all modifiers', () => {
    const wrapper = shallowMount(Logo, {
      propsData: {
        size: 'small',
        centered: true,
        inline: true
      }
    })

    expect(wrapper.contains('.logo--small')).toBe(true)
    expect(wrapper.contains('.logo--centered')).toBe(true)
    expect(wrapper.contains('.logo--inline')).toBe(true)
  })
})

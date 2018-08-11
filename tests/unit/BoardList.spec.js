import { mount, createLocalVue } from '@vue/test-utils'

import storeStubs from '../stubs/store'
import i18n from '@/locale'
import BoardList from '@/components/boards/BoardList.vue'

const localVue = createLocalVue()

describe('BoardList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BoardList, {
      i18n,
      localVue,
      propsData: {
        boards: storeStubs.modules.boards.state.boards
      },
      stubs: ['router-link']
    })
  })

  it('renders board-list', () => {
    expect(wrapper.contains('.board-list')).toBe(true)
  })

  it('renders all available board items', () => {
    expect(wrapper.contains('.board-item')).toBe(true)
    expect(wrapper.findAll('.board-item').length).toBe(2)

    // Get first board and check its name
    expect(wrapper.find('.board-item').text()).toBe('Random Board')
  })
})

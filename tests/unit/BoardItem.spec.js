import { mount, createLocalVue } from '@vue/test-utils'

import storeStubs from '../stubs/store'
import i18n from '@/locale'
import BoardItem from '@/components/boards/BoardItem.vue'

const localVue = createLocalVue()

describe('BoardItem.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BoardItem, {
      i18n,
      localVue,
      propsData: {
        board: storeStubs.modules.boards.state.boards[0]
      },
      stubs: ['router-link']
    })
  })

  it('renders board-item', () => {
    expect(wrapper.contains('.board-item')).toBe(true)
  })

  it('renders all available board named "Random Board"', () => {
    expect(wrapper.text()).toBe('Random Board')
  })
})

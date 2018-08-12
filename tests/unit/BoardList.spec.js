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
})

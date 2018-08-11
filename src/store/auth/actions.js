import { SAVE_TOKEN } from './action-types'

export default {
  login({commit}, onSuccess) {
    commit(SAVE_TOKEN, 'dummy-token')

    setTimeout(() => {
      onSuccess()
    }, 2000)
  }
}

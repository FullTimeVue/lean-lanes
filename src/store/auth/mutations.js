import { SAVE_TOKEN } from './action-types'

export default {
  [SAVE_TOKEN] (state, token) {
    state.token = token

    localStorage.setItem('token', 'dummy-token')
  }
}

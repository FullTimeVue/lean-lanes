import Vue from 'vue'
import Vuex from 'vuex'

// Store modules
import boot from './boot'
import auth from './auth'
import boards from './boards'
import lanes from './lanes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    boot,
    auth,
    boards,
    lanes
  }
})

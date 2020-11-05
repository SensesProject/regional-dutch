import { isString } from 'lodash'

const state = () => {
  return {
    loop: undefined,
  }
}

const mutations = {
  SET_LOOP (state, loop) {
    state.loop = isString(loop) ? loop : undefined
    console.log(state.loop)
  }
}

const actions = {
  setLoop ({ commit }, loop) {
    commit('SET_LOOP', loop)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

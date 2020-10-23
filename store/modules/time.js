const state = () => {
  return {
    data: {
      // 2005, 2010, 2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090, 2100
      'SSP2': [1, 1.05, 1.11, 1.14, 1.14, 1.13, 1.11, 1.09, 1.07, 1.05, 1.03],
      'SSP1_SPA1_450': [1, 1.05, 1.02, 0.94, 0.87, 0.81, 0.74, 0.67, 0.6, 0.53, 0.47],
      'SSP2_SPA2_450': [1, 1.05, 1.12, 1.19, 1.23, 1.28, 1.28, 1.29, 1.29, 1.3, 1.3]
    },
    ssp: false
  }
}

const mutations = {
  SET_SSP (state, ssp) {
    state.ssp = ssp
  }
}

const actions = {
  setSSP ({ commit }, ssp) {
    commit('SET_SSP', ssp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

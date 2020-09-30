import { has, get, set, isUndefined, isNaN, forEach, round, range, map } from 'lodash'

const factors = [
  [1,-0.6,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,-0.5,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,-0.5,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,-0.5,0,0,1,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0.5,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0.5,0,0.5,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0.5,-0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0.2,0,0.2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0.5,0,0,0,0,0,0,0.5,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

const DEFAULTS = {
  drivers: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

const state = () => {
  return {
    drivers: DEFAULTS.drivers,
    hover: null
  }
}

const getters = {
  data: (state) => {
    const LOOPS = 10
    const DRIVERS = state.drivers.length

    const lines = [state.drivers]
    for (let l = 1; l < LOOPS; l++) {
      const ref = lines[l - 1]
      const line = []

      for (let n = 0; n < DRIVERS; n++) {
        let value = 0

        for (let d = 0; d < DRIVERS; d++) {
          value += factors[d][n] * ref[d]
        }

        line.push(round(value, 3))
      }

      lines.push(line)
    }
    return lines
  },
  values: (state, getters) => {
    return map(range(14), (index) => {
      return map(getters.data, (row) => {
        return row[index]
      })
    })
  }
}

const mutations = {
  TOGGLE_DRIVER (state, index) {
    state.drivers.splice(index, 1, state.drivers[index] ? 0 : 1);
  },
  HOVER_DRIVER (state, index) {
    state.hover = index
  }
}

const actions = {
  toggleDriver ({ state, commit }, index) {
    commit('TOGGLE_DRIVER', index)
  },
  hoverDriver ({ commit }, index) {
    commit('HOVER_DRIVER', index)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

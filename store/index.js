import Vue from 'vue'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
import step from './modules/step'
import driver from './modules/driver'
import vision from './modules/vision'

Vue.use(Vuex)
Vue.use(VTooltip)

export const modules = {
  step,
  driver,
  vision
}

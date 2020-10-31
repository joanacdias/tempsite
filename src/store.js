import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mouseHoverElement: '',
  },
  mutations: {
    applyMouseHoverElement(state, element) {
      state.mouseHoverElement = element;
    }
  }
})
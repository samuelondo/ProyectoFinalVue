import { createStore } from 'vuex'

export default createStore({
  state: {
    validado: false
  },
  getters: {
    validar(state){
      return state.validado
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

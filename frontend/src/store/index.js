import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ColorNavegacion: null,
    ColorNavegacionFondo: null,
    oscuro:true
  },
  mutations: {
    SetColorNavegation(state, payload) {
      state.ColorNavegacion = payload
    }, SetColorNavegationFondo(state, payload) {
      state.ColorNavegacionFondo = payload
    },
    SetOscuro(state, payload){
      state.oscuro = payload
    }
  },
  actions: {
    SeleccionarColor({commit},payload){
      console.log(payload);
      let color = payload
      commit('SetColorNavegation',color)
      
    }, 
    SeleccionarColorFondo({commit},payload){
      console.log(payload);
      let colorfondo = payload
      commit('SetColorNavegationFondo',colorfondo)
      
    },
    modoOscuro({commit},payload){
      console.log(payload);
      let colorOscuro = payload
      commit('SetOscuro',colorOscuro)
      
    },
  },
  modules: {
  }
})


    // itemsNavegacion: [
    //   "white",
    //   "red",
    //   "purple ",
    //   "purple darken-1",
    //   "blue",
    //   "light-blue",
    //   "lime",
    //   "yellow accent-2",
    //   "black",
    //   "deep-orange"
    // ]
   

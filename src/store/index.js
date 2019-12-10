import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerLeft: false,
    drawerRight: false,
    subDrawerRight: false,
    subDrawerLeft: false,
  },
  getters:{
    drawerLeft(state){
      return state.drawerLeft
    },
    drawerRight(state){
      return state.drawerRight
    },
    subDrawerRight(state){
      return state.subDrawerRight
    },
    subDrawerLeft(state){
      return state.subDrawerLeft
    },
  },
  mutations: {
    changeDrawerLeft(state, payload){
      if(payload === true || payload === false){
        state.drawerLeft = payload
      }else{
        state.drawerLeft = !state.drawerLeft
      }
    },
    changeDrawerRight(state, payload){
      if(payload === true || payload === false){
        state.drawerRight = payload
      }else{
        state.drawerRight = !state.drawerRight
      }
    },
    changeSubDrawerRight(state, payload){
      state.subDrawerRight = payload
    },
    changeSubDrawerLeft(state, payload){
      state.subDrawerLeft = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

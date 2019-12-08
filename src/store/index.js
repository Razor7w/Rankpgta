import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    drawerRight: false,
    right: false,
    left: false,
  },
  getters:{
    drawer(state){
      return state.drawer
    },
    drawerRight(state){
      return state.drawerRight
    },
    right(state){
      return state.right
    },
    left(state){
      return state.left
    },
  },
  mutations: {
    changeDrawer(state){
      state.drawer = !state.drawer
    },
    changeDrawerRight(state){
      state.drawerRight = !state.drawerRight
    },
    changeRight(state){
      state.right = !state.right
    },
    changeLeft(state){
      state.left = !state.left
    }
  },
  actions: {
  },
  modules: {
  }
})

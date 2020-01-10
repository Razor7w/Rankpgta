import Vue from 'vue'
import Vuex from 'vuex'
import { auth} from "@/firebase"
import router from '@/router'
import i18n from '@/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerLeft: false,
    drawerRight: false,
    subDrawerRight: false,
    subDrawerLeft: false,
    isAuthenticated: false,
    usuario: {}
  },
  getters:{
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
    },
    nuevoUsuario(state, payload){
      state.isAuthenticated = (payload === null) ? false : true
      state.usuario = payload
    }
  },
  actions: {
    setUsuario({commit}, user){
      const usuario = {
        nombre   : user.displayName,
        email    : user.email,
        uid      : user.uid,
        photoUrl : user.photoURL
      }
      commit('nuevoUsuario', usuario)
    },
    cerrarSesion({commit}){
      auth.signOut()
      commit('nuevoUsuario', null)
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

import { auth } from "@/firebase";

//Solucion temporal al error del calendario de vuetify
const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}

//use beforeEach route guard to set the lenguage
router.beforeEach((to, from, next) => {

  //use the lenguague from the routing param or default language
  let language = to.params.lang;
  if(!language){
    language = 'es'
  }

  //set the current language for i18n.
  i18n.locale = language
  next()
})

auth.onAuthStateChanged(function(user) {
  if(user){
    store.dispatch('setUsuario', user)
  }
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
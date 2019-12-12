import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

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

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

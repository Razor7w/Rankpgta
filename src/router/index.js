import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}` 
  },
  {
    path: '/:lang',
    component:{
      render(c) { return c('router-view') }
    },
    children:[
      {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'rankings',
        name: 'rankings',
        component: () => import(/* webpackChunkName: "rankings" */ '../views/Rankings.vue')
      },
      {
        path: 'calendario',
        name: 'calendario',
        component: () => import(/* webpackChunkName: "calendario" */ '../views/Calendario.vue')
      },
      {
        path: 'publicaciones',
        name: 'publicaciones',
        component: () => import(/* webpackChunkName: "publicaciones" */ '../views/Publicaciones.vue')
      },
      {
        path: 'jugadores',
        name: 'jugadores',
        component: () => import(/* webpackChunkName: "jugadores" */ '../views/Jugadores.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

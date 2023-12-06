import { createRouter, createWebHistory } from 'vue-router'
import RegistroView from '../views/RegistroView.vue'
import IniciarView from '../views/IniciarView.vue'
import HomeView from '../views/HomeView.vue'
import InsertarView from '../views/InsertarView.vue'
import ActualizarView from '../views/ActualizarView.vue'
import store from '@/store/'

 
const routes = [
  {
    path: '/',
    name: 'inicio',
    component: IniciarView
  },
  {
    path: '/registro',
    name: 'registro',
    component:RegistroView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if(store.getters.validar){
          next()
        }else{
          next('/')
        }
    }
  },
  {
    path: '/insertar',
    name: 'insertar',
    component: InsertarView,
    beforeEnter: (to, from, next) => {
      if(store.getters.validar){
          next()
        }else{
          next('/')
        }
    }
  },
  {
    path: '/actualizar/:id',
    name: 'Actualizar',
    component: ActualizarView,
    beforeEnter: (to, from, next) => {
      if(store.getters.validar){
          next()
        }else{
          next('/')
        }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

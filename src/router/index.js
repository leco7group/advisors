import { createRouter, createWebHistory } from 'vue-router'
import PayView from '../views/PayView.vue'
import HomeView from '../views/HomeView.vue'
import CancelView from '../views/CancelView.vue'
import SuccessView from '../views/SuccessView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pagos',
    name: 'pay',
    component: PayView
  },
  {
    path: '/enviado',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/cancelado',
    name: 'cancel',
    component: CancelView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, ) {
    return {
      el: to.hash
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Vitromex from '../views/Vitromex.vue'
import Arko from '../views/Arko.vue'
import PageNotFound from '../views/PageNotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Vitromex
  },
  {
    path:'/vitromex',
    name: 'Vitromex',
    component: Vitromex
  },
  {
    path: '/arko',
    name: 'Arko',
    component: Arko
  },
  {
    path:'/:catchAll(.*)',
    component:PageNotFound
  }
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

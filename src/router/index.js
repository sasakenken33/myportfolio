import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'Top',
    component: () => import('../views/Top.vue')
  },
  {
    path: "/about",
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/project",
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: "/project/vrd",
    name: 'VRD',
    component: () => import('../views/VRD.vue')
  },
  {
    path: "/project/arcs",
    name: 'ARCS',
    component: () => import('../views/ARCS.vue')
  },
  {
    path: "/project/meiseki",
    name: 'VRD',
    component: () => import('../views/Meiseki.vue')
  },
  {
    path: "/thought",
    name: 'Thought',
    component: () => import('../views/Thought.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
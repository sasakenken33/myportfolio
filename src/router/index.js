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

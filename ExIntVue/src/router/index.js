import { createRouter, createWebHistory } from 'vue-router'
import StartGame from '../views/StartGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'startgame',
      component: StartGame
    },
    {
      path: '/board',
      name: 'board',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Board.vue')
    }
  ]
})

export default router

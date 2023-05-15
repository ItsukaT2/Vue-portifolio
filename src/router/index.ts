import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PortifolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue')
    },

    {
      path: '/curriculum',
      name: 'curriculum',
      component: () => import('@/views/CurriculumView.vue')
    },

    // Projects
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('@/views/projects/buttons.vue')
    },
    

    {
      path: '/logins_forms',
      name: 'login_forms',
      component: () => import('@/views/projects/logins_forms.vue')
    },

    {
      path: '/mist',
      name: 'mist',
      component: () => import('@/views/projects/mist.vue')
    },

    {
      path: '/pages',
      name: 'pages',
      component: () => import('@/views/projects/pages.vue')
    },

    //Tradutor
    {
      path: '/EN',
      name: 'PortEN',
      component: () => import('@/views/traducoes/Portifolio/EN.vue')
    },

    {
      path: '/JP',
      name: 'PortJP',
      component: () => import('@/views/traducoes/Portifolio/JP.vue')
    }
  ]
})



export default router

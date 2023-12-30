import { createRouter, createWebHistory } from 'vue-router'

import dashboard2 from '../views/master/dashboard2.vue'
import homeView from '../views/homeView.vue'
import hyperLinkView from '../views/hyperLinkView.vue'
import lineDefectView from '../views/lineDefectView.vue'
import memberView from '../views/memberView.vue'
import helpView from '../views/helpView.vue'
import main from '../views/master/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {
          path: '/home',
          name: 'Home',
          component: homeView
        },
        {
          path: '/hyperLinkView',
          name: 'HyperLinkView',
          component: hyperLinkView
        },
        {
          path: '/lineDefectView',
          name: 'LineDefectView',
          component: lineDefectView
        },
        {
          path: '/memberView',
          name: 'MemberView',
          component: memberView
        },
        {
          path: '/helpView',
          name: 'HelpView',
          component: helpView
        },
      ]
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/sample/AboutView.vue')
    // }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OverView from './components/OverView'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: OverView
        },
        {
          path: '/user/lists',
          component: () => import('./components/Member.vue')
        },
        {
          path: '/user/operate',
          component: () => import('./components/MemberEdit.vue')
        },
        {
          path: '/user/trans',
          component: () => import('./components/Transaction.vue')
        },
        {
          path: '/user/info',
          component: () => import('./components/UserInfo.vue')
        },
        {
          path: '/user/create',
          component: () => import('./components/CreateUser.vue'),
          props: true
        }
      ]
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import artworksList from '@/pages/artworksList'
import artworkDetail from '@/pages/artworkDetail'
import user from '@/pages/user'
import linkCheck from '@/pages/linkCheck'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/artworksList',
      name: 'artworksList',
      component: artworksList
    },
    {
      path: '/artworkDetail',
      name: 'artworkDetail',
      component: artworkDetail
    },
    {
      path: '/user',
      component: user,
      children: [{
        path: '',
        redirect: 'artlist'
      }, {
        path: 'artlist',
        component: artworksList,
      }, {
        path: 'ownlist',
        component: artworksList,
      }, {
        path: 'linkcheck',
        component: linkCheck,
      }]
    },
  ]
})

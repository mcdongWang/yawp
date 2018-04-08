import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import artworksList from '@/pages/artworksList'
import artworkDetail from '@/pages/artworkDetail'

Vue.use(Router)

export default new Router({
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
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import artworksList from '@/pages/artworksList'
import artworkDetail from '@/pages/artworkDetail'
import result from '@/pages/searchOriginalResult'

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
      path: '/result',
      name: result,
      component: result
    }
  ]
})

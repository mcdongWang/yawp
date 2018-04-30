import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import artworksList from '@/pages/artworksList'
import artworkDetail from '@/pages/artworkDetail'
import user from '@/pages/user'
import myArtworks from '@/pages/myArtworks'
import linkCheck from '@/pages/linkCheck'
import selfCheck from '@/pages/originalCheckUpload'

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
      path: '/artworkDetail/:id',
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
        component: myArtworks,
      }, {
        path: 'ownlist',
        component: artworksList,
      }, {
        path: 'selfcheck',
        component: selfCheck,
      }, {
        path: 'linkcheck',
        component: linkCheck,
      }]
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/views/Login.vue'
import Text from '@/components/views/Text.vue'
import Huizong from '@/components/views/Huizong.vue'


Vue.use(Router)


export default new Router({
  routes: [
   
     {
      path: '/',
      name: 'Login',
      component: Login

      
    },
     {
      path: '/text',
      name: 'Text',
      component: Text
    },
    {
      path:'/huizong',
      name:'Huizong',
      component:Huizong
    }


  ]


})


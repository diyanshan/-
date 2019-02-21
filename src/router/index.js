import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Messagedetail from '../pages/Messagedetail.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children: [
            {
              path:'/home/message/detail/:id',
              component:Messagedetail
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Take from '@/components/home/take/Take'
import Find from '@/components/home/find/Find'
import Order from '@/components/home/order/Order'
import Mine from '@/components/home/mine/Mine'


Vue.use(Router)
const route = new Router({
  linkActiveClass:"active",
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home/Home'),
      children:[
        {
          path:"Take",
          name:"Take",
          component: Take,
          meta:{
            title:"饿了吗"
          }
        },
        {
          path:"Find",
          name:"Find",
          component: Find,
          meta:{
            title:"查找"
          }
        },
        {
          path:"Order",
          name:"Order",
          component: Order,
          meta:{
            title:"菜单"
          }
        },
        {
          path:"Mine",
          name:"Mine",
          component: Mine,
          meta:{
            title:"我的"
          }
        }

      ]
    },{
      path:'/seller',
      name:'Seller',
      component: () => import('@/components/seller/Seller')
    } 
  ]
})

route.beforeEach((to,from,next)=>{
  document.title=to.meta.title
  next()
})

export default route //导出
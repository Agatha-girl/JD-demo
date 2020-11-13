import Vue from 'vue'
import VueRouter from 'vue-router'
import Log from '../components/Log.vue'
import Search from '../components/Search.vue'
import ClassifiCation from '../components/ClassifiCation.vue'
import ShopCar from '../components/ShopCar.vue'
import Mine from '../components/Mine.vue'
import GoodsDetails from '../components/GoodsDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: () => import(/* webpackChunkName: "about" */ '../components/First.vue')
  },
  {
    path: '/log',
    name: 'log',
    component: Log

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
  },
  {
    path:'/search',
    name:'search',
    component:Search
  },
  {
    path:'/classification',
    name:'classification',
    component:ClassifiCation
  },
  {
    path:'/shopcar',
    name:'shopcar',
    component:ShopCar
  },
  {
    path:'/mine',
    name:'mine',
    component:Mine
  },
  {
    path:'/goodsdetails',
    name:'goodsdetails',
    component:GoodsDetails

  }
]

const router = new VueRouter({
  routes
})

export default router

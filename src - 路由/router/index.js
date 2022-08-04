// 引入vue   vue-router和vue是深度集成
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Part from '../views/Part.vue'
import Find from '../views/Find.vue'
import NotFound from '../views/NotFound.vue'


// 在vue中，使用vue的插件，都需要调用vue.use()
Vue.use(VueRouter)

// 创建路由规则  一一对应关系
const routes = [
  {
    path: '/',  //路由地址
    component: Home 
  },
  {
    path: '/part',
    component:Part
  },
  {
    path: '/find',
    component:Find
  },
  {
    path: '*',
    component:NotFound
  }
]

// 创建路由对象
const router = new VueRouter({
  // 路由规则
  routes
})

// 暴露路由对象
export default router

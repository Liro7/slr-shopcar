// 引入vue   vue-router和vue是深度集成
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Part from '../views/Part.vue'
import Find from '../views/Find.vue'
import Detail from '../views/Detail.vue'
import MyDetail from '../views/MyDetail.vue'


// 在vue中，使用vue的插件，都需要调用vue.use()
Vue.use(VueRouter)

// 创建路由规则  一一对应关系
const routes = [
  {
    path: '/home',  //路由地址
    name:"home",    //给路由起名字
    component: Home 
  },
  {
    path: '/part',
    name:"part",
    component:Part
  },
  {
    path: '/find',
    name:"find",
    component:Find
  },
  {
    path: '/detail',
    component:Detail
  },
  {
    path: '/mydetail/:users',
    component:MyDetail
  },
]

// 创建路由对象
const router = new VueRouter({
  // 路由规则
  routes,
  mode:'history'  //打包上线后需要后台的支持
}) 

// 暴露路由对象
export default router

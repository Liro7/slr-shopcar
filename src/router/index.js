// 引入vue   vue-router和vue是深度集成
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'


// import Find from '../views/Find.vue'
// import My from '../views/My.vue'

// import Ranking from '../views/second/Ranking.vue'
// import Recommend from '../views/second/Recommend.vue'
// import SongList from '../views/second/SongList.vue'




// 在vue中，使用vue的插件，都需要调用vue.use()
Vue.use(VueRouter)

// 创建路由规则  一一对应关系
const routes = [
  {
    // path: '/find',
    // // 路由按需加载
    // component: ()=>import('../views/Find.vue'),
    children: [
      {
        path: '/ranking',
        component: ()=>import('../views/second/Find.vue'),
      },
      {
        path: '/recommend',
        component: ()=>import('../views/second/Find.vue'),
      },
      {
        path: '/songlist',
        component: ()=>import('../views/second/Find.vue'),
      }
    ]
  },
  {
    path: '/my',
    component: ()=>import('../views/My.vue'),
 }
]

// 创建路由对象
const router = new VueRouter({
  // 路由规则
  routes,
  mode:'history'  //打包上线后需要后台的支持
}) 

// 暴露路由对象
export default router

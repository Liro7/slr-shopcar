import Vue from 'vue'
import App from './App.vue'
// 导入路由对象
import router from './router'
import store from './store'




Vue.config.productionTip = false

new Vue({
  // 把路由对象注入到vue实例中 在任何一个组件中就可以使用路由对象
  router,
  store,
  render: h => h(App)
}).$mount('#app')

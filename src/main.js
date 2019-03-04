// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Login from './components/views/Login.vue'
import Text from './components/views/Text.vue'
import Huizong from './components/views/Huizong.vue'


import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




import myHeader from './components/views/Header/index'
import myLeft from './components/views/Left/index'

import echarts from 'echarts'//导入echarts图表
Vue.prototype.$echarts = echarts //将$echarts添加到Vue实例中

Vue.use(myHeader);
Vue.use(myLeft);
Vue.config.productionTip = false



/* eslint-disable no-new */
Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

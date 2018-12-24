// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import './common/http'
import FastClick from 'fastclick'
import WeuiVue from 'weui-vue'
import 'weui-vue/weui.css'
Vue.use(WeuiVue)
import './lib/iconfont/iconfont.css'
import './lib/base.css'
import './lib/rem'
import './filter/data'
// import { DatetimePicker, IndexList, IndexSection, Cell, Header, Toast} from "mint-ui";
// Vue.component(Toast.name, Toast)
// Vue.component(DatetimePicker.name, DatetimePicker)
// Vue.component(IndexList.name, IndexList)
// Vue.component(IndexSection.name, IndexSection)
// Vue.component(Cell.name, Cell)
// Vue.component(Header.name, Header)
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
Vue.use(MintUI)
// Vue.$toast = Vue.prototype.$toast = Toast;
FastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    // 对路由进行验证     
    const token = sessionStorage.getItem('token')
    if (token) { // 已经登陆       
      next()   // 正常跳转到你设置好的页面   
      // console.log(token)  
    }
    else {
      console.log("未登录")
      // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({ path: '/index/login', query: { Rurl: to.fullPath } })
    }
  } else {
    next()
  }
})
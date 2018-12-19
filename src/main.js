// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import WeuiVue from 'weui-vue'
import 'weui-vue/weui.css'
Vue.use(WeuiVue)
import './lib/iconfont/iconfont.css'
import './lib/base.css'
import './lib/rem'
import './filter/data'
import { DatetimePicker, IndexList, IndexSection, Cell} from "mint-ui";
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
import "mint-ui/lib/style.css";

// FastClick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem, Skeleton, Tag, Form, Field, Button } from 'vant'
import '@/assets/fonts/iconfont.css'

// 自定义插件toast插件
import toast from "./components/common/toast"

// 解决移动端300ms延迟（插件）
import FastClick from "fastclick"

// 图片懒加载
import VueLazyLoad from "vue-lazyload"

Vue.use(Swipe).use(SwipeItem).use(toast).use(VueLazyLoad, {
  loading: require('./assets/img/loa_img.gif')
}).use(Skeleton).use(Tag).use(Form).use(Field).use(Button)

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.$bus = new Vue()


// 解决移动端300ms延迟（插件）
FastClick.attach(document.body)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

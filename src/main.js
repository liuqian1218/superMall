import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import toast from './components/common/Toast/index'
import FastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast);

//解决移动端300ms延迟
FastClick.attach(document.body);

//1、使用懒加载 2、加载图片  src => v-lazy
Vue.use(vueLazyLoad,{
  preLoad: 1,
  loading:require("./assets/img/common/placeholder.png")//占位
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

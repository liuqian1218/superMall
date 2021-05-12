import Vue from 'vue'
import Router from 'vue-router'

var Home = () => import("views/home/home.vue");
var Cate = () => import("views/cate/cate.vue");
var Cart = () => import("views/cart/cart.vue");
var ProFile = () => import("views/profile/profile.vue");
var Details = () => import("views/details/details.vue")


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path:'',
      redirect:"/home",
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/cate',
      component:Cate,
    },
    {
      path:'/cart',
      component:Cart,
    },
    {
      path:'/profile',
      component:ProFile,
    },
    {
      path:'/details/:iid',
      component:Details,
    },
  ],
  mode : "history",
  linkActiveClass:"active",
})

export default router 

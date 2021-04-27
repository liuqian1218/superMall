import Vue from 'vue'
import Router from 'vue-router'

var Home = () => import("views/home/home.vue");
var Cate = () => import("views/cate/cate.vue");
var Cart = () => import("views/cart/cart.vue");
var ProFile = () => import("views/profile/profile.vue");

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
  ],
  mode : "history",
  linkActiveClass:"active",
})

export default router 

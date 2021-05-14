<template>
  <div id = "cart">
  <nav-bar class="cart-nav">
    <div slot = "center">购物车({{cartLength}})</div>
  </nav-bar>
  <bscroll class="content">
    <cart-list></cart-list>
  </bscroll>
  <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import cartList from './cartChildren/cartList'
import BottomBar from './cartChildren/BottomBar'

import NavBar from 'components/common/navBar/NavBar'

import bscroll from 'components/common/scroll/scroll'
export default {
    name : "cart",
    components:{
      NavBar,
      cartList,
      bscroll,
      BottomBar
    },
    computed:{
      cartLength(){
        return this.$store.getters.cartListLen;
      }
    },
}
</script>

<style scoped>
  #cart{
    height:100vh;
  }
  .cart-nav{
    color:#fff;
    font-size:24px;
    font-weight: bold;
    background-color : var(--color-tint);
  }
  .content{
    height : calc(100% - 93px - 44px);
    overflow: hidden;
  }
</style>
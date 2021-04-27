<template>
  <div id = "home">
      <nav-bar class="home-nav">
        <div slot = "center">蘑菇街</div>
      </nav-bar>
      <home-swiper :banners = "banners"></home-swiper>
      <home-rec-view :recommend = "recommend"></home-rec-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import homeSwiper from 'views/home/HomeChildren/homeSwiper'
import homeRecView from 'views/home/HomeChildren/homeRecView'

import {getHomeMultiData} from 'network/home'


export default {
    name : "home",
    components:{
      NavBar,
      homeSwiper,
      homeRecView,
    },
    data(){
      return {
        banners : [],
        recommend:[],
      }
    },
    created(){
      getHomeMultiData().then(res => {
        console.log(res.data);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
}
</script>

<style>
  .home-nav{
    color:#fff;
    font-size:24px;
    font-weight: bold;
    background-color : var(--color-tint);
  }
</style>
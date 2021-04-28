<template>
  <div id = "home">
      <nav-bar class="home-nav">
        <div slot = "center">蘑菇街</div>
      </nav-bar>
      <home-swiper :banners = "banners"></home-swiper>
      <home-rec-view :recommend = "recommend"></home-rec-view>
      <feature-view/>
      <tab-control :titles = "['流行','精选','新款']" class="tab-control"></tab-control>
      <goods-list :goods = "goods['pop'].list"></goods-list>
      
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import homeSwiper from 'views/home/HomeChildren/homeSwiper'
import homeRecView from 'views/home/HomeChildren/homeRecView'
import FeatureView from './HomeChildren/FeatureView'

import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {
  getHomeMultiData,
  getHomeGoods
} from 'network/home'


export default {
    name : "home",
    components:{
      NavBar,
      homeSwiper,
      homeRecView,
      FeatureView,
      TabControl,
      GoodsList,
    },
    data(){
      return {
        banners : [],
        recommend:[],
        goods : {
          pop : { page : 0 , list : [] },
          new :{ page : 0, list : [] },
          sell : { page : 0, list : [] },
        },
      }
    },
    created(){
      //请求首页多个数据
      this.getHomeMultiData();//加this调用的method里的方法

      //请求商品数据
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    methods:{
      getHomeMultiData(){
        getHomeMultiData().then(res => {//这里的方法时从network里导入的
          // console.log(res.data);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1 ;
        getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      }
    },
}
</script>

<style>
  .home-nav{
    color:#fff;
    font-size:24px;
    font-weight: bold;
    background-color : var(--color-tint);

    position:sticky;
    top:0px;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
    background-color: #fff;
  }
</style>
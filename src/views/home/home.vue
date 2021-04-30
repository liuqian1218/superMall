<template>
  <div id = "home">
      <nav-bar class="home-nav">
        <div slot = "center">蘑菇街</div>
      </nav-bar>

      <tab-control 
          :titles = "['流行','精选','新款']" 
          @tabctrClick = "tabctrClick"
          ref = "tabControl2"
          v-show = "isTabControlFixed" >
          </tab-control>

      <scroll class="content" ref = "scroll"
            :probeType = "3"
            @goodsScroll = "contentScroll"
            :pullUpLoad = "true"
            @pullingUp = "uploadMore">
        <home-swiper :banners = "banners" @imgLoad = "homeSwiperImg"></home-swiper>
        <home-rec-view :recommend = "recommend"></home-rec-view>
        <feature-view/>
        <tab-control 
          :titles = "['流行','精选','新款']" 
          @tabctrClick = "tabctrClick"
          ref = "tabControl1"
          v-show = "!isTabControlFixed"></tab-control>
        <goods-list :goods = "goods[curType].list"></goods-list>
      </scroll>
      <back-top @click.native="backClick" v-show = "showBack"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import homeSwiper from 'views/home/HomeChildren/homeSwiper'
import homeRecView from 'views/home/HomeChildren/homeRecView'
import FeatureView from './HomeChildren/FeatureView'

import scroll from 'components/common/scroll/scroll'

import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import backTop from 'components/content/backTop/backTop'

import {
  getHomeMultiData,
  getHomeGoods
} from 'network/home'

import {debounce} from 'common/utils'

export default {
    name : "home",
    components:{
      NavBar,
      homeSwiper,
      homeRecView,
      FeatureView,
      TabControl,
      GoodsList,
      scroll,
      backTop,
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
        curType : "pop",
        showBack : false ,
        tabOffsetTop:0,
        isTabControlFixed:false,
        saveY : 0,
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
    mounted(){
      //频繁刷新防抖
      var refresh = debounce(this.$refs.scroll.refresh,500)
      //监听item中图片加载完成
      this.$bus.$on("ItemImgLoad",() => {
        refresh();
      })

      // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    methods:{
      //事件点击相关
      //tabControl点击事件
      tabctrClick(index){
        switch(index){
          case 0 : this.curType = 'pop' ; break;
          case 1 : this.curType = "new" ; break;
          case 2 : this.curType = "sell"; break;
        }
        this.$refs.tabControl1.CurrentIndex = index ;
        this.$refs.tabControl2.CurrentIndex = index ;
      },
      //回到顶部点击事件
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500);
      },
      //页面滚动事件
      contentScroll(position){
        //1、backtop是否显示
        this.showBack = -(position.y) > 1000 ? true :false ;

        //2、tabcontrol是否吸顶
        this.isTabControlFixed = -(position.y) > this.tabOffsetTop?true:false;

      },
      //上拉加载更多
      uploadMore(){
        // console.log("加载");
        this.getHomeGoods(this.curType);
        this.$refs.scroll.finishPullUp();
      },
      //待所有图片加载完，赋值tabControl的offsetTop
      homeSwiperImg(){
        this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop - this.$refs.tabControl1.$el.offsetHeight ;
        // console.log(this.$refs.tabControl1.$el.offsetTop);
      },
      //网络请求相关
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
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      },
      
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY();
    },
}
</script>

<style scoped>
  #home{
    height:100vh;
  }
  .home-nav{
    color:#fff;
    font-size:24px;
    font-weight: bold;
    background-color : var(--color-tint);
  }
  .content{
    height : calc(100% - 93px);
    overflow: hidden;
  }
</style>
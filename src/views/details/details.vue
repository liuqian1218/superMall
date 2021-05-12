<template>
    <div id="detail">
        <detail-nav-bar @titleClick = "titleClick" ref = "detailNavBar"></detail-nav-bar>
        <bscroll class="content" ref = "scroll" 
        :probeType = "3"
        @goodsScroll = "contentScroll">
            <detail-swiper :top-imgs = "bannerImgs" ref = "goodsBaseInfo"></detail-swiper>
            <goods-base-info :base-info = "proBaseInfo"></goods-base-info>
            <shop-base-info :shopInfo = "shop"></shop-base-info>
            <detail-goods-info :detailInfo = "detailInfo" @imageLoad = "imageLoad"></detail-goods-info>
            <item-param :itemParams="itemParams"  ref = "itemParam"></item-param>
            <detail-comment :comment-info = "commentInfo" ref = "detailComment"></detail-comment>
            <goods-list :goods = "detailRec" ref = "detailRec"></goods-list>
        </bscroll>
        <detail-bottom-bar @addToCart = "addToCart"></detail-bottom-bar>
        <back-top @click.native="backClick" v-show = "showBack"></back-top>
    </div>
</template>

<script>
import detailNavBar from './childComponent/detailNavBar'
import detailSwiper from './childComponent/detailSwiper'
import goodsBaseInfo from './childComponent/goodsBaseInfo'
import shopBaseInfo from './childComponent/shopBaseInfo'
import DetailGoodsInfo from './childComponent/detailGoodsInfo.vue'
import ItemParam from './childComponent/itemParam.vue'
import detailComment from './childComponent/detailComment'
import detailBottomBar from './childComponent/detailBottomBar'
import GoodsList from 'components/content/goods/GoodsList'

import {getGoodsDetail,getRecommend,Shop,GoodsParam} from 'network/detail'
import{debounce} from 'common/utils'
import{itemListenerMixin,backTopMix} from 'common/mixin'

import bscroll from 'components/common/scroll/scroll'

export default {
    name : "Details",
    components:{
        detailNavBar,
        detailSwiper,
        goodsBaseInfo,
        shopBaseInfo,
        bscroll,
        DetailGoodsInfo,
        ItemParam,
        detailComment,
        GoodsList,
        detailBottomBar,
    },
    data(){
        return {
            iid : null,
            bannerImgs : [],
            proBaseInfo : {
                "title" : "",
                "price" : "",
                "oldPrice" : "",
                "discountDesc" : "",
                "columns" : [],
                "discountBgColor" : "",
                "services" : [],
            },
            shop : {},
            detailInfo : {},
            itemParams:{},
            commentInfo:{},
            detailRec : [],
            themeTopYs : [],
            getThemeTopYs :null,
        }
    },
    mixins:[itemListenerMixin,backTopMix],
    created(){
        //保存iid
        this.iid = this.$route.params.iid ;
        //请求详情页数据
        this.getGoodsDetail(this.iid);
        //详情页推荐
        this.getRecommend();

        // this.$nextTick(() => {
            // this.themeTopYs.push(0);
            // this.themeTopYs.push(-this.$refs.itemParam.$el.offsetTop);
            // this.themeTopYs.push(-this.$refs.detailComment.$el.offsetTop);
            // this.themeTopYs.push(-this.$refs.detailRec.$el.offsetTop);
        // })
        this.getThemeTopYs = debounce(() => {
            this.themeTopYs.push(0);
            this.themeTopYs.push(-this.$refs.itemParam.$el.offsetTop+ this.$refs.detailNavBar.$el.offsetHeight);
            this.themeTopYs.push(-this.$refs.detailComment.$el.offsetTop);
            this.themeTopYs.push(-this.$refs.detailRec.$el.offsetTop+ this.$refs.detailNavBar.$el.offsetHeight);
        })
    },
    mounted(){
        // //频繁刷新防抖
        // this.itemImgListener = debounce(this.$refs.scroll.refresh,500)
        // //监听item中图片加载完成
        // this.$bus.$on("ItemImgLoad",this.itemImgListener);
    },
    destroyed(){
        this.$bus.$off("ItemImgLoad",this.itemImgListener);
    },
    methods:{
        getRecommend(){
            getRecommend().then(res => {
                this.detailRec = res.data.list ;
                
            });
        },
        getGoodsDetail(iid){
            getGoodsDetail(iid).then(res => {
                var data = res.result;
                //顶部轮播图
                this.bannerImgs = data.itemInfo.topImages;
                //商品基本信息
                this.proBaseInfo.title = data.itemInfo.title;
                this.proBaseInfo.price = data.itemInfo.price;
                this.proBaseInfo.oldPrice = data.itemInfo.oldPrice;
                this.proBaseInfo.discountDesc = data.itemInfo.discountDesc;
                this.proBaseInfo.columns.push(...data.columns);
                this.proBaseInfo.discountBgColor = data.itemInfo.discountBgColor;
                this.proBaseInfo.services.push(...data.shopInfo.services);
                //店铺基本信息
                this.shop = new Shop(data.shopInfo);
                //详细信息
                this.detailInfo = data.detailInfo ;
                //产品参数
                this.itemParams = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                //评论信息
                if(data.rate.cRate > 0){
                    this.commentInfo = data.rate.list[0];
                }                
            });
        },
        imageLoad(){
            this.$refs.scroll.refresh();

            this.getThemeTopYs();
        },
        //点击顶部导航，跳到对应位置
        titleClick(i){
            this.$refs.scroll.scrollTo(0,this.themeTopYs[i],500);
        },
        //滑动界面，顶部导航栏变色
        contentScroll(position){
            this.listenBackTop(position);
            let index = 0;
            if(position.y > this.themeTopYs[1]){
                index = 0;
            }else if(position.y > this.themeTopYs[2]){
                index = 1;
            }else if(position.y > this.themeTopYs[3]){
                index = 2;
            }else{
                index = 3;
            }
            this.$refs.detailNavBar.currentIndex = index ;  
        },
        //加入购物车
        addToCart(){
            
        },
    },
}
</script>

<style scoped>
    #detail{
        position:relative;
        background-color: #fff;
        z-index: 9;
        height:100vh;
    }
    .content{
        height: calc(100% - 44px - 58px);
        overflow: hidden;
    }
</style>
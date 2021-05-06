<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-imgs = "bannerImgs"></detail-swiper>
        <goods-base-info :base-info = "proBaseInfo"></goods-base-info>
        <shop-base-info :shopInfo = "shop"></shop-base-info>

        <div style="height:1000px"></div>
    </div>
</template>

<script>
import detailNavBar from './childComponent/detailNavBar'
import detailSwiper from './childComponent/detailSwiper'
import goodsBaseInfo from './childComponent/goodsBaseInfo'
import shopBaseInfo from './childComponent/shopBaseInfo'

import {getGoodsDetail,Shop} from 'network/detail'

export default {
    name : "Details",
    components:{
        detailNavBar,
        detailSwiper,
        goodsBaseInfo,
        shopBaseInfo,
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
        }
    },
    created(){
        //保存iid
        this.iid = this.$route.params.iid ;
        //请求详情页数据
        this.getGoodsDetail(this.iid);
    },
    methods:{
        getGoodsDetail(iid){
            getGoodsDetail(iid).then(res => {
                console.log(res);
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


                console.log(this.shop);
            });
        },
    },
}
</script>

<style>

</style>
<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :top-imgs = "bannerImgs"></detail-swiper>
        <goods-base-info :base-info = "proBaseInfo"></goods-base-info>
    </div>
</template>

<script>
import detailNavBar from './childComponent/detailNavBar'
import detailSwiper from './childComponent/detailSwiper'
import goodsBaseInfo from './childComponent/goodsBaseInfo'

import {getGoodsDetail} from 'network/detail'

export default {
    name : "Details",
    components:{
        detailNavBar,
        detailSwiper,
        goodsBaseInfo,
    
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
                //顶部轮播图
                this.bannerImgs = res.result.itemInfo.topImages;
                //商品基本信息
                this.proBaseInfo.title = res.result.itemInfo.title;
                this.proBaseInfo.price = res.result.itemInfo.price;
                this.proBaseInfo.oldPrice = res.result.itemInfo.oldPrice;
                this.proBaseInfo.discountDesc = res.result.itemInfo.discountDesc;
                this.proBaseInfo.columns.push(...res.result.columns);
                this.proBaseInfo.discountBgColor = res.result.itemInfo.discountBgColor;
                this.proBaseInfo.services.push(...res.result.shopInfo.services);
                console.log(this.proBaseInfo);
            });
        },
    },
}
</script>

<style>

</style>
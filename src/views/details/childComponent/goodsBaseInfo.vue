<template>
  <div class="goods-base-info">
      <div class="title">
          {{baseInfo.title}}
      </div>
      <div class="price">
          <span class="curPrice">{{baseInfo.price}}</span>
          <s class="oldPrice">{{baseInfo.oldPrice}}</s>
          <span class="discount" :style = "{backgroundColor:baseInfo.discountBgColor}">{{baseInfo.discountDesc}}</span>
      </div>
      <div class="columns">
          <span v-for= "item in baseInfo.columns" class="columns-item">{{item}}</span>
      </div>
      <div class="services">
        <div v-for = "item in baseInfo.services" 
            class="services-item">
            <img :src="item.icon" alt="">
            {{item.name}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"goodsBaseInfo",
    props:{
        baseInfo : {
            type : Object,
            default : null
        },
    },
}
</script>

<style scoped>
    .goods-base-info{
        padding : 15px 7px 10px ;
    }
    .title{
        font-size : 16px;
        line-height: 20px;
    }
    .price{
        margin-top : 15px;
        margin-bottom: 10px;
    }
    .curPrice{
        color:var(--color-high-text);
        font-size : 23px;
        font-weight: bold;
    }
    .oldPrice{
        font-size : 14px;
        margin-left:5px;
    }
    .discount{
        color:#fff;
        padding:2px;
        border-radius: 50%;
        font-size:12px;
        position: relative;
        left : 5px;
        top : -5px;
    }
    .columns{
        display:flex;
    }
    .columns-item{
        flex:1;
        text-align: left;
        font-size: 14px;
    }
    .services{
        margin-top:10px;
        display: flex;
        flex-wrap: wrap;
    }
    .services-item{
        width:33%;
        text-align: left;
        line-height: 20px;
        font-size: 14px;
    }
    .services-item img {
        width:14px;
        padding-top:2px;
    }
</style>
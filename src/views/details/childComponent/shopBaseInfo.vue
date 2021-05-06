<template>
  <div class="shop-base-info">
      <div class="name">
          <img :src="shopInfo.logo" alt="">
          <span>{{shopInfo.name}}</span>
      </div>
      <div class="sellInfo">
          <div class="left-item">
              <div>
                <p>{{shopInfo.sells}}</p>
                <p>销量</p>
              </div>
              <div>
                <p>{{shopInfo.goodsCount}}</p>
                <p>全部宝贝</p>
              </div>
          </div>
          <div class="right-item">
              <p v-for = "item in shopInfo.score">
                  <span>{{item.name}}</span>
                  <span>{{item.score}}</span>
                  <span>{{item.isBetter?"高":"低"}}</span>
              </p>
          </div>
      </div>
      <div>
          <button>进店逛逛</button>
      </div>
  </div>
</template>

<script>
export default {
    name : "shopBaseInfo",
    props : {
        shopInfo : {
            type:Object,
            default :null,
        },
    },
    methods:{

    },
    mounted(){
        console.log(this.shopInfo);
    },
}
</script>

<style scoped>
    .shop-base-info{
        padding : 15px 7px 10px ;
        border-bottom:5px solid #f2f5f8;
    }
    .name img{
        width:45px;
        border : 1px solid rgba(0,0,0,.1);
        border-radius : 50%;
    }
    .name span{
        line-height: 45px;
        vertical-align: middle;
    }
</style>
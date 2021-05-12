<template>
  <div class="shop-base-info">
      <div class="name">
          <img :src="shopInfo.logo" alt="">
          <span>{{shopInfo.name}}</span>
      </div>
      <div class="sellInfo">
          <div class="left-item">
              <div class = 'sells'>
                <p class="dig">{{shopInfo.sells|formatSells}}</p>
                <p class="text">销量</p>
              </div>
              <div class="goodscount">
                <p class="dig">{{shopInfo.goodsCount}}</p>
                <p class="text">全部宝贝</p>
              </div>
          </div>
          <div class="right-item">
            <table>
                <tr v-for="(item, index) in shopInfo.score" :key="index">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                </tr>
            </table>
          </div>
      </div>
      <div class="btn">
          <div class="enter-shop">进店逛逛</div>
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
    filters:{
        formatSells(num){
            return (num/10000).toFixed(1)+"万"
        },
    },
}
</script>

<style scoped>
    .shop-base-info{
        padding : 15px 7px 10px ;
        border-bottom:5px solid #f2f5f8;
    }
    .name{
        line-height: 45px;
        /* 让元素垂直中心对齐 */
        display: flex;
        align-items: center;
    }
    .name img{
        width:45px;
        border : 1px solid rgba(0,0,0,.1);
        border-radius : 50%;
    }
    .name span{
        font-size:20px;
        margin-left:10px;
    }
    .left-item,.right-item,.sells,.goodscount{
        float:left;
    }
    .btn{
        clear:both;
        text-align: center;
        margin-top: 10px;
    }
    .sellInfo{
        display:flex;
        margin-top:20px;
    }
    .left-item,.right-item{
        flex:1;
    }
    .left-item{
        border-right: 1px solid rgba(0,0,0,.1);
        color:#333;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        vertical-align: middle;
    }
    .text{
        margin-top: 10px;
        font-size:13px;
    }
    .dig{
        font-size: 18px;
    }
    .right-item table {
    width: 120px;
    margin-left: 30px;
  }

  .right-item table td {
    padding: 5px 0;
  }

  .right-item .score {
    color: #5ea732;
  }

  .right-item .score-better {
    color: #f13e3a;
  }

  .right-item .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .right-item .better-more span {
    background-color: #f13e3a;
  }

    .enter-shop {
        display: inline-block;
        font-size: 14px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
    }
</style>
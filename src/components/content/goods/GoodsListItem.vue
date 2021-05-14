<template>
  <div class="goods-list-item" @click = "itemClick">
      <!-- <a :href = "goodsItem.link"> -->
          <img v-lazy="showImg" alt="" @load = "imgLoad">
          <div class="goods-info">
            <p>{{goodsItem.title}}</p>   
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
          </div>
      <!-- </a> -->
  </div>
</template>
 
<script>
export default {
    name : "GoodsListItem",
    props : {
        goodsItem:{
            type:Object,
            default:null,
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit("ItemImgLoad");
            // if(this.$route.path.indexOf("/home") != -1){
            //     this.$bus.$emit("homeItemImgLoad");
            // }else if(this.$route.path.indexOf("/detail") != -1){
            //     this.$bus.$emit("detailItemImgLoad");
            // }
        },
        itemClick(){
            if(this.goodsItem.item_id){
                this.$router.push("/details/" + this.goodsItem.item_id);
            }else{
                this.$router.push("/details/" + this.goodsItem.iid);
            }
        },
    },
    computed:{
        showImg(){
            return this.goodsItem.image || this.goodsItem.show.img;
        }
    },
}
</script>

<style scoped>
    .goods-list-item{
        padding-bottom: 10px;
    }
    .goods-list-item img{
        width:100%;
        padding:0 2px 0 ;
    }
    .goods-list-item .goodsinfo{
        font-size:12px;
        overflow: hidden;
        text-align: center;
    }
    .goods-list-item p {
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
        overflow: hidden;
    }
    .goods-info .price {
      color: var(--color-high-text);
      margin-right: 20px;
      margin-left:20px;
    }
    .collect{
        position: relative;
    }
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>
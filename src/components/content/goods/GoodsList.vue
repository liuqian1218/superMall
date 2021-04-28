<template>
  <div class="goods">
        <goods-list-item :goodsItem = "item" v-for="(item,index) in goods" class="goods-item"></goods-list-item>
        <!-- {{item.title}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name : "GoodsList",
    props : {
        goods:{
            type:Array,
            default(){
                return [] ;
            }
        },
    },
    components:{
        GoodsListItem,
    },
}
</script>

<style scoped>
    .goods{
        display:flex;
        flex-wrap: wrap;
        padding:2px;
    }
    .goods-item{
        width:50%;
    }
</style>
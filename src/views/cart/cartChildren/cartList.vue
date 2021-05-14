<template>
  <div>
      <cart-list-item v-for="(item,index) in cartList" :item-info = "item" :index="index" :key = "index"></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartListItem from './cartListItem'

export default {
    name:"cartList",
    computed:{
        ...mapGetters(["cartListLen","cartList"]),
    },
    components:{
        cartListItem,
    },
    created(){
        const prod = {
            image :"http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg",
            title :"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            desc :"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
            price :"84.29",
            iid :"1m70y5k",
            checked:false,
        };
        this.$store.dispatch("addCart",prod);
    },
}
</script>

<style scoped>

</style>
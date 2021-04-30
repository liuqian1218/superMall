<template>
  <swiper class="swiper-detail">
    <swiper-item v-for = "(item,index) in topImgs" :key = "index">
        <img :src="item" alt="">
    </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
    name:"detailSwiper",
    props:{
        topImgs : {
            type:Array,
            default(){
                return []
            }
        },
    },
    components:{
        Swiper,
        SwiperItem,
    },
}
</script>

<style scoped>
    .swiper-detail{
        height:250px;
        overflow: hidden;
    }
</style>
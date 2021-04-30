<template>
  <div>
      <nav-bar>
            <div slot = "left" class="back" @click = "backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot = "center" class="title">
                <div v-for = "(item,index) in titles" 
                    class="title-item"
                    @click = "titleClick(index)"
                    :class = "{'active':index===currentIndex}">{{item}}</div>
            </div>
        </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
    name : "detailNavBar",
    components:{
        NavBar,
    },
    data(){
        return {
            titles:["商品","参数","评论","推荐"],
            currentIndex:0,
        }
    },
    methods:{
        titleClick(i){
            this.currentIndex = i ;
        },
        backClick(){
            // this.$router.go(-1);
            this.$router.back();
        },
    },
}
</script>

<style scoped>
    .title{
        display:flex;
        height:44px;
        line-height:44px;
        font-size:16px;
    }
    .title-item{
        flex : 1;
    }
    .active{
        color:var(--color-high-text);
    }
    .back img{
        margin-top:11px;
    }
</style>
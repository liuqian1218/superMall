<template>
    <div class = "tab-bar-item" @click = "ItemClick">
        <div v-if = "!isActive">
            <slot name = "item-icon"></slot>
        </div>
        <div v-else>
            <slot name = "item-icon-active"></slot>
        </div>
        <div :style = "Activestyle">
            <slot name = "item-text"></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name : "TabBarItem",
    props:{
        link : {
            type : String,
        },
        activeColor:{
            type: String,
            default:"red",
        }
    },
    data(){
        return {
            // isActive : true,
        }
    },
    computed:{
        isActive(){
            // console.log(this.$route.path);
            // console.log(this.link);
            return this.$route.path.indexOf(this.link) !== -1;
        },
        Activestyle(){
            return this.isActive?{color:this.activeColor}:{}
        },
    },
    methods:{
        ItemClick(){
            this.$router.push(this.link);
            // console.log("ItemClick");
        },
    },
}
</script>

<style>
    .tab-bar-item{
        flex : 1 ;
        text-align : center;
        height : 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        height:24px;
        width:24px;
        margin-top : 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    .active{
        color:#f00;
    }
</style>
<template>
  <div class="toast" v-show = "isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
    // props:{
    //     message:{
    //         type:String,
    //         default:""
    //     },
    //     show:{
    //         type:Boolean,
    //         default:false,
    //     }
    // },
    data(){
        return {
            message:"",
            isShow:false,
        }
    },
    methods:{
        show(message,time=1500){
            this.message = message;
            this.isShow = true;
            setTimeout(() => {
                this.message = "";
                this.isShow = false;
            },time)
        }
    },
}
</script>

<style scoped>
    .toast{
        position:fixed;
        left:50%;
        top:50%;

        background-color:rgba(0,0,0,.5);
        padding:8px 10px 8px;
        color:#fff;
        border-radius:5px;
        transform:translate(-50%,-50%);
        z-index: 9;
    }
</style>
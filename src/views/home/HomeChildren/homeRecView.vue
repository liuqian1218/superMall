<template>
  <div class="recommend">
      <div v-for = "item in recommend" class="rec-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name : "homeRecView",
    props:{
        recommend:{
            type:Array,
            default (){
                return []
            }
        }
    },
}
</script>

<style scoped>
    .recommend{
        display:flex;
        width:100%;
        padding:10px 0 20px;
        border-bottom: #eee 10px solid;
    }
    .rec-item{
        flex:1;
        text-align: center;
        font-size: 12px;
    }
    .rec-item img{
        width:65px;
        height:65px;
        margin-bottom: 10px;
    }
</style>
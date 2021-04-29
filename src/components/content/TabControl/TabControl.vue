<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" class = "tab-control-item" @click = "itemClick(index)">
          <span :class = "{Active:index === CurrentIndex}">{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
    name : "TabControl",
    data(){
        return {
            CurrentIndex : 0,
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        },
    },
    methods:{
        itemClick(index){
            this.CurrentIndex = index ;
            this.$emit("tabctrClick",index);
        },
    },
}
</script>

<style scoped>
    .tab-control{
        display:flex;
        text-align: center;
        height:40px;
        line-height:40px;
        font-size:15px;
    }
    .tab-control-item{
        flex : 1;
        
    }
    .Active{
        color:var(--color-high-text);
        border-bottom: 3px solid var(--color-tint);
        padding-bottom: 5px;
    }
</style>
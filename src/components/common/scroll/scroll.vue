<template>
  <div id="wrapper" ref = "wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name : "scroll",
    data(){
        return {
            scroll:null,
        }
    },
    mounted(){
        // console.log(document.getElementById("wrapper"));
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
        })
    }
}
</script>

<style scoped>
    
</style>
<template>
  <div id="params" v-if="Object.keys(itemParams).length !== 0">
    <table class="rule">
        <tr v-for = "(item,index) in itemParams.sizes[0]">
            <td v-for = "(iitem,iidex) in item">{{iitem}}</td>
        </tr>
    </table>

    <table class = "set">
        <tr v-for = "(item,index) in itemParams.infos">
            <td class="setkey">{{item.key}}</td>
            <td class="setValue">{{item.value}}</td>
        </tr>
    </table>
    <div class="info-img" v-if="itemParams.image.length !== 0">
      <img :src="itemParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name : "itemParam",
    props:{
        itemParams:{
            type:Object,
        }
    },
}
</script>

<style scoped>
    #params{
        padding:20px 5px 20px;
        border-bottom:5px solid #f2f5f8;
    }
    table{
        width:100%;
        border-collapse: collapse;
    }
    table tr{
        height:42px;
    }
    table td{
        font-size:16px;
        border-bottom : 1px solid rgba(100,100,100,.1);
    }
    .setValue{
        color:#eb4868;
    }
    .setkey{
        width:95px;
    }
    .info-img img {
    width: 100%;
  }
</style>
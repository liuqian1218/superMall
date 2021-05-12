<template>
  <div>
    <div id="comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="title">
        <div class="title_left">用户评价</div>
        <div class="title_right">
            更多>
        </div>
    </div>
    <div class="user">
        <img :src="commentInfo.user.avatar" alt=""> 
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <p class="context">{{commentInfo.content}}</p>
    <div class="oth">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span class="goods">{{commentInfo.style}}</span>
    </div>
    <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commentInfo.images">
    </div>
</div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils.js'

export default {
    name : "detailComment",
    props:{
        commentInfo :{
            type : Object
        },
    },
    filters:{
        showDate(value){
            let date = new Date(value*1000);
            return formatDate(date, 'yyyy-MM-dd')
        }
    },
}
</script>

<style scoped>
    #comment{
        padding:5px 5px 20px;
        border-bottom:5px solid #f2f5f8;
    }
    .title{
        width:100%;
        border-bottom:3px solid #f2f5f8;
        height:40px;
    }
    .title_left{
        float: left;
        height:100%;
        line-height:40px;
        font-size:15px;
    }
    .title_right{
        float: right;
        height:100%;
        line-height:40px;
        font-size:13px;
    }
    .user {
        padding: 10px 0 5px;
    }

    .user img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }

    .user span {
        position: relative;
        font-size: 15px;
        top: -15px;
        margin-left: 10px;
    }
    .context{
        padding: 0 5px 15px;
        font-size: 14px;
        color: #777;
        line-height: 1.5;
    }
    .oth {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .oth .date {
    margin-right: 8px;
  }

  .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
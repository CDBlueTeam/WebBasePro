<style>
  @import "./../../css/Common.css";
  @import "./../../css/Common/CommonHeader.css";
</style>
<template>
    <div class="commonHeader">
       <router-link :to="menuItem.link" v-for="menuItem in menuList" :key="menuItem.id">{{menuItem.name}}</router-link>
    </div>
</template>
<script>
  export default {
    data:function(){
      return {
        menuList:[
          {name:'首页',link:'/'},
          {name:'消息中心',link:'/Message/Message'},
          {name:'个人中心',link:'/UserCenter/UserCenter'}
        ]
      }
    }
  }
</script>

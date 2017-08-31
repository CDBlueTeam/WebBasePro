<style>
  @import "./../css/Common.css";
  @import "./../css/Index.css";
</style>
<template>
  <div class="index" v-title="$route.meta.title">
    <!--共通头部-->
    <CommonHeader></CommonHeader>
    <!--主体部分-->
    <div class="main">
      <router-link :to="menuItem.link" v-for="menuItem in menuList" :key="menuItem.id">{{menuItem.name}}</router-link>
  </div>
    <!--共通尾部部分-->
    <CommonFooter></CommonFooter>
  </div>
</template>
<script>
  import CommonHeader from './Common/CommonHeader.vue'
  import CommonFooter from './Common/CommonFooter.vue'
  export default {
    data:function(){
      return {
        menuList:[
          {name:'首页',link:'/'},
          {name:'商品一览',link:'/Products/Products'},
          {name:'消息中心',link:'/Message/Message'},
          {name:'个人用户中心',link:'/UserCenter/UserCenter'},
          {name:'用户登录',link:'/Login/Login'},
          {name:'阿里云图片上传',link:'/UploadImage/UploadImage'}
        ]
      }
    },
    components:{CommonHeader,CommonFooter}
  }
</script>


<style>
  @import "./../../css/Common.css";
  @import "./../../css/Products/Products.css";
</style>
<template>
  <div class="main" v-title="$route.meta.title">
   商品数据一览
  </div>
</template>
<script>
  export default{
    data(){
      return{
        placeClass:'placeholder'
      }
    }
  }
</script>

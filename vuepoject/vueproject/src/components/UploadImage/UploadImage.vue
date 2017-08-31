<style>
  @import "./../../css/Common.css";
  @import "./../../css/UploadImage/UploadImage.css";
</style>
<template>
  <div class="main" v-title="$route.meta.title">
    <p class="explain" v-show="uploadImageList.length<3">说明:选择三张图片一起上传</p>
    <div>
      <ul ref="loaderImageComtainer" id="loaderImageComtainer"></ul>
    </div>
    <div class="uploadContents" v-show="uploadImageList.length<3">
      <label for="chooseImag" class="chooseLabel">
        <span>选择图片</span>
        <input type="file" multiple="multiple" @change="fileChange" id="chooseImag">
      </label>
    </div>
    <button @click="upload" v-show="uploadImageList.length>=3" class="uploadBtn">上传</button>
    <div class="imgInfo" v-for="imgInfo in uploadUrl">
        <p>上传图片的名称:{{imgInfo.name}}</p>
        <p>阿里云图片的地址:{{imgInfo.url}}</p>
    </div>
  </div>
</template>
<script>
  import {setUploadImageContainer} from './../../common/common.js'
  import {aliYunUpLoadImage} from './../../common/common.js'
  export default{
    data(){
      return {
        uploadImageList:[],
        //上传后图片的地址
        uploadUrl:{},
        //判断上传是否是一个图片
        typeOf:true
      }
    },
    mounted:function(){
    },
    methods:{
      //上传图片
      fileChange(e){
        let _filInfo = e.target.files[0];
        let _elementContainerId = this.$refs.loaderImageComtainer.id;
        setUploadImageContainer(_filInfo,_elementContainerId);
        //文件列表的获取
        this.uploadImageList.push(_filInfo);
      },
      upload(){
          this.uploadUrl = aliYunUpLoadImage(this.uploadImageList);
      }
    }
  }
</script>

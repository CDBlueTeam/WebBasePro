//自定义指令信息
import Vue from 'vue'
Vue.directive('title',{
  inserted(el,binding){
    document.title=binding.value;
  }
})

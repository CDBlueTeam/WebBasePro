import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import UserCenter from '@/components/UserCenter/UserCenter'
import Login from '@/components/Login/Login'
import Message from '@/components/Message/Message'
import Products from '@/components/Products/Products'
import UploadImage from '@/components/UploadImage/UploadImage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/UserCenter/UserCenter',
      name:'UserCenter',
      component:UserCenter,
      meta:{
        title:'个人中心'
      }
    },
    {
      path:'/Login/Login',
      name:'Login',
      component:Login,
      meta:{
        title:'用户登录'
      }
    },
    {
      path:'/Message/Message',
      name:'Message',
      component:Message,
      meta:{
        title:'消息中心'
      }
    },
    {
      path:'/Products/Products',
      name:'Products',
      component:Products,
      meta:{
        title:'商品一览'
      }
    },
    {
      path:'/UploadImage/UploadImage',
      name:'UploadImage',
      component:UploadImage,
      meta:{
        title:'阿里云图片上传'
      }
    }
  ]
})

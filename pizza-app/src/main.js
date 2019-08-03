import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'
import Admin from './components/Admin'

//二级路由 About->
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
Vue.use(VueRouter)

const routes =[

  //name属性分别给路由起名字 之后在使用:to绑定时候可以绑定对应的name
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/login',name:"loginLink",component:Login}, 
  {path:'/register',name:"registerLink",component:Register},
  //about的children属性
  {path:'/about',name:"aboutLink",component:About,
  children:[
    {path:'/about/contact',name:'contactLink',component:Contact},
    {path:'/about/ordering',name:'orderingGuideLink',component:OrderingGuide},
    {path:'/about/history',name:'historyLink',component:History},
    {path:'/about/delivery',name:'deliveryLink',component:Delivery},
  ],
  redirect:'/about/contact'  //指定一个默认路由
},

  {path:'/admin',name:"adminLink",component:Admin},
  {path:'*',redirect:'/'}, //重定向
]


const router=new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

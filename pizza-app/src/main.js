import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//加{} 意味着 routes.js中必须有 export routes 不能叫其他名字 如果不加{} 则随意
import {routes} from './routes'   //引用路由配置文件
 
Vue.use(VueRouter)

const router=new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//   console.log(from);
//   if(to.path=='/login'||to.path=='/register')
//   {
//     next();
//   }
//   else
//   {
//     alert("请先登录");
//     next({name:"loginLink"});
//   }
// });
//后置钩子
// router.afterEach((to,from)=>{
//   alert("进入到组件");
// })
 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

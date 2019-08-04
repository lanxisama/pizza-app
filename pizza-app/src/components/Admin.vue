<template>
    <h1>Admin</h1>
</template>

//组件内守卫

<script>
export default {
    // data(){
    //     return {
    //         name:'Yukinosita_Yuk'
    //     }
    // },
    // beforeRouteEnter (to, from, next) {
    // // 在渲染该组件的对应路由被 confirm 前调用
    // // 不！能！获取组件实例 `this`
    // // 因为当守卫执行前，组件实例还没被创建

    // //beforeRouteEnter执行时候 还没有获取到data中的数据 所以不能直接this 
    // next(vm=>{
    //     alert("欢迎管理员:"+vm.name);
    // });
    // },
    // //离开当前路由时候使用
    // beforeRouteLeave(to,from,next)
    // {
    //     if(confirm("是否离开当前页面"))
    //     {
    //         next();
    //     }
    //     else
    //     {
    //         next(false);
    //     }
    // }
}
</script>

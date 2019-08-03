<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-primary" @click="goTobefore">Before</button>
        <button class="btn btn-primary" @click="goToMenu">Menu</button>
        <button class="btn btn-primary" @click="goToName">this.$router.replace({name:'loginLink'});</button>
        <button class="btn btn-primary" @click="goByPush">使用Push方法跳转</button>
    </div>
</template>


<script>
export default {
    methods:{
        goTobefore(){
            //页面跳转几种方法
            //跳转到上一次浏览的页面
            this.$router.go(-1);
        },
        goToMenu(){
            //指定跳转
          this.$router.replace('/menu');  
        },

        //跳转指定name的路由
        goToName()
        {
            this.$router.replace({name:'loginLink'});
        },
        goByPush()
        {
            // this.$router.push('/register');
            //or 
             this.$router.push({name:'aboutLink'});
        }
 }   
}
</script>

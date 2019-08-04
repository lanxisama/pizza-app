<template>
    <div>

        <!-- <button class="btn btn-primary" @click="goTobefore">Before</button>
        <button class="btn btn-primary" @click="goToName">this.$router.replace({name:'loginLink'});</button>
        <button class="btn btn-primary" @click="goByPush">使用Push方法跳转</button> -->
        <div id="home" class="col-sm-12 text-center">
        <div id="message">
            <h1>欢迎大家品尝pizza</h1>
            <h2>点击下方按钮点餐</h2>
            <button class="btn btn-primary" @click="goToMenu">Menu</button>
        </div>
        </div>
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
<style scoped>
#home
{
    background:url('../assets/banner.jpg') repeat-x;
    height: 85vh;
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
#message{
    background: #eee;
    max-width: 70vw;
    opacity: 0.8;
     margin:0 auto; /*居中 */
     padding:20px 0;
}
</style>


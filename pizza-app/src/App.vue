<template>
  <div id="app">
   <app-header></app-header>
   <div class="context">
     <router-view></router-view>
   </div>
   
   <br>
   <div id='table' class="container">
     <div class="row">
          <div class="col-sm-12 col-nd-4">
            <router-view name='orderingGuide'></router-view>
          </div>
      </div>
        <div class="row">
            <div class="col-sm-12 col-nd-4">
            <router-view name='delivery'></router-view>
          </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-nd-4">
            <router-view name='history'></router-view>
          </div>
        </div>
   
  
   </div>
  </div>
</template>

<script>
import header from './components/Header'
export default {
  components:{
    "app-header":header
  }
}
</script>

<style>
/*  
#table{
  margin:20px auto;
  padding:10px 10px 10px 10px;
} */
</style>

<template>
  <div id="app">
   <app-header></app-header>
   <div class="context">
     <router-view></router-view>
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

</style>

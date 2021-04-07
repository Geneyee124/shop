<template>
  <div id="app">
    <keep-alive exclude="detail"><router-view/>
     </keep-alive>
    <finaltabbar></finaltabbar>


  </div>
</template>

<script>
import finaltabbar from "./components/lasttabbar/finaltabbar";
export default {
  name: 'App',
  components:{finaltabbar}
}
</script>

<style>
@import "assets/css/base.css";
body{
  padding:0;
  margin:0
}
</style>

<template>
  <div id="app">
    <finaltabbar></finaltabbar>
    <router-view/>
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

<template>
<div class="toast" v-show="show">
  <div style="padding: 10px">{{message}}</div>
</div>
</template>

<script>
export default {
  name: "toast",
  props: {
    message:{
      type:String,
      default:''
    },
    show:{
      type:Boolean,
      default: false
    }
}

}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0,0,0,.6);
  transform: translate(-50%,-50%);
  /*padding: 8px 10px;*/
  color: #f6f6f6;
opacity: 0.95;
}
</style>

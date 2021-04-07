<template>
<div class="check-button" :class="{check:ischecked}">
  <img src="../../../assets/img/tick.svg">
</div>
</template>

<script>
export default {
  name: "checkbutton",
  props: {
    ischecked:{
      type:Boolean,
      default:false
    }

  }
}
</script>

<style scoped>
.check-button{

  border-radius: 50%;
  border: 1px solid black;
}
.check{
  background-color:yellow;
  border-color: gray;
}
</style>

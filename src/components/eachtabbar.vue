<template>
  <div class="eachtabbar" v-on:click="itemclick">
<div v-if="!isactive"><slot name="img-dark"></slot></div>
    <div v-else> <slot name="img-light"></slot></div>
    <div v-bind:class="{active:isactive}"> <slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
name: "eachtabbar",
  props:{
  path:String
  },
  data(){
  return{

  }
  },
  computed:{
  isactive(){
    return this.$route.path==this.path
  }
  },
  methods:{
  itemclick(){
    if(this.$route.path==this.path){
      return
    }
    this.$router.push(this.path)
  }
  }
//if语句是为了处理相同路径报错问题
}
</script>

<style scoped>
.eachtabbar{
  flex: 1;
  text-align: center;
  height: 49px;
}
.eachtabbar img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: var(--color-tint);
}
</style>

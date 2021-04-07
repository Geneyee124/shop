<template>
<div class="tab">
  <div v-for="(item,index) in titles" @click="tabclick(index)" class="tab-item" :key="index">
  <span  v-bind:class="{active:index==currentIndex}">
 {{item}}
  </span>
  </div>
</div>
</template>

<script>
export default {
name: "tabcontrol",
  props:{
  titles:{
    type:Array,
    default(){
      return[]
    }
  }
  },
  data(){
  return{
    currentIndex:0
  }
  },
  methods:{
  tabclick(index){
    this.currentIndex =index;
    this.$emit('tabclick',index)
  }
  }
}
</script>

<style scoped>
.tab{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #ffffff;
  font-size: 15px;

}
.tab-item{
  flex: 1;

}
.tab-item span{
  padding: 5px;
}
.active{
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>

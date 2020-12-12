<template>
<div id="reco">
  <div v-for="(item,index) in recommends"  :key="index" class="recommend">
    <a :href="item.link"><img :src="item.image">
      <div>{{item.title}}</div></a>
  </div>
</div>
</template>

<script>
export default {
name: "reco",
  props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
  }
}
</script>

<style scoped>
#reco{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 12px solid #eee;
}
.recommend{
  flex:1;
}
.recommend img{
  width:70px;
  height: 70px;
  margin-bottom: 5px;

}
.recommend a{
  width: 17px;
  height: 17px;
}
</style>

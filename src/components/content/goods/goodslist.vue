<template>
<div class="goodslist">
  <goodsitem v-for="(item,index) in goods" :goodsitem="item" :key="index">{{item}}</goodsitem>
<!--  {{goods}}-->
</div>
</template>

<script>
import goodsitem from "./goodsitem";
export default {
  name: "goodslist",
  components:{goodsitem},
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }

}
</script>

<style scoped>
.goodslist{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  padding: 1px;
}

</style>

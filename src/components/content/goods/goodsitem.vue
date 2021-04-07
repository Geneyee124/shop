<template>
<div class="goodsitem" @click="itemclick">
  <a>
  <img :src='showimage' @load="imageload" >
  <div class="goodsinfo">
    <p>{{goodsitem.title}}</p>
    <span class="price">{{goodsitem.price}}</span>
    <span class="collect">{{goodsitem.cfav}}</span>
  </div>
  </a>
</div>
</template>

<script>

export default {
name: "goodsitem",
  props:{
  goodsitem: {
    type:Object,
    default(){
      return{}
    }
  }
  },
  computed:{
  showimage(){
    return this.goodsitem.image || this.goodsitem.show.img
  }
  },
methods:{
  imageload(){
    this.$bus.$emit("itemimageload")
  },
  itemclick(){
    // console.log("----跳转到详情页");
    this.$router.push('./detail/'+this.goodsitem.iid)
  }
}
}
</script>

<style scoped>
.goodsitem{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsitem img{
  width: 100%;
  border-radius: 5px;
  border:1px solid lightgoldenrodyellow;
}
.goodsinfo{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsinfo p{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.price{
  color:lightpink;
  margin-right: 20px;
}
.collect{
  position: relative;
}
.collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top:-1px;
  width: 14px;
  height: 14px;
background:url("../../../assets/img/collect.png") 0 0/14px 14px;
}
</style>

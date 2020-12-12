<template>
  <bottomtabbar>
    <eachtabbar path="/home">
      <img  slot="img-dark" src="../../assets/img/home.png">
      <img  slot="img-light" src="../../assets/img/home1.png">
      <div slot="text">首页</div>
    </eachtabbar>
    <eachtabbar path="/category">
      <img slot="img-dark" src="../../assets/img/dis.png">
      <img slot="img-light" src="../../assets/img/dis1.png">
      <div slot="text">分类</div>
    </eachtabbar>
    <eachtabbar path="/car">
      <img slot="img-dark" src="../../assets/img/car.png">
      <img slot="img-light" src="../../assets/img/car1.png">
      <div slot="text">购物车</div>
    </eachtabbar>
    <eachtabbar path="/my">
      <img slot="img-dark" src="../../assets/img/my.png">
      <img  slot="img-light" src="../../assets/img/my1.png">
      <div slot="text">我的</div>
    </eachtabbar>
  </bottomtabbar>
</template>
import
<script>
import bottomtabbar from "../bottomtabbar";
import eachtabbar from "../eachtabbar";

export default {
name: "finaltabbar",
  components:{
    bottomtabbar,eachtabbar
  }
}
</script>

<style scoped>

</style>

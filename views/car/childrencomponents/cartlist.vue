<template>
<div class="cart-list">
  <scroll class="content" ref="scroll">
<cartlistitem v-for="(item,index) in cartCount" :product ="item" :key="index">

</cartlistitem>
  </scroll>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from "../../../src/components/common/scroll/scroll";
import cartlistitem from "./cartlistitem";
export default {
  name: "cartlist",
  components:{scroll,cartlistitem},
  computed:{
    ...mapGetters(['cartCount'])
  },
  activated() {
    // console.log("activated");
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list{
  height: calc(100vh - 44px);
  /*position: absolute;*/
}
.content{
  height: calc( 100vh  - 133px);
  overflow-y: hidden;
}
</style>

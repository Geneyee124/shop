<template>
  <div class="car">
    <navbar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <carbottombar> </carbottombar>
    <cartlist></cartlist>

  </div>
</template>

<script>
import navbar from "../../src/components/common/navbar/navbar";
import {mapGetters} from 'vuex'
import Cartlist from "./childrencomponents/cartlist";
import carbottombar from "./childrencomponents/carbottombar";
export default {
  name: "car",
  components:{
    Cartlist,
    navbar,
    carbottombar
  },
  computed:{
    //2种语法
// ...mapGetters(['cart'])
    ...mapGetters({
      length:'cart'
    })
  }
}
</script>

<style scoped>
.car{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  font-weight: 700;
}
</style>

<template>
  <div class="bbb">
    <navbar>
      <div slot="left" class="left" @click="backclick">
        <img src="../../../src/assets/img/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title"
             class="aaa" :class="{active:index === currentIndex}" v-on:click="itemclick(index)">
          {{item}}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../src/components/common/navbar/navbar";
export default {
  name: "detailnav",
  components: {Navbar},
  data(){
    return{
      title:['商品','参数','讨论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex = index
      this.$emit("itemclick",index)
    },
    backclick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.aaa{
  flex: 1;
}
.active{
  color: var(--color-tint);
}
.left img{
  margin-top: 10px;
}
.bbb{
  background-color: #f6f6f6;
  /*height: 100vh;*/

}
</style>

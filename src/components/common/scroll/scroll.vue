<template>
<div class="wrapper" ref="wrapper">
 <div class="content">
   <slot></slot>
 </div>
</div>
</template>
<!--//ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象-->
<!--//ref如果绑定在普通元素中，那么会通过this.$refs.refname获取的一个元素对象-->
<script>
import BScroll from "better-scroll"
export default {
  name: "scroll",
  props:['probeType',"pullUpLoad"],
  //'pullUpLoad'
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    //1.创建BScroll对象
this.scroll = new BScroll(this.$refs.wrapper,{
click:true,
  probeType:this.probeType,
  pullUpLoad:this.pullUpLoad
  //监听滚动到底部
})
    // this.scroll.scrollTo(0,0)
    //2.监听滚动的位置
    this.scroll.on("scroll",(position)=>{
      // console.log(position);
      this.$emit("scroll",position)
    })
    //3.监听上拉加载事件
    // this.scroll.on("pullingUp",()=>{
    // this.$emit("pullingUp")
    // })
//监听滚动到底部
if(this.pullUpLoad){
  this.scroll.on("pullingUp",()=>{
    // console.log("监听");
    this.$emit("pullingUp")
  })


    }
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time)
    },
    // finishPullUp(){
    //   this.scroll.finishPullUp()
    // },
    refresh() {
      // console.log("----1----");
      // console.log("refresh with debounce")
      this.scroll.refresh()
    },
    finishPullUp() {
    },

    // },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>

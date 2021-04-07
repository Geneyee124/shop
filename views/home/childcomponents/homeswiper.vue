<template>
  <swiper>
  <swiperitem v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
    <img :src="item.image" @load="imageload">
    </a>
  </swiperitem>
  </swiper>
</template>
<script>
import swiperitem from "../../../src/components/common/swiper/swiperitem";
import swiper from "../../../src/components/common/swiper/swiper";
export default {
name: "homeswiper",
  props:{
  banners:{
    type:Array,
    default(){
      return []
    }
  }
  },
  components:{swiperitem,swiper},
  data(){
  return{
    isload:false

  }
  },
  methods:{
  // itemclick(link){
  //   location.href=link
  // }
    imageload(){
      // console.log("111");
      if (!this.isload){
        this.$emit("swiperimageload")
        this.isload = true
      }

    }
  }
}
</script>

<style scoped>

</style>

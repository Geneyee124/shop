<template>
  <swiper>
  <swiperitem v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
    <img :src="item.image">
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
  // methods:{
  // itemclick(link){
  //   location.href=link
  // }
  // }
}
</script>

<style scoped>

</style>

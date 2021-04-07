<template>
<swiper>
  <swiperitem   class="tiny" v-for="item in topImages">
    <img :src="item">
  </swiperitem>
</swiper>
</template>

<script>
import swiper from "../../../src/components/common/swiper/swiper";
import swiperitem from "../../../src/components/common/swiper/swiperitem";
export default {
  name: "detailswiper",
  components:{swiperitem,swiper},
  props:['topImages']
}
</script>

<style scoped>
.tiny{
  height: 300px;
  overflow-y: hidden;
}
</style>

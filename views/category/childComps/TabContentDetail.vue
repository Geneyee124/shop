<template>
    <goodsitem v-for="(item, index) in categoryDetail" :key="index" :goods="item"></goodsitem>
</template>

<script>
 import goodsitem from "../../../src/components/content/goods/goodsitem";


  export default {
    name: "TabContentDetail",
    components: {
      goodsitem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>

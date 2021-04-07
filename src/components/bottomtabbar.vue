<template>
  <div class="tabbar">
<slot></slot>
    </div>
</template>

<script>

export default {
name: "bottomtabbar",
  components:{

  }
}
</script>

<style scoped>
.tabbar{
  display: flex;
  background-color:#f6f6f6;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0 1px 1px rgba(100,100,50,0.3);
  z-index:8;

}

</style>

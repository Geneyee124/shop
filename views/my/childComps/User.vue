<template>
  <div id="user">
    <div class="enter">
      <img src="../../../src/assets/img/tit.svg">
    </div>
    <div class="phone">
      <div>登录/注册</div>
      <div class="phoneD">
<!--        <img src="~assets/img/profile/phone.svg" alt="">-->
        <img src="../../../src/assets/img/phone.svg">
        <span>暂无绑定手机号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#user {
  background-color: var(--color-tint);
  display: flex;
  color: #fff;
  font-size:14px;
  padding: 5px 0 10px 0;
}
.enter {
  width: 80px;
  text-align: center;
}
.enter img{
  left: 5%;
  width: 100%;
  height: 100%;
  margin-top: 2px;
}
.right {
  width: 50px;
  text-align: center;
}
.right img{
  width: 30%;
  height: 30%;
  margin-top: 50%;
}
.phone {
  flex: 1;
  padding-left: 10%;
  margin-top: 18px;
  font-size: 16px;
}
.phone span{
  font-size: 16px;
}
.phone img{
  width: 10%;
  height: 10%;
}
.phoneD {
  margin: 5px 0 0 -2px;
}
</style>

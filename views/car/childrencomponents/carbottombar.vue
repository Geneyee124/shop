<template>
<div class="bottombar">
  <div class="content">
    <checkbutton class="check-button" :ischecked="isselectall" @click.native="checkClick"></checkbutton>
    <span>全选</span>
  </div>
  <div class="price">合计：{{totalPrice}}</div>
  <div class="buy">去计算：{{$store.getters.cart}}</div>
</div>
</template>

<script>
import checkbutton from "../../../src/components/content/checkbutton/checkbutton";
export default {
  name: "carbottombar",
  components: {checkbutton},
  computed: {
    totalPrice() {
      return'￥'+ this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue,item) =>{
        return preValue +item.price*item.count
      },0)
    },
    checklength(){
      return this.$store.state.cartList(item =>item.checked).length
    },
    isselectall(){
      if(this.$store.state.cartList.length === 0)
        return false
      //1.第一种filter方法
     // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      //2.第二种find方法
      return !(this.$store.state.cartList.find(item => !item.checked))
      //3.直接遍历
      // let ischecked = false
      // for (let item of this.$store.state.cartList){
      //   if (!item.checked){
      //     ischecked =  false
      //     return ischecked
      //   }
      // }
      // return true
    }


  },
  methods:{
    checkClick(){
      if(this.isselectall){//全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{//部分或全部未选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }

  }

}
</script>

<style scoped>
.bottombar{
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 10px;
  color: #888;
  line-height: 44px;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.content{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}

.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.bottombar .price{
  margin-right: 50px;
  font-size: 14px;
  color: #666;
}
.buy {
  background-color: var(--color-tint);
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
  font-size: 14px;
}

</style>

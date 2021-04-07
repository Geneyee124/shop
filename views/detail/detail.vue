<template>
<div id="detail">
<!--  <div>{{$store.state.cartList.length}}</div>-->
<detailnav class="nav" @itemclick="itemclick" ref="nav"></detailnav>
  <scroll class="content" ref="scroll" @scroll="contentscroll" :probe-type="3">
  <detailswiper :top-images="topImages"></detailswiper>
  <detailbaseinfo :good="good"></detailbaseinfo>
  <detailshopinfo :shop="shop"></detailshopinfo>
    <detailgoods :detail-info="detailInfo" @imageload="imageLoad"></detailgoods>
    <detailparaminfo :param-info="paramInfo" ref="params"></detailparaminfo>
    <detailcommentinfo :comment-info="commentInfo" ref="comment"></detailcommentinfo>
    <goodslist :goods="recommends" ref="recommend"></goodslist>

  </scroll>
  <backtop @click.native="backclick" v-show="isshow"></backtop>
  <toast :message="message" :show="show"></toast>
  <detailbottombar @addcart="addTocart"></detailbottombar>
</div>
</template>

<script>
import Detailnav from "./childcomponent/detailnav";
import {getdetails, Good, GoodsParam, shop,getrecommend} from "../../network/detail";
import detailswiper from "./childcomponent/detailswiper";
import detailbaseinfo from "./childcomponent/detailbaseinfo";
import detailshopinfo from "./childcomponent/detailshopinfo";
import scroll from "../../src/components/common/scroll/scroll";
import detailgoods from "./childcomponent/detailgoods";
import detailparaminfo from "./childcomponent/detailparaminfo";
import detailcommentinfo from "./childcomponent/detailcommentinfo";
import goodslist from "../../src/components/content/goods/goodslist";
import {debounce} from "../../src/components/common/utils/utils";
import detailbottombar from "./childcomponent/detailbottombar";
// import backtop from "../../src/components/content/backtop/backtop";
import{ backTopMixin} from "../../src/components/common/utils/mixin";
import toast from "../../src/components/common/toast/toast";
export default {
  name: "detail",
  components: {Detailnav, detailswiper,detailbaseinfo,detailshopinfo,scroll,
    detailgoods,detailparaminfo,detailcommentinfo,goodslist,detailbottombar,toast},
  mixins:[backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      good:{ },
      shop:{ },
      detailInfo:{},
      paramInfo:{ },
      commentInfo:{ },
      recommends:[ ],
      refresh: undefined,
      themeTopY:[0,0,0,0],
      currentIndex:0,
      isshow:false,
      message:null,
      show:false
    }
  },
  created() {
    this.getdetails()
    this.getrecommend()
// // console.log(this.$route.params.iid)
//     this.iid = this.$route.params.iid
//     getdetails(this.iid).then(res => {
//       console.log(res);
//       const big = res.data.result;
//       this.topImages = big.itemInfo.topImages
//       console.log(this.topImages)
//       this.good = new Good(big.itemInfo, big.columns, big.shopInfo)
//       this.shop = new shop(big.shopInfo)
//       this.detailInfo = big.detailInfo
//       this.paramInfo = new GoodsParam(big.itemParams.info, big.itemParams.rule );
//       if (big.rate.list){
//         this.commentInfo = big.rate.list[0]
//       }
//     })
//     getrecommend().then(res =>{
//         console.log(res)
//         this.recommends = res.data.data.list
//       }
//
//     )
    // this.$nextTick(()=>{
    //     this.themeTopY =[ ]
    //     this.themeTopY.push(0)
    //     this.themeTopY.push(this.$refs.params.$el.offsetTop)
    //     this.themeTopY.push(this.$refs.comment.$el.offsetTop)
    //     this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    //     console.log(this.themeTopY)
    // })
    // activated() {
    //   this.iid = this.$route.params.iid
    //   console.log(this.$route.params.iid)
    //
    //   })
    // }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh, 1000)
  },
  updated() {
    // this.themeTopY =[ ]
    // this.themeTopY.push(0)
    // this.themeTopY.push(this.$refs.params.$el.offsetTop)
    // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
    // this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    // // this.themeTopY.push(Number.MAX_VALUE)
    // console.log(this.themeTopY)
  },
  methods: {
    imageLoad() {
      this.refresh()
      // console.log("refresh no debounce")
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
      // this.themeTopY[0] = 0
      // this.themeTopY[1] = this.$refs.params.$el.offsetTop
      // this.themeTopY[2] = this.$refs.comment.$el.offsetTop
      // this.themeTopY[3] = this.$refs.recommend.$el.offsetTop
      // this.themeTopY.push(Number.MAX_VALUE)
      // console.log(this.themeTopY)
    },
    itemclick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 1000)
    },
    getdetails() {
      this.iid = this.$route.params.iid
      getdetails(this.iid).then(res => {
        console.log(res)
        const big = res.data.result
        this.topImages = big.itemInfo.topImages
        console.log(this.topImages)
        this.good = new Good(big.itemInfo, big.columns, big.shopInfo)
        this.shop = new shop(big.shopInfo)
        this.detailInfo = big.detailInfo
        this.paramInfo = new GoodsParam(big.itemParams.info, big.itemParams.rule);
        if (big.rate.list) {
          this.commentInfo = big.rate.list[0]
        }
        // this.$nextTick(()=>{
        //   //根据最新的数据，对应的DOM已经被渲染出来了，但是图片依然没有加载完(目前offsetTop还是不含有图片）
        //offsetTop主要还是因为图片的问题
        //   this.themeTopY =[ ]
        //   this.themeTopY.push(0)
        //   this.themeTopY.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        //   // this.themeTopY.push(Number.MAX_VALUE)
        //   console.log(this.themeTopY)
        // })
      })
    },
    getrecommend() {
      getrecommend().then(res => {
        // console.log(res)
        this.recommends = res.data.data.list
      })
    },
    contentscroll(position) {
      // console.log(position);
      const positionY = -position.y
      // for(let i= 0;i<this.themeTopY.length;i++){
      //   if(this.currentIndex !== i && i< this.themeTopY.length -1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1] ||
      //     (i === this.themeTopY.length - 1 && positionY > this.themeTopY[i])){
      //     this.currentIndex = i;
      //     console.log(i)
      //     // console.log(this.currentIndex);
      //  this.$refs.nav.currentIndex =  i
      // }
      // }
      for (let i = 0; i < this.themeTopY.length - 1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])) {
          this.currentIndex = i;
          // this.$refs.nav.currentIndex = this.currentIndex
          this.$refs.nav.currentIndex = i
        }
        this.isshow= (-position.y) > this.themeTopY[0]
      }

    },
    backclick(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    addTocart(){
      // console.log("1111111");
      //1.获取商品信息
      const product ={}
      product.image = this.topImages[0]
      product.title = this.good.title
      product.desc = this.good.desc
      product.price = this.good.nowprice
      product.iid = this.iid
      //2.将商品添加到购物车
     this.$store.dispatch('addCart',product).then(res =>{
       console.log(res)
        this.show = true
        this.message =res;
       setTimeout(() =>{
         this.show = false
         this.message=''
       },1000)
     })
      // this.$store.commit('addCart',product)
      //3.添加到购物车成功

    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index:9;
  background-color:#FFFFFF;
  height: 100vh;
}
.content{
  /*height: calc(100vh  - 44px);*/
  position: absolute;
  top: 44px;
  bottom: 60px;
}
.nav{
  position: relative;

  z-index: 9;
}
</style>

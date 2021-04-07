<template>
  <div class="homie">
    <navbar class="home-nav"><div slot="center">EGO</div> </navbar>
    <tabcontrol :titles="['流行','新款','精选']"   @tabclick="tabclick"
                ref="tabcontrol1" class="tab" v-show="istabfixed"> </tabcontrol>
<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll" :pull-up-load="true" @pullingUp="loadmore">
<!--@pullingUp="loadmore">-->
<!--  父传子当中，如果没有加v-bind，也可以传递，但是传递的就是一个字符串啦-->
       <homeswiper :banners="banners" @swiperimageload="swiperimageload"></homeswiper>
       <reco :recommends="recommends"></reco>
       <featureview></featureview>
       <tabcontrol :titles="['流行','新款','精选']"   @tabclick="tabclick"
       ref="tabcontrol2"> </tabcontrol>
       <goodslist :goods="showgoods"></goodslist>
</scroll>
    <backtop @click.native="backclick" v-show="isshow"></backtop>
<!--    native修饰符，当我们需要监听组件的原生事件时，必须加上.native修饰符，即可进行监听-->
    </div>
</template>

<script>
import navbar from "../../src/components/common/navbar/navbar";
import homeswiper from "./childcomponents/homeswiper";
import featureview from "./childcomponents/featureview";
import {gethomemultidata,gethomegoods} from "../../network/home";
import reco from "./childcomponents/reco";
import tabcontrol from "../../src/components/content/tabcontrol/tabcontrol";
import goodslist from "../../src/components/content/goods/goodslist";
import scroll from "../../src/components/common/scroll/scroll";
import backtop from "../../src/components/content/backtop/backtop";
import {debounce} from "../../src/components/common/utils/utils";

export default {
  name: "home",
  components:{
    navbar,
    homeswiper,
    reco,
    featureview,
    tabcontrol,
    goodslist,
    scroll,
    backtop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currenttype:'pop',
      isshow:false,
      tabOffsetTop:0,
      istabfixed:false,
      saveY:0
    }
  },
  computed:{
    showgoods(){
    return this.goods[this.currenttype].list
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    //

  },
  deactivated() {
    // console.log("ddd");
    this.saveY = this.$refs.scroll. getScrollY()
    // console.log(this.saveY);
  },
  created() {
    //1.请求多个数据
    this.gethomemultidata();
    //2.请求商品数据
    this.gethomegoods('pop')
    this.gethomegoods("new")
    this.gethomegoods("sell")
//created里面尽量不要加载dom元素
    //3.监听item中图片加载完成
    this.$bus.$on("itemimageload",()=>{
      // console.log("-----");
    })
  },
  mounted() {
    //1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,1000)
    this.$bus.$on("itemimageload", () => {
      refresh()
    })
    //2.获取tabControl的offsetTop
    //所有的组件都有一个属性$el,用于获取组件中的元素
    // this.tabOffsetTop = this.$refs.tabcontrol
    console.log(this.$refs.tabcontrol2)
    console.log(this.$refs.tabcontrol2.$el.offsetTop);

  },
  methods:{
    swiperimageload(){
      // console.log(this.$refs.tabcontrol.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
    },
    //事件监听的方法
    tabclick(index){
      switch (index){
        case 0:
          this.currenttype ="pop"
              break
        case 1:
          this.currenttype = 'new'
              break
            case 2:
                this.currenttype="sell"
                break
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    // 网络请求的封装
    gethomemultidata(){
    gethomemultidata().then(res =>{
      // console.log(res)
      // this.result = res;
      // 可以把这些写在methods里面然后再把他吊在methods中
      this.banners = res.data.data.banner.list;
      this.recommends =res.data.data.recommend.list;
    })
    },
    gethomegoods(type){
      // console.log(123)
      const page = this.goods[type].page + 1
      gethomegoods(type,page).then(res =>{
        // console.log(res);
        // res =>pop的第一页
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+= 1
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp()
         })
    },
    backclick(){
      // this.$refs.scroll.scroll.scrollTo(0,0,1000)
      this.$refs.scroll.scrollTo(0,0)
    },
    contentscroll(position){
      //1.判断backtop是否显示

      // console.log(position);
     this.isshow= (-position.y) > 1000
      //2.决定tabcontrol是否吸顶（position：fixed）
      this.istabfixed = (-position.y) > this.tabOffsetTop
    },
   loadmore(){
    this.gethomegoods(this.currenttype)
   }

  }
}
</script>

<style scoped>
.homie{
  padding-top: 0px;
  position: relative;
  height: 100vh;
}
.home-nav{
  /*position: fixed;*/
  /*left: 0;*/
  /*top: 0;*/
  /*right: 0;*/
  background-color: var(--color-tint);
  z-index: 9;
}
/*.tab-control{*/
/*  !*position: sticky;*!*/
/*  top: 44px;*/
/*  z-index: 8;*/
/*}*/-
/*sticky具有吸顶效果，可以使用，当达到滚动的某个值时，会为fixed的，未到达其top时，会达到static属性*/
.tab{
  position: relative;
  z-index: 9;
}
.content{
  height: calc(100vh - 89px);
  overflow-y: hidden;
}
</style>

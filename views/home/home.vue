<template>
  <div class="homie">
    <navbar class="home-nav"><div slot="center">购物街</div> </navbar>
    <homeswiper :banners="banners"></homeswiper>
    <reco :recommends="recommends"></reco>
    <featureview></featureview>
    <tabcontrol :titles="['流行','新款','精选']"  class="tab-control" @tabclick="tabclick"> </tabcontrol>
    <goodslist :goods="showgoods"></goodslist>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
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
export default {
  name: "home",
  components:{
    navbar,
    homeswiper,
    reco,
    featureview,
    tabcontrol,
    goodslist
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
      currenttype:'pop'
    }
  },
  computed:{
    showgoods(){
    return this.goods[this.currenttype].list
    }
  },
  created() {
    //1.请求多个数据
    this.gethomemultidata();
    //2.请求商品数据
    this.gethomegoods('pop')
    this.gethomegoods("new")
    this.gethomegoods("sell")
  },
  methods:{
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

      }
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
      const page = this.goods[type].page + 1
      gethomegoods(type,page).then(res =>{
        console.log(res);
        // res =>pop的第一页
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+= 1
         })
    }
  }
}
</script>

<style scoped>
.homie{
  color: black;
  padding-top: 44px;
  padding-bottom: 49px;
  position: relative;
}
.home-nav{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color:lightyellow;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
/*sticky具有吸顶效果，可以使用，当达到滚动的某个值时，会为fixed的，未到达其top时，会达到static属性*/
</style>

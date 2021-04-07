import backtop from "../../content/backtop/backtop";
export const backTopMixin ={
  components:{
    backtop
  },
  data(){
    return{
      isshow:false
    }
  },
  methods:{
    backclick(){
      this.$refs.scroll.scrollTo(0,0,300)
    }
  }
}

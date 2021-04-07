<template>
  <div id="category">
    <navbar class="categoryTop"><div slot="center">分类</div></navbar>
    <div class="content">

      <tab-menu :categories="categories"
                @selectItem="selectItem"
                @rightScroll='rightScroll' class="menu"></tab-menu>
      <tab-content-category :subcategories="showSubcategory" class="category"></tab-content-category>

    </div>
  </div>
</template>

<script>
import navbar from "../../src/components/common/navbar/navbar";
import TabMenu from './childComps/TabMenu.vue'
import TabContentCategory from './childComps/TabContentCategory.vue'
import{getCategory,getSubcategory} from "../../network/category";
import scroll from "../../src/components/common/scroll/scroll";
export default {
  components: {
    scroll,
    navbar,
    TabMenu,
    TabContentCategory,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    }
  },
  created() {
    // 1.请求分类数据
    this._getCategory()
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // 1.获取分类数据
        this.categories = res.data.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          }
        }
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data.data
        this.categoryData = {...this.categoryData}
      })
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index)
    },
    rightScroll() {
      this.$refs.scroll.refresh()
    }
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.categoryTop {
  background-color: var(--color-tint);
  color: #fff;
  box-shadow: 0 2px 1px rgba(100, 100, 100, .05);
}
.content {
  height: 100vh;
  display: flex;
}
#tab-content {
  height: calc(100% - 44px - 49px);
  flex: 1;
}
.menu{
  width: 100px;
  position: relative;
}
.category{
  margin-left: 20px;
  height: calc(100% - 44px - 49px);
  flex: 1;
}
</style>

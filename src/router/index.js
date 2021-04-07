import Vue from 'vue'
import Router from 'vue-router'

const home =()=>import("../../views/home/home")
const car =()=>import("../../views/car/car")
const category =()=>import("../../views/category/category")
const my =()=>import("../../views/my/my")
const detail =()=> import('../../views/detail/detail')
Vue.use(Router)
const routes=[
  {path:'/',
  redirect:'/home'},
  {path:'/home',
  component:home},
  {path:'/car',
    component:car},
  {path:'/category',
    component:category},
  {path:'/my',
    component:my},
  {path:'/detail/:iid',
  component:detail}
]
const router=new Router({
    routes,
    mode:"history"
}

)

export default router

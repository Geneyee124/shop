import toast from "./toast";
const obj={}
obj.install = function (Vue){
  Vue.prototype.$toast = toast
}

export default obj

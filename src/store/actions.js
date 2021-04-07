export default
{
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.查看是否添加过
      const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)
      // console.log(info);

      // 2.+1或者新添加
      if (oldInfo) {
        //数量+1
        // oldInfo.count += 1
        context.commit('addCounter',oldInfo)
        resolve("当前的商品数量+1")
      } else {
        //添加新的商品
        payload.count = 1
        payload.checked = true
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('添加了新的商品')
      }
    })
  }
}

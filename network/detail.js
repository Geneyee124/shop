import {request} from './request'

export function getdetails(iid){
  return request({
    url:"detail",
    params:{
      iid
    }
  })
}

export function getrecommend(){
  return request({
    url:"recommend"
  })
}


export class Good{
  constructor(itemInfo,columns,shopInfo) {
 this.title = itemInfo.title;
 this.newprice = itemInfo.price;
 this.oldprice = itemInfo.oldPrice;
 this.desc = itemInfo.discountDesc;
 this.columns = columns;
 this.service = shopInfo.services;
 this.nowprice = itemInfo.lowNowPrice
  }
}

export class shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam{
  constructor(info,rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

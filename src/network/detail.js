import { request } from "./request"

// 根据商品id获取请求数据
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

// 请求详情页的推荐数据

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}




/*
 这是自己封装的函数，数据集。new出来则可调用对应传来的网络请求数据，且取出需要的值。
 方便扩展，修改，且一目了然。面向自身封装对象去编写
*/

/*
数据释意：
商品名
商品描述
价格
折扣
折后价
商品状态（销量，收藏，发货状态）
注：商品状态第三个值是在services中，所以单独调取创建个services变量调取

*/

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title,
            this.desc = itemInfo.desc,
            this.newPrice = itemInfo.oldPrice,
            this.discount = itemInfo.discountDesc,
            this.realPrie = itemInfo.lowNowPrice,
            this.columns = columns,
            this.services = services
    }
}


// 详情店铺数据
export class Shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo,
            this.shopName = shopInfo.name
        this.shopcSells = shopInfo.cSells,
            this.shopcGoods = shopInfo.cGoods,
            this.shopScore = shopInfo.score
    }
}


// 详情图片数据
export class Image {
    constructor(detailInfo) {
        this.desc = detailInfo.desc,
            this.detailImage = detailInfo.detailImage
    }
}
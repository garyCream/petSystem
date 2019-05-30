const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
    name:String,//商品品牌名、推广标题
    type:String,//狗粮、猫粮、猫砂、玩具等
    methods:String,//制作方法（粮食的烘培、膨化等）
    AS:String,//适用规格：适用幼犬、成犬、幼猫等
    ExcS:String,//专属规格：贵宾专用、比熊专用等
    packagingS:String,//包装规格： 1kg，5kg 等
    taste:String,//口味： 鸡肉味、牛肉味
    SpecialMethods:String,//特殊功用： 美毛、去泪痕
    origin:String,// 产地：国产 广州、加拿大、美国等
    time:String,//出厂日期： 生产日期；
    shelfLife:String,// 保质期：12月（保质期设定会应景起效，如会员价）
    supplier:String,//供应商
    featuresThat:String,//特色说明
    price:String,//价格：基准价格
    img:Array//图片：小图、大图(index=0小图)
})

mongoose.model("goodsModel", goodsSchema, "goods");
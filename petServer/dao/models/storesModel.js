const mongoose = require("mongoose");

//门店模型
const storeSchema = new mongoose.Schema({
    storeUserID:{//关联账号
        type:mongoose.Schema.Types.ObjectId,
        ref:'usersModel'
    },
    name:String,//店名
    BLNum:String,//营业执照号码
    BLImg:String,//营业执照图片
    address:String,//营业地址
    positions:String,//定位
    legalPerson:String,//法人
    phone:String,//电话
    img:String,//头图
    features:String,//特色
    VIPLevel:Number,//vip等级
    commissionRatio:Number,//佣金比例
    clerkProperties:Array//店员属性
})


mongoose.model("storesModel", storeSchema, "stores");//其中store为集合名
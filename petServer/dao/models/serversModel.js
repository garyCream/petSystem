const mongoose = require("mongoose");

//服务模型
const serversSchema = new mongoose.Schema({
    name:String,//名称
    type:String,//类型
    time:String,//排期：按时间段
    apply:String,//适用规格
    servers:String,//服务规格：普修，精修等
    timeConsuming:String,//耗时：正常耗时；
    waiterLevel:String,//服务员等级：普通，高级价格不同；
    price:String,//价格：基准价格，会员价和活动价都以它为基准
})


mongoose.model("serversModel", serversSchema, "servers");//其中servers为集合名
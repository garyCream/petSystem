const mongoose = require("mongoose");

//评论模型
const evaluatesSchema = new mongoose.Schema({
    orderId: {//关联订单模型
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ordersModel'
    },
    storesId:{//关联门店模型
        type: mongoose.Schema.Types.ObjectId,
        ref: 'storesModel'
    },
    orderTotalPrice:String,//订单总金额：
    grade:String,//评分
    texts:String,//内容
    img:String,//评论截图
    evaluateType:String,//评价性质
    spoilMainsId:{//评价人:关联宠主模型
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spoilMainsModel'
    },
})


mongoose.model("evaluatesModel", evaluatesSchema, "evaluates");//其中store为集合名
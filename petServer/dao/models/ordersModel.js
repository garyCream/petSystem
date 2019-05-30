const mongoose = require("mongoose");

//订单模型
const orderSchema = new mongoose.Schema({
    spoilMainsID:{//关联宠主模型
        type:mongoose.Schema.Types.ObjectId,
        ref:'spoilMainsModel'
    },
    storesID:{//关联门店模型
        type:mongoose.Schema.Types.ObjectId,
        ref:'storesModel'
    },
    goodsID:{//关联商品模型
        type:mongoose.Schema.Types.ObjectId,
        ref:'goodsModel'
    },
})


mongoose.model("ordersModel", orderSchema, "orders");//其中store为集合名
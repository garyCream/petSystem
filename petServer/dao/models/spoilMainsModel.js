const mongoose = require("mongoose");

const spoilMainsSchema = new mongoose.Schema({//宠主模型
    phone:String,//电话号码
    nickname:String,//昵称
    name:String,//真实姓名
    VIPCard:String,//会员卡,全网通用
    Img:String,//头图
    address:String,//地址
    area:String,//区域
    VIPScore:String,//积分
    havePet:Array,//拥有的宠物
})

const evaluationSchema = new mongoose.Schema({//评价模型
    ordersID:{//关联订单ID
        type:mongoose.Schema.Types.ObjectId,
        ref:''
    },
    // storesID:{//关联门店模型
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'storesModel'
    // },
})

mongoose.model("spoilMainsModel", spoilMainsSchema, "spoilMains");
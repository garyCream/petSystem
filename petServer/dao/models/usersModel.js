const mongoose = require("mongoose");

//店主账号模型
const usersSchema = new mongoose.Schema({
    user: String,//登录名
    pw: String,//密码
    phone:String,//手机号
    email:String,//邮箱
    state:{////状态
        type:String,
        default:'0' //0表示申请中 1可用 2不可用
    }
})

//平台管理员账号模型
const rootUsersSchema = new mongoose.Schema({
    user: String,
    pw: String
})

mongoose.model("usersModel", usersSchema, "users");//其中users为集合名
mongoose.model("rootUsersModel", rootUsersSchema, "rootUsers");
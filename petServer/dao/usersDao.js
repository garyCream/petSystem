const mongoose = require("mongoose");

module.exports.login = async user => {
    return await mongoose.model("usersModel").find(user);
}

module.exports.isReg = async user => {
    return await mongoose.model("usersModel").find(user);
}

module.exports.reg = async user => {
    return await mongoose.model("usersModel").create(user,(err,data)=>{})
}

//root
module.exports.rootLogin = async user => {
    return await mongoose.model("rootUsersModel").find(user);
}

const { login, isReg, reg,rootLogin } = require("../dao/usersDao");

module.exports.login = async user => {
    const data = await login(user);
    if (data.length > 0) {
        return true;
    }
    return false;
}

module.exports.isReg = async user => {
    const data = await isReg(user);
    if (data.length > 0) {
        return true;
    }
    return false;
}

module.exports.reg = async user => {
    const data = await reg(user);
    if (data.length > 0) {
        return true;
    }
    return false;
}

//root
module.exports.rootLogin = async user => {
    const data = await rootLogin(user);
    if (data.length > 0) {
        return true;
    }
    return false;
}
const { } = require("../dao/serversDao.js");

module.exports.addShoppings = async newShopping => {
    const result = await addShoppings(newShopping);
    return result;
}

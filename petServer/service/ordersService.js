const { } = require("../dao/ordersDao.js");

module.exports.addShoppings = async newShopping => {
    const result = await addShoppings(newShopping);
    return result;
}

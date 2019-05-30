const {  } = require("../dao/storesDao.js");

module.exports.addShoppings = async newShopping => {
    const result = await addShoppings(newShopping);
    return result;
}

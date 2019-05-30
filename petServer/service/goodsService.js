const { addShoppings, deleteShoppingById, getShoppingsByPage } = require("../dao/goodsDao.js");

module.exports.addShoppings = async newShopping => {
    const result = await addShoppings(newShopping);
    return result;
}

module.exports.deleteShoppingById = async ShoppingId => {
    const result = await deleteShoppingById(ShoppingId);
    if(result.ok === 1) {
        return true;
    }
    return false;
}

module.exports.getShoppingsByPage = async page => {
    return await getShoppingsByPage(page);
}
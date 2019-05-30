const mongoose = require("mongoose");

module.exports.addShoppings = async newShopping => {
    return await mongoose.model("ordersModel").create(newShopping);
}
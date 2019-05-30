const mongoose = require("mongoose");

module.exports.addShoppings = async newShopping => {
    return await mongoose.model("shoppingModel").create(newShopping);
}



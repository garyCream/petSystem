const mongoose = require("mongoose");

module.exports.addShoppings = async newShopping => {
    return await mongoose.model("shoppingModel").create(newShopping);
}

module.exports.deleteShoppingById = async shoppingId => {
    return await mongoose.model("Model").deleteOne(shoppingId);
}


module.exports.getShoppingsByPage = async ({ currentPage, pageSize }) => {
    let totalCount = await mongoose.model("shoppingModel").countDocuments();  // 总条数
    let totalPages = Math.ceil(totalCount / pageSize); // 总页数
    let shoppings = await mongoose.model("shoppingModel")
        .find()
        .populate("classId")
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize - 0)
    let pageData = {
        currentPage,  // 当前页码
        pageSize,  // 每页显示条数
        totalPages,   // 总页数
        totalCount, // 总条数
        shoppings,  // 学生数据
    };
    return pageData;
}
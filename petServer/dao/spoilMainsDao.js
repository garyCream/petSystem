const mongoose = require("mongoose");

module.exports.addStudents = async newStudent => {
    return await mongoose.model("studentsModel").create(newStudent);
}

module.exports.deleteStudentById = async studentId => {
    return await mongoose.model("studentsModel").deleteOne(studentId);
}

module.exports.amendStudentById = async studentId => {
    const {_id,age,name,gender}=studentId;
    return await mongoose.model("studentsModel").update({_id:_id},{age,name,gender}, (err, data) => {});
}


module.exports.getStudentsByPage = async ({ currentPage, pageSize }) => {
    let totalCount = await mongoose.model("studentsModel").countDocuments();  // 总条数
    let totalPages = Math.ceil(totalCount / pageSize); // 总页数
    let students = await mongoose.model("studentsModel")
        .find()
        .populate("classId")
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize - 0)
    let pageData = {
        currentPage,  // 当前页码
        pageSize,  // 每页显示条数
        totalPages,   // 总页数
        totalCount, // 总条数
        students  // 学生数据
    };
    return pageData;
}
const {  } = require("../dao/spoilMainsDao.js");

module.exports.addStudents = async newStudent => {
    const result = await addStudents(newStudent);
    if (result) {
        return true;
    }
    return false;
}

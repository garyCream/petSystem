var express = require('express');
var router = express.Router();

const { addStudents } = require("../service/spoilMainsService.js");

router.get('/addStudents', async (req, res) => {
    res.send(await addStudents(req.query));
});



module.exports = router;

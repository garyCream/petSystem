var express = require('express');
var router = express.Router();

const {  } = require("../service/ordersService.js");

router.post('/', async (req, res) => {
    res.send(await addShoppings(req.body));
});


module.exports = router;

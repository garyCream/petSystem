var express = require('express');
var router = express.Router();

const { addShoppings, deleteShoppingById, getShoppingsByPage } = require("../service/goodsService.js");

router.post('/addShoppings', async (req, res) => {
    res.send(await addShoppings(req.body));
});

router.post('/deleteShoppingById', async (req, res) => {
    res.send(await deleteShoppingById(req.body));
});

router.get('/getShoppingsByPage', async (req, res) => {
    res.send(await getShoppingsByPage(req.query));
});

module.exports = router;

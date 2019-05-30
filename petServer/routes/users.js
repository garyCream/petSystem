var express = require('express');
var router = express.Router();
const { login ,isReg,reg,rootLogin} = require("../service/usersService");


router.post('/login', async function (req, res, next) {//登陆
  res.send(await login(req.body));
});

router.post('/isReg', async function (req, res, next) {//判断是否登陆
  res.send(await isReg(req.body));
});

router.get('/reg', async function (req, res, next) {//注册
  res.send(await reg(req.query));
});


//root
router.post('/rootLogin', async function (req, res, next) {//平台管理员用户登陆
  res.send(await rootLogin(req.body));
});


module.exports = router;

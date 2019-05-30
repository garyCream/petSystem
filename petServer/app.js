var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require("./dao/database");
var index = require('./routes/index');
var users = require('./routes/users');//用户
var spoilMains = require('./routes/spoilMains');//宠主
var goods = require('./routes/goods');//商品
var stores = require('./routes/stores');//门店
var orders = require('./routes/orders');//订单
var servers = require('./routes/servers');//服务
var evaluates = require('./routes/evaluates');//评价

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);//用户
app.use('/spoilMains', spoilMains);//宠主
app.use('/goods', goods);//商品
app.use('/stores', stores);//门店
app.use('/orders', orders);//订单
app.use('/servers', servers);//服务
app.use('/evaluates', evaluates);//评价

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
app.listen('3000', function() {
  console.log("3000 端口启动成功！")
});

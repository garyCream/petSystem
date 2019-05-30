const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/ACBsystem';  // 其中 ACBsystem 为连接的数据库名称

mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {  
    console.log('Mongoose connected to ' + dbURI);
});


//引入数据模型
require("./models/spoilMainsModel");
require("./models/usersModel");
require("./models/goodsModel");
require("./models/storesModel");
require("./models/ordersModel");
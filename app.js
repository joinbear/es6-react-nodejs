
var 
  express      = require('express'),
  app          = express(),
  paramSet     = require('./app/config/params'),//中间件配置
  errorSet     = require('./app/config/error'),//错误处理配置
  // middleRouter = require('./app/controllers/middleController'),
  indexRouter  = require('./app/controllers/indexControler');


//---------中间的设置-----------

paramSet(app);

//---------中间的设置-----------

//----------用户自定义函数----------

// 前台入口

indexRouter(app);

// API交互入口
// middleRouter(app);


//----------用户自定义函数----------

//---------错误处理以及日志配置-----------
errorSet(app);


module.exports = app;

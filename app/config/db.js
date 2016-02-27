// mongoose config
var 
mongoose = require('mongoose'), 
connectionString = 'mongodb://localhost/blog',
options = {};
    
options = {  
  server: {
    auto_reconnect: true,//自动连接
    poolSize: 5 //连接池数量
  }
};
//开启调试
mongoose.set('debug', true);
//连接数据库
mongoose.connect(connectionString, options, function(err, res) {  
  if(err) {
    console.log('[mongoose log] Error connecting to: ' + connectionString + '. ' + err);
  } else {
    console.log('[mongoose log] Successfully connected to: ' + connectionString);
  }
});
//数据库的连接情况
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function callback () {
  console.log('mongoose open success');
});

module.exports = mongoose;